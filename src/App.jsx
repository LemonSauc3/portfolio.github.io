import Name from "./components/Name.jsx";
import About from "./components/About.jsx";
import Jobs from "./components/Jobs.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

function App() {
    return (
        <div class="min-h-screen flex flex-col items-center justify-center content-center bg-gradient-to-r from-cyan-100 to-blue-200 p-10 space-y-10">
            <Name />
            <About />
            <Jobs />
            <Content />
            <Contact />
            <Footer />
        </div>
    )
}
export default App;