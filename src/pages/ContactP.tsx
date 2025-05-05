import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const ContactP = () => {
    return (
        <div>
            <Header />
            <div className="mt-[100px]">
                <Contact />
            </div>
            <Footer />
        </div>
    )
}
