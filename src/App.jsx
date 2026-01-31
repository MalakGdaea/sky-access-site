import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Quote from "./components/Quote.jsx";
import GlobalSection from "./components/GlobalSection.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Services/>
            <Process/>
            <Quote />
            <GlobalSection />
        </>
    )
}

export default App