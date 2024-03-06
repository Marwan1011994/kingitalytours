import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
const CardTours =  (props)=> {
  const idTours = useRef();
  const idCards = ()=>{
    localStorage.setItem("idCards", idTours.current.id );
    window.scrollTo({
      top: 600,
      behavior: "smooth"
    });
  
    }
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-12 p-2 my-2">
        <Card  dir='rtl'  style={{height:"100%"}} className="shadow">
        <Carousel fade>
        <Carousel.Item>
        <div className='w-100 h-100 bg-black position-absolute'></div>
        <img src={props.img1} alt="" style={{width:"100%",height:"50vh"}}/>
        </Carousel.Item>
        <Carousel.Item>
        <div className='w-100 h-100 bg-black position-absolute'></div>
        <img src={props.img2} alt="" style={{width:"100%",height:"50vh"}}/>
        </Carousel.Item>
        <Carousel.Item>
        <div className='w-100 h-100 bg-black position-absolute'></div>
        <img src={props.img3} alt="" style={{width:"100%",height:"50vh"}}/>
        </Carousel.Item>
        <Carousel.Item>
        <div className='w-100 h-100 bg-black position-absolute'></div>
        <img src={props.img4} alt="" style={{width:"100%",height:"50vh"}}/>
        </Carousel.Item>
        </Carousel>
          <Card.Body className='position-relative'>
            <Card.Title style={{minHeight:"100px"}}>{props.title}</Card.Title>
            <Card.Text style={{minHeight:"280px",textAlign:"justify"}}>
              {props.description}
            </Card.Text>
            <div className='divbtn w-100 d-flex justify-content-around' style={{minHeight:"40px"}}>
                <Button variant="primary" id={props.id} ref={idTours} onClick={idCards}><Link to="/info tours">Read More</Link></Button>
                <Button variant="primary" className='btn btn-success' onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}}>احجز الان</Button>
            </div>
          </Card.Body>
        </Card>
    </div>
  );
}

export default  CardTours;