import infoIt from "./InfoData"
import Carousel from 'react-bootstrap/Carousel';
import download from '../images/download.png'
import "../css/styleAbout.css"
export default function InfoTopic() {
    const idCard = localStorage.getItem("idInfoTopic");
    const infoTour = infoIt.module.find((ele)=>{
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
            </ul>
            <ol>
                {infoTour.content3.map((ele)=>{
                    return <li>{ele}</li>
                })}
            </ol>
            <ul>
                <li>{infoTour.content4}</li>
            </ul>
        </div>
        <div className="container">
            <Carousel fade>
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
                <h5 onClick={()=>{window.open("mailto:info@kingityalytours.com","_blank")}} className='toclick my-4' dir='ltr'><i className="fa-brands fa-square-whatsapp fa-2xl mx-2 text-success"></i> +393248708348</h5>
                <div>
                    <img src={download} alt='QR CODE' style={{width:"150px",height:"150px"}}/>
                </div>
            </div>
            <div className='mt-4 text-center shadow py-4 rounded-3'>
                <h6>للتواصل معانا عبر الهاتف</h6>
                <h5 onClick={()=>{window.open("mailto:info@kingityalytours.com","_blank")}} className='toclick my-4' dir='ltr'><i className="fa-solid fa-square-phone fa-2xl text-primary"></i> +393248708348</h5>
            </div>
        </div>
    </div>
  )
}
