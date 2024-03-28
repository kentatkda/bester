import Header from "../components/Header"
import Footer from "../components/Footer"
import ShinkanDetails from "../components/ShinkanDetails";
import Social from "../components/Social";
import  ContactsDesc  from "../components/Contacts";


export const Shinkan = () => {
    return (
        <div>
            <Header/>
            <Social/>
            <ShinkanDetails/>
            <ContactsDesc/>
            <Footer/>
        </div>
    )
}