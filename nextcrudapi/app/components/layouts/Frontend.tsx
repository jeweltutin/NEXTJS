import Footer from "../ecom/Footer"
import HeaderMain from "../ecom/HeaderMain"
import HeaderTop from "../ecom/HeaderTop"
import MobNavbar from "../ecom/MobNavbar"
import Navbar from "../ecom/Navbar"


const Frontend = ({children}:any) => {
  return (
    <div>
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <MobNavbar />
        {children}
        <Footer />
    </div>
  )
}

export default Frontend
