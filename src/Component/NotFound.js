import {Alert} from 'react-bootstrap'
export default function NotFound({message,color}) {
  return (
    // <h2 className="bg-primary text-white d-flex justify-content-center py-4 my-4">{message}</h2>
    <Alert  variant={color} className='text-center h 1'>
    {message}
  </Alert>
  )
  
}
