import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Home } from "./Home"

export const Layout = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Footer />
    </div>
  )
}
