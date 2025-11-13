import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=21" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=31" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=41" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=23" }],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=56" }],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=57" }],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=58" }],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=59" }],
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <Hero />

      {/* Gender Collection Section  */}
      <GenderCollectionSection />

      {/* New Arrivals Section  */}
      <NewArrivals />

      {/* Best Sellers Collection */}

      <h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>
      <ProductDetails />

      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears For Women
        </h2>

        <ProductGrid products={placeholderProducts} />
      </div>

      {/* Featured Collection  */}

      <FeaturedCollection />

      {/* Features Section  */}

      <FeaturesSection /> 
    </div>
  );
};

export default Home;
