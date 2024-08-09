
import React from 'react'
import Sliderx from "./Sliderx";
import Slider from "./Slider";
import Image from 'next/image';
import Cut from './cut'

import Post from './post'
import Link from 'next/link';



export default function Abuot() {
  return (
    <>
     <div className="container">
      <h4>เกี่ยวกับอาจาร์เอ็กซ์และคอร์สการตลาดออนไลน์</h4>
      <p>สวัสดีครับ! ผมชื่อเอ็กซ์ ผู้เชี่ยวชาญด้านการตลาดออนไลน์ที่มีประสบการณ์กว่า 10 ปีในการทำโฆษณาบน Facebook และ Google และการปรับปรุง SEO ผมมีความมุ่งมั่นที่จะช่วยให้ธุรกิจต่างๆ สามารถเข้าถึงกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพและเพิ่มการมองเห็นบนโลกออนไลน์</p>
      <strong>เกี่ยวกับคอร์สของเรา</strong>
      <p>คอร์สการตลาดออนไลน์ของเราถูกออกแบบมาเพื่อให้คุณได้รับความรู้เชิงลึกเกี่ยวกับการทำโฆษณาบน Facebook และ Google รวมถึงเทคนิค SEO ที่สำคัญ คอร์สนี้ครอบคลุมทุกแง่มุมของการตลาดออนไลน์ ตั้งแต่การสร้างแคมเปญโฆษณาที่มีประสิทธิภาพไปจนถึงการวิเคราะห์ผลลัพธ์</p>
      <ul>
      ทำไมถึงควรเลือกคอร์สนี้
      <li> <strong>การฝึกปฏิบัติจริง:</strong> เรียนรู้และทดลองใช้เครื่องมือการตลาดที่ใช้จริง </li>
      <li><strong>การสนับสนุนตลอดเวลา:</strong>หลังจากจบคอร์ส, คุณสามารถสอบถามและขอคำแนะนำจากผมได้ตลอดเวลา</li>
      <li><strong>ผลลัพธ์ที่ชัดเจน:</strong> คุณจะได้เรียนรู้วิธีการที่สามารถนำไปใช้ในการสร้างแคมเปญที่ประสบความสำเร็จ
      </li>
      <strong>คำรับรองจากผู้เรียน</strong><p>“คอร์สนี้ช่วยให้ฉันเข้าใจการทำโฆษณาบน Facebook และ Google อย่างลึกซึ้ง และการสนับสนุนหลังการเรียนทำให้ฉันสามารถนำความรู้ไปใช้ได้จริง” - ผู้เรียนท่านหนึ่ง</p>
      </ul>

      <strong>ติดต่อเรา
      </strong>
     <p> หากคุณมีคำถามหรือสนใจสมัครคอร์ส สามารถติดต่อเราได้ที่:</p>
     <ul>

      <li>อีเมล: admin@ad-dev.net</li>
      <li>โทรศัพท์: 083-252-8058</li>
    
      <Link href="https://lin.ee/ZU0LrWq"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0"/></Link>
     </ul>
     <p>สมัครคอร์สวันนี้ และเริ่มต้นการเดินทางสู่ความสำเร็จในการตลาดออนไลน์!</p>
     </div>
    
    
   
     <Post/>

     
     <Cut/>
     <div className="text-center"><h3>ตัวอย่างประวัติการทำงานคร่าวๆ</h3></div>

     <section className='section'>  

    
        
        <div className="item"> <Image src="/imggg/01.webp" width={480} height={350}  alt="ads" /> </div>
        <div className="item"> <Image src="/imggg/02.webp" width={480} height={350}  alt="ads" /></div>
        <div className="item">  <Image src="/imggg/03.webp" width={480} height={350}  alt="ads" /></div>
        <div className="item">  <Image src="/imggg/04.webp" width={480} height={350}  alt="ads" /></div>
        <div className="item">  <Image src="/imggg/05.webp" width={480} height={350}  alt="ads" /></div>
        <div className="item">  <Image src="/imggg/06.webp" width={480} height={350}  alt="ads" /></div>
        
        
       
  



  
      </section>

      <Cut/>
<div className="cut m-3"></div>

<main className='container text-center' id='review'>   
 <div className="m-5"> <h3>review  รีวิวจากลูกค้าใช้งานจริง</h3></div>


  <Sliderx />

 

  <Slider />


</main>




  

<Cut/>

  

     

    </>
  )
}
