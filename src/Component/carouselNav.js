import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className='w-100 h-100 bg-black position-absolute'></div>
        <img src={slider1} alt="" style={{width:"100%",height:"100vh"}}/>
        <Carousel.Caption>
            <h3>سافر مع سائق عربي في روما واحصل على أفضل تجربة سياحية</h3>
            <Button variant="primary" size="lg"  onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}}>
            احجز رحلتك الان
            </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='w-100 h-100 bg-black position-absolute'></div>
      <img src={slider2} alt=""  style={{width:"100%",height:"100vh"}}/>
        <Carousel.Caption>
          <h3>استكشف ايطاليا بكل حرية مع سائق عربي يتحدث لغتك</h3>
          <Button variant="primary" size="lg"  onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}}>
          احجز رحلتك الان
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='w-100 h-100 bg-black position-absolute'></div>
      <img src={slider3} alt=""  style={{width:"100%",height:"100vh"}}/>
        <Carousel.Caption>
          <h3>تمتع بتجربة سياحية فريدة في ميلانو مع سائق عربي خبير</h3>
          <Button variant="primary" size="lg"  onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}}>
          احجز رحلتك الان
         </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='w-100 h-100 bg-black position-absolute'></div>
      <img src={slider4} alt=""  style={{width:"100%",height:"100vh"}}/>
        <Carousel.Caption>
          <h3> استمتع برحلة لا تنسى في ميلانو مع خدماتنا المميزة للسائقين العرب</h3>
          <Button variant="primary" size="lg"  onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}}>
          احجز رحلتك الان
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;