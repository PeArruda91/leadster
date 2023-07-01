import DownBanner from "./components/DownBanner";
import HeroSectionComponent from "./components/HeroSection";
import ModalVideo from "./components/ModalVideo";
import Navbar from "./components/navBar";
import FourButtonComponent from "./components/selectBar";


export default function Home() {
  return (
   <>
    <Navbar />
    <HeroSectionComponent />
    <FourButtonComponent />
    <ModalVideo />
    <DownBanner />
    </>
  )
}
