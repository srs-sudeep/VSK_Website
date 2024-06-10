import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoadingPage from "./components/LoadingPage";
// import Navbar from "./components/Navbar";/
// import Footer from "./components/Footer";
import { Navbar, Footer } from "./components";
import { Home } from "./pages";
import { NextUIProvider } from "@nextui-org/react";
function App() {
  // const [loading, setLoading] = useState(true);
  // const location = useLocation();
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       GLOBE({
  //         el: myRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: true,
  //         minHeight: 20.0,
  //         minWidth: 20.0,
  //         scale: 0.05,
  //         scaleMobile: 1.0,
  //         size: 0.5,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // if (loading) {
  //   return <LoadingPage />;
  // }
  return (
    <NextUIProvider>
      <div>
        {/* <div className="overlay">
        <div ref={myRef} className="bg" id="vanta">
          {" "}
        </div>
      </div> */}
        <Navbar />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App;

// homepage , projects ,project,blog, community,programs
