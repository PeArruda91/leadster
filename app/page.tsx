import DownBanner from "./components/DownBanner";
import HeroSectionComponent from "./components/HeroSection";
import ModalVideo from "./components/ModalVideo";
import Footer from "./components/footer";
import MktVideo from "./components/mktdigVIdeos"; 
import Navbar from "./components/navBar";
import FourButtonComponent from "./components/selectBar";


export default function Home() {
  return (
   <>
    <Navbar />
    <HeroSectionComponent />
    <FourButtonComponent />
    <DownBanner />
    <Footer />
    </>
  )
}
