
import './css/bootstrap.min.css'
import './css/style.css'
import './js/Main.js'

// import AboutUs from './AboutUs.js';
import Footer from './Footer.js';
import Copyright from './Copyright.js';
// import ContactUs from './ContactUs.js';
// import Service from './Service.js';
import BlogB from './BlogB.js';
import Feature from './Feature.js';
import Quote from './Quote.js';
import Price from './Price.js';
import Navbar from './Navbar.js';
import BackToTop from './BackToTop.js';
// import VendorCarousel from './VendorCarousel.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AboutUs /> */}
      {/* <ContactUs /> */}
      {/* <Service /> */}
      <BlogB />
      {/* <VendorCarousel /> */}
      <Feature />
      <Quote />
      <Price />
      <Footer />
      <Copyright />
      <BackToTop />
    </div>
  );
}

export default App;
