import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>บริการของเรา</h3>
          <p>เรามอบบริการการตลาดออนไลน์ที่คุณเชื่อถือได้และมีประสิทธิภาพ</p>
          <div className="footer-socials">
            <Link href="https://youtube.com">
              <Image src="/img/ty.png" alt="YouTube" width={50} height={50} />
            </Link>
          </div>
        </div>

        <div className="footer-column">
          <h3>ลิงก์ด่วน</h3>
          <ul className="footer-links">
            <li><Link href="https://ad-dev.net/">Home</Link></li>
            <li><Link href="https://ad-dev.net/Google">Google</Link></li>
            <li><Link href="https://ad-dev.net/Facebook">Facebook</Link></li>
            <li><Link href="https://ad-dev.net/Course-Google">คอร์สโฆษณา Google</Link></li>
            <li><Link href="https://ad-dev.net/Course-Facebook">คอร์สโฆษณา Facebook</Link></li>
            <li><Link href="https://ad-dev.net/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>ติดต่อเรา</h3>
          <p>32 ซอย 20 ถนนเจริญราษฎร์ เขตคลองสาน กรุงเทพมหานคร 10160</p>
          <p>โทร: <Link href="tel:0956422872">083-252-8058</Link></p>
          <p>Email: <Link href="mailto:admin@ad-dev.net">admin@ad-dev.net</Link></p>
        </div>

        <div className="footer-column">
          <h3>สมัครรับข้อมูล</h3>
          <p>รับข่าวสารและโปรโมชั่นล่าสุดจากเรา</p>
          <form action="https://ad-dev.net/">
            <input type="email" className="footer-input" placeholder="กรอกอีเมล์ของคุณ" required />
            <button type="submit" className="footer-button">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 รับจ้างยิงแอดสายเทา | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
