import '../css/styleTours.css'
import SliderAboutTourism from './SliderAboutTourism'
import infoIt from "./InfoData"

export default function AboutTourism() {
  return (
    <div className=' row container m-auto justify-content-center' dir='rtl'>
       
        <div className='col-10 my-3'>
            {
                infoIt.module.map((ele,index)=>{
                return <SliderAboutTourism key={index} id={ele.id} title={ele.title} description1={ele.content1} description2={ele.content2}  img1={ele.img}/>
                })
            }
        </div>
    </div>
  )
}
