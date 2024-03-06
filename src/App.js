import {BrowserRouter,Route,Routes} from "react-router-dom"
import NotFound from './Component/NotFound'
import NavBar from "./Component/NavBar"
import Tours from "./Component/Tours"
import InfoTours from "./Component/infoTours"
import AboutTourism from "./Component/AboutTourism"
import InfoTopic from "./Component/infoTopic"
import AboutComp from "./Component/AboutComp"
import Footer from "./Component/Footer"

const App = ()=>{
  // const topNav = document.querySelector('.topNav')
  // console.log(topNav)
  // window.onscroll = ()=>{
  //   console.log((window.scrollY)
  // }



  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<Tours/>} />
          <Route path="/info tours" element={<InfoTours/>} />
          <Route path="/موضوعات عن السياحة فى ايطاليا" element={<AboutTourism/>} />
          <Route path="/info topic" element={<InfoTopic />} />
          <Route path="/about king italy tours" element={<AboutComp/>} />
          <Route path="*" element={<NotFound color="info" message="Page Not Found"/>} />
          </Routes>
          <Footer />
          </BrowserRouter>
      </>
    )
  }

  export default App;


