// components

import ContactUs from "./Components/ContactUs";
import Extensions from "./Components/Extensions";
import Faqs from "./Components/Faqs";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Features />
        <Extensions />
        <Faqs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
