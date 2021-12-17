import React from "react";
import FadeIn from "./components/FadeIn";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <FadeIn>
                    <Home />
                </FadeIn>
                <FadeIn>
                    <About />
                </FadeIn>
                <FadeIn>
                    <Skills />
                </FadeIn>
                <FadeIn>
                    <Projects />
                </FadeIn>
                <FadeIn>
                    <Contact />
                </FadeIn>
                <FadeIn>
                    <Footer />
                </FadeIn>
            </div>
        )
    }

};

export default App;