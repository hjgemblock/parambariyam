
import './App.css';
import AboutUs from './Components/AboutUs';
import BestSellers from './Components/BestSellers';
import CartPage from './Components/Cartpage';
import CategorySection from './Components/CategorySection';
import CheckoutPage from './Components/Checkout';
import WhyChooseUs from './Components/Features';
import Footer from './Components/Footer';
import Header1 from './Components/Header/Header1';
import Header2 from './Components/Header/Header2';
import MilletGrid from './Components/Header/MilletGrid';
import HeroSection from './Components/HeroSection';
import HighlightedFeatures from './Components/HighlightedFeatures';
import OurProducts from './Components/Ourproducts';
import ProductComponent from './Components/Product';
import ProductDetail from './Components/ProductDetail';
import Reviews from './Components/Reviews';
import StarRecipe from './Components/steps';
import Testimonials from './Components/Testimonial';
import WhyOurProduct from './Components/WhyOurProduct';


function App() {
  return (
    <div className="bg-radial-white-black">
      <Header1/>
      <Header2/>
      {/* {/* <HeroSection/>
      <WhyChooseUs/>
      
      <BestSellers/>
      <AboutUs/>
      <Testimonials/>
      <Footer/>
      <MilletGrid/>
      <CategorySection/>
      <OurProducts/>
      <WhyOurProduct/>
      <Testimonials/>
      <Footer/>
      
      <ProductComponent/> }
      <ProductDetail/>
      <HighlightedFeatures/>
      <StarRecipe/>
      <Reviews/> */}
      <CartPage/>
      <CheckoutPage/>
    

    </div>
  );
}

export default App;
