import '../css/styleTours.css'
import CardTours from './cardTours'
import contentTour from "./Data"
export default function Tours() {
  return (
    <div className='content-tours row justify-content-around container my-3 m-auto'>
            {
              contentTour.module.map((ele,index)=>{
                return <CardTours key={index} id={ele.id} title={ele.title} description={ele.content1}  img1={ele.img1} img2={ele.img2} img3={ele.img3} img4={ele.img4}/>
              })
            }
    </div>
  )
}
