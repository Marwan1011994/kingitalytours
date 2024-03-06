import contentTour from "./Data"
import Carousel from 'react-bootstrap/Carousel';
import download from '../images/download.png'
import "../css/styleAbout.css"
export default function InfoTours() {
    const idCard = localStorage.getItem("idCards");
    const infoTour = contentTour.module.find((ele)=>{
        return ele.id === idCard
    })
  return (
    <div dir="rtl">
        <div className="container shadow my-4 p-4">
            <h2 className="text-center">{infoTour.title}</h2>
        </div>
        <div className="container shadow my-4 p-4">
            <ul>
                <li>{infoTour.content1}</li>
                <li>{infoTour.content2}</li>
                <li>{infoTour.content3}</li>
            </ul>
        </div>
        <div className="container">
            <Carousel fade>
            <Carousel.Item>
            <img src={infoTour.img} alt="" style={{width:"100%",height:"60vh"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={infoTour.img6} alt="" style={{width:"100%",height:"60vh"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={infoTour.img5} alt="" style={{width:"100%",height:"60vh"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={infoTour.img1} alt="" style={{width:"100%",height:"60vh"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={infoTour.img2} alt="" style={{width:"100%",height:"60vh"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={infoTour.img3} alt="" style={{width:"100%",height:"60vh"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={infoTour.img4} alt="" style={{width:"100%",height:"60vh"}}/>
            </Carousel.Item>
            </Carousel>
        </div>
        <h6 className="text-center mt-2">{infoTour.titlepic}</h6>
        <div>
            <h3  className='mt-4 text-center shadow py-4 rounded-3'>لا تتردد في التواصل معنا للحصول على مزيد من المعلومات حول خدماتنا أو لحجز رحلتك برفقة سائق عربي في إيطاليا!</h3>
            <div className='mt-4 text-center shadow py-4 rounded-3'>
                <h6>للتواصل معانا عبر البريد الالكترونى</h6>
                <h5 onClick={()=>{window.open("mailto:info@kingityalytours.com","_blank")}} className='toclick my-4'>Info@kingityalytours.com</h5>
            </div>
            <div className='mt-4 text-center shadow py-4 rounded-3'>
                <h6>للتواصل معانا عبر الوتساب</h6>
                <h5 onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}} className='toclick my-4' dir='ltr'><i className="fa-brands fa-square-whatsapp fa-2xl mx-2 text-success"></i> +393248708348</h5>
                <div>
                    <img src={download} alt='QR CODE' style={{width:"150px",height:"150px"}}/>
                </div>
            </div>
            <div className='mt-4 text-center shadow py-4 rounded-3'>
                <h6>للتواصل معانا عبر الهاتف</h6>
                <h5 onClick = {() => {window.open('tel:+393248708348', '_blank')}} className='toclick my-4' dir='ltr'><i className="fa-solid fa-square-phone fa-2xl text-primary"></i> +393248708348</h5>
            </div>
        </div>
    </div>
  )
}
