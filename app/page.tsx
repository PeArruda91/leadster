import DownBanner from "./components/DownBanner";
import HeroSectionComponent from "./components/HeroSection";
import DownBar from "./components/downBar";
import Footer from "./components/footer";
import Navbar from "./components/navBar";
import FourButtonComponent from "./components/selectBar";


export default function Home() {
  return (
   <>
    <Navbar />
    <HeroSectionComponent />
    <FourButtonComponent />
    <DownBanner />
    <DownBar />
    <Footer />
    </>
  )
}
