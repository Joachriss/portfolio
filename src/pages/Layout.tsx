import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { WhatsAppButton } from "../components/WhatsAppButton"
import { Home } from "./Home"

export const Layout = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <WhatsAppButton />
        <Footer />
    </div>
  )
}
