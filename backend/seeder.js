const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Product = require("./models/Product")
const User = require("./models/User")
const products = require("./data/products")

dotenv.config()


mongoose.connect(process.env.MONGO_URI)


// Function to seed data

const seedData = async ()=>{
    try {

        // Clears existing data

        await Product.deleteMany()
        await User.deleteMany()

        // Create a default admin user
        
        const createdUser = await User.create({
            name:"Admin",
            email:"admin@admin.com",
            password:"123456789",
            role:"admin"
        })

        // Assign default user ID to each product

        const userID = createdUser._id

        const sampleProducts = products.map((product)=>{
            return {...product , user: userID}
        })

        // Inserting the products into the database

        await Product.insertMany(sampleProducts)

        console.log("Products data seeded successfully")
        process.exit()



    } catch (error) {
        console.error("Error seeding the data:", error)
        process.exit(1)
    }
}

seedData()