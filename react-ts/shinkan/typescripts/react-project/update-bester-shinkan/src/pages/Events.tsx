import Header from "../components/Header"
import Footer from "../components/Footer"
import EventsDetails from "../components/EventsDetails"
import Social from "../components/Social";

export function Events()  {
    return (
    <div>
        <Header/>
        <Social/>
        <EventsDetails/>
        <Footer/>
    </div>
    );
}