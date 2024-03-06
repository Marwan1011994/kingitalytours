import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function SliderAboutTourism(props) {
    const idTopic = useRef();
    const idInfoTopic = ()=>{
      localStorage.setItem("idInfoTopic", idTopic.current.id );
      window.scrollTo({
        top: 600,
        behavior: "smooth"
      });
    }
  return (
        <div className='my-3' >
                <Card  dir='rtl'  style={{height:"100%"}} className="shadow">
                    <img src={props.img1} alt="" style={{width:"100%",height:"50vh"}}/>
                    <Card.Body>
                    <Card.Title style={{minHeight:"50px"}}>{props.title}</Card.Title>
                        <Card.Text style={{textAlign:"justify"}}>
                        {props.description1}
                        </Card.Text>
                        <Card.Text style={{textAlign:"justify"}}>
                            {props.description2}
                        </Card.Text>
                    <div className='d-flex justify-content-center' style={{minHeight:"40px"}}>
                    <Button variant="primary" id={props.id} ref={idTopic}  onClick={idInfoTopic}><Link to="/info topic">Read More</Link></Button>
                    </div>
                    </Card.Body>
                </Card>
        </div>
  );
}

export default SliderAboutTourism;
