import DownBanner from "./components/DownBanner";
import HeroSectionComponent from "./components/HeroSection";
import Footer from "./components/footer";
import Navbar from "./components/navBar";
import FourButtonComponent from "./components/selectBar";
import DownBar from './components/downBar';

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
