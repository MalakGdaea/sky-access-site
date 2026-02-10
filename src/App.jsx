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
            <main>
                <Hero/>
                <Services/>
                <Process/>
                <Quote />
            </main>
            <GlobalSection />
        </>
    )
}

export default App
