import React from 'react';
import Link from 'next/link';
import About from './components/About';




export default function Page() {
  return (
    <>

    <Link href='/line' target='bank' className="bounce"><img src="/img/line.png"alt="" className='bounce' width={50} /></Link>

      <div className='container'>
        <header>
          <h1>รับทำโฆษณาออนไลน์ Drak</h1>
          <img src="/img/head1.jpg" width={800} alt="Header Image" className="header-image"/>
          <h3 className="mb-4">โฆษณาออนไลน์สายเทาเพื่อธุรกิจของคุณ</h3>
        </header>

        <div className="cut"></div>

        <section className="service mt-3">
          <h2>Service</h2>
          <div className="text-center">
            <img src="/img/fb.png" width={60} alt="facebook ads" />
            <img src="/img/ads.png" width={50} alt="ads" />
          </div>

          <section className='facebookads' id='facebook'>
            <div className="card mb-3">
              <h2>รับทำโฆษณา Facebook Ads สายเทา</h2>
              <img src="/img/fb.jpg" className="card-img-top" width={700}alt="โฆษณา Facebook"/>
              <div className="card-body">
                <h3 className="card-title">รับทำโฆษณา Facebook Ads สายเทา</h3>
                <p className="card-text">
                  <strong>รับทำโฆษณา Facebook Ads สายเทา</strong> ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท ไม่มีค่าใช้จ่ายเพิ่มเติม มีรีวิวจากลูกค้าจริงให้ชม
                  <br /><strong>จ้างทำโฆษณาออนไลน์สายเทา</strong> ไว้ใจเราได้ รูปภาพทั้งหมดนี้เป็นส่วนหนึ่งในการทำงานของเรา
                  <br /><strong>การเปลี่ยนแปลงของอัลกอริธึม</strong> Facebook มีการเปลี่ยนแปลงอัลกอริธึมอย่างสม่ำเสมอ ซึ่งอาจส่งผลกระทบต่อการมองเห็นและประสิทธิภาพของโฆษณา
                  <br /><strong>การควบคุมความเป็นส่วนตัว</strong> การเปลี่ยนแปลงในนโยบายความเป็นส่วนตัว เช่น GDPR และ CCPA ส่งผลให้ Facebook ต้องปรับเปลี่ยนวิธีการเก็บข้อมูล
                  <br /><strong>การแข่งขันที่สูง</strong> จำนวนผู้ลงโฆษณาที่เพิ่มขึ้นทำให้การแข่งขันในแพลตฟอร์มสูงมาก
                  <br /><strong>การเปลี่ยนแปลงในค่าใช้จ่าย</strong> ค่าใช้จ่ายในการลงโฆษณาอาจมีการเปลี่ยนแปลงอย่างต่อเนื่อง
                  <br /><strong>ข้อจำกัดในการเข้าถึงข้อมูล</strong> ข้อจำกัดในการเข้าถึงข้อมูลและรายงาน
                  <br />ต้องการดูรายละเอียดเพิ่มเติมต่างๆ ได้ที่
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <Link href="/facebook" className='btn btn-primary'>Facebook Ads</Link>
                  </small>
                </p>
              </div>
            </div>
          </section>

          <div className="cut"></div>

          <section className='google mt-3' id='google'>
            <div className="text-center">
              <img src="/img/gg.png" width={50}  height={50}alt="รับทำโฆษณา Google สายเทา" />
              <img src="/img/ads.png" width={50}  height={50}alt="ads" />
            </div>
            <div className="card mb-3">
              <h2>รับทำโฆษณา Google สายเทา</h2>
              <img src="/img/head.jpg" className="card-img-top" width={700}  alt="Google"/>
              <div className="card-body">
                <h3 className="card-title">การรับทำโฆษณา Google และ SEO: เคล็ดลับและปัญหาที่ควรระวัง</h3>
                <p className="card-text">
                  <strong>รับทำโฆษณา Google สายเทา</strong> ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท ไม่มีค่าใช้จ่ายเพิ่มเติม มีรีวิวจากลูกค้าจริงให้ชม
                  <br /><strong>การทำโฆษณาผ่าน Google (Google Ads) และการทำ SEO</strong> เป็นกลยุทธ์ที่สำคัญในการเพิ่มการมองเห็นและดึงดูดลูกค้า
                  <br /><strong>ข้อดีของ Google Ads</strong>
                  <br />- การเข้าถึงที่กว้าง
                  <br />- การกำหนดเป้าหมาย
                  <br />- การวัดผลลัพธ์
                  <br /><strong>ปัญหาที่มักเกิด</strong>
                  <br /><strong>ค่าใช้จ่ายที่สูง:</strong> การแข่งขันในบางกลุ่มคำค้นอาจทำให้ค่าใช้จ่ายต่อคลิก (CPC) สูง
                  <br /><strong>การจัดการแคมเปญที่ซับซ้อน</strong> การสร้างและจัดการแคมเปญอาจเป็นเรื่องซับซ้อน
                  <br /><strong>การเปลี่ยนแปลงอัลกอริธึม</strong> การเปลี่ยนแปลงในอัลกอริธึมของ Google อาจส่งผลกระทบต่อประสิทธิภาพของโฆษณา
                  <br />ต้องการดูรายละเอียดเพิ่มเติมต่างๆ ได้ที่
                </p>


                <p className="card-text">
                  <small className="text-body-secondary">
                    <Link href='/google' className='btn btn-success'>Google Ads</Link>
                  </small>
                </p>
              </div>
            </div>
          </section>

          <div className="cut"></div>

          <section className='cass mt-3' id='cass'>
            <div className="text-center">
              <img src="/img/logo.png" width={50} height={50} alt="รับทำโฆษณา Google สายเทา" />
              <img src="/img/ads.png" width={50} height={50} alt="ads" />
            </div>
            <div className="card mb-3">
              <h2>คอร์สสอนการตลาดออนไลน์ Facebook และ Google สายเทา</h2>
              <img src="/img/cass.jpg" className="card-img-top" width={600} alt="คอร์สสอนทำโฆษณา"/>
              <div className="card-body">
                <h3 className="card-title">คอร์สสอนการตลาดออนไลน์ Facebook และ Google: เปิดโลกใหม่ให้กับธุรกิจของคุณ</h3>
                <p className="card-text">
                  การตลาดออนไลน์เป็นสิ่งสำคัญในการเติบโตของธุรกิจในยุคดิจิทัล คอร์สนี้จะช่วยให้คุณเข้าใจลึกซึ้งถึงการทำโฆษณาบน Facebook และ Google
                  <br /><strong>ทำไมต้องเลือกคอร์สนี้?</strong>
                  <br />- **เรียนรู้จากผู้เชี่ยวชาญ:** คอร์สนี้ได้รับการสอนโดยเอ็กซ์ ผู้เชี่ยวชาญด้านการตลาดออนไลน์
                  <br />- **เนื้อหาครอบคลุมทุกด้าน:** คอร์สครอบคลุมการวางแผนโฆษณา การสร้างและจัดการแคมเปญ
                  <br />- **การปฏิบัติจริง:** การฝึกปฏิบัติจริงในการสร้างแคมเปญโฆษณา
                  <br />- **การสนับสนุนตลอดเวลา:** หลังจากจบคอร์สสามารถสอบถามและอัพเดทข้อมูลกับเอ็กซ์ได้ตลอดเวลา
                  <br />ต้องการดูรายละเอียดเพิ่มเติมต่างๆ ได้ที่
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <Link href='/cass' className='btn btn-info'>คอร์สสอน สายเทา</Link>
                  </small>
                </p>
              </div>
            </div>
          </section>

          <div className="cut"></div>
        </section>

        <section className='about' id='about'>
          <div className="text-center"><h3>About</h3></div>
          <About />
        </section>

 


   

      </div>
    </>
  );
}
