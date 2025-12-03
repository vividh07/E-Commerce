const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// function to get cart by userid or guestid

const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  }
  return null;
};

// Cart for a quest user of logged user

router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Determining if user is logged or not

    let cart = await getCart(userId, guestId);

    // if cart exists it will be updated

    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color
      );

      if (productIndex > -1) {
        // if product exists update qunaity

        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          size,
          color,
          quantity,
        });
      }

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      const newCart = await Cart.create({
        userId: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({message:"Server Error"})
  }
});



// Update product quantity in the cart for a guest or logged-in user

router.put("/", async (req, res)=>{
    const {productId, quantity , size , color , guestId , userId} = req.body

    try {
        
        let cart = await getCart(userId , guestId)
        if(!cart) return res.status(404).json({message:"Cart not found"})

        const productIndex = cart.products.findIndex(
            (p) => p.productId.toString() === productId && 
            p.size === size && 
            p.color === color
        )

        if(productIndex > -1){
            if(quantity > 0){
                cart.products[productIndex].quantity = quantity
            }
            else{
                cart.products.splice(productIndex, 1)
            }

            cart.totalPrice = cart.products.reduce((acc, item)=> acc + item.price * item.quantity, 0)

            await cart.save()
            return res.status(200).json(cart)

        }else{
            return res.status(404).json({message:"Product not found in cart"})
        }


    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Server Error"})
    }


 })





module.exports = router