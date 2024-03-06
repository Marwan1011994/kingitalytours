import '../css/styleNav.css'
import Carousel from "./carouselNav"
import MenuNav from './menuNav'

function SectionNav() {
  return (
    <>
        <div className="topNav container-fluid shadow px-2 fixed-top">
            <div>
                <h5  onClick={()=>{window.open("#","_self")}}><span>K</span>ing <span>I</span>taly <span>T</span>ours</h5>
            </div>
            <div>
                <h5 onClick={()=>{window.open("mailto:info@kingityalytours.com","_blank")}}>Info@kingityalytours.com</h5>
            </div>
            <div className="">
                <i className="fa-brands fa-square-facebook fa-2xl" onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}} style={{color:"#0000ff"}}></i>
                <i className="fa-brands fa-square-whatsapp fa-2xl mx-2"  onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}} style={{color:"green"}}></i>
                <i className="fa-solid fa-square-phone fa-2xl" onClick = {() => {window.open('tel:+393248708348', '_blank')}} style={{color:"#211C6A"}}></i>
            </div>
        </div>
        <Carousel/>
        <MenuNav />

    </>
  );
}

export default SectionNav;