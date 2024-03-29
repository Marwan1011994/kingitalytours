import React from 'react'
import logoKIT from '../images/logoKIT.PNG'
import download from '../images/download.png'
import "../css/styleAbout.css"
export default function AboutComp() {
  return (
    <div dir='rtl'>
        <div className='d-flex justify-content-center mt-3'>
            <img src={logoKIT} alt='company logo' style={{height:"300px"}}/>
        </div>
        <div className=' mt-3 container shadow py-2 rounded-3' dir='rtl'>
            <ul style={{listStyleType:"square",listStylePosition: "inside",fontSize:"20px"}}>
                <li>هل تبحث عن تجربة سياحية مميزة في إيطاليا؟</li>
                <li>هل تفضل الراحة والحرية في رحلتك؟</li>
                <li>هل ترغب في التواصل مع سائق يتحدث لغتك العربية؟</li>
            </ul>
            <div className='px-3'>
            <h6 >نقدم لك حلًا مثاليًا: رحلة برفقة سائق عربي في إيطاليا! </h6>
            <h5>شركتنا متخصصة في توفير خدمات سائقين عربيين في مختلف مدن إيطاليا، بما في ذلك روما وميلانو.</h5>
            <h6>نوفر لك:</h6>
            <ul style={{listStylePosition: "inside",fontSize:"20px"}}>
            <li>سائقون عربيون ذوو خبرة واسعة في إيطاليا.</li>
            <li>معرفة واسعة بأفضل الأماكن السياحية والمعالم التاريخية.</li>
            <li>خدمات مميزة تناسب احتياجاتك ورغباتك.</li>
            <li>أسعار تنافسية تناسب جميع الميزانيات.</li>
            <li>حرية وراحة في التنقل دون الحاجة للقلق بشأن مواصلات أو اتجاهات.</li>
            <li>التواصل السهل والتفاهم الكامل مع السائق.</li>
            </ul>
            <h6>نضمن لك:</h6>
            <ul style={{listStyleType:"circle",listStylePosition: "inside",fontSize:"20px"}}>
                <li>رحلة آمنة ومريحة.</li>
                <li>تجربة سياحية مميزة لا تُنسى.</li>
                <li>الاستفادة من أفضل الخدمات بأفضل الأسعار.</li>
            </ul>
            <h3>لا تتردد في التواصل معنا للحصول على مزيد من المعلومات حول خدماتنا أو لحجز رحلتك برفقة سائق عربي في إيطاليا!</h3>
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
    
    </div>
  )
}
