import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { Navbar } from './components/NavigationBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from 'react-floating-whatsapp';

function App() {
  return (
    <div className="App container">
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Values />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp
        phoneNumber='+263787260030'
        avatar='https://cdn.clipond.com/CareHaven/122849.jpg'
        accountName='Care Haven'
      />
    </div>
  );
}

export default App;
