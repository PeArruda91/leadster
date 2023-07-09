import DownBanner from "./components/DownBanner";
import HeroSectionComponent from "./components/HeroSection";
import Footer from "./components/footer";
import Navbar from "./components/navBar";
import SelectBar from "./components/selectBar";
import FooterBar from "./components/footerBar";


export default function Home() {
  return (
   <>
    <Navbar />
    <HeroSectionComponent />
    <SelectBar />
    <DownBanner />
    <FooterBar />
    <Footer />
    </>
  )
}
