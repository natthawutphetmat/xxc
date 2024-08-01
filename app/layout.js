import { Inter } from "next/font/google";
// import Navbar from './components/navbar';
// import Footer from './components/Footer';
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "รับทำโฆษณาออนไลน์ Google, Facebook Ads สายเทาเพื่อธุรกิจของคุณ",
  description: "สำรวจโอกาสใหม่ๆกับทีมการตลาด รับยิงแอดโฆษณาสายเทา สายเทาที่จะช่วยคุณเติบโตด้วยกลยุทธ์การตลาดออนไลน์ที่ล้ำหน้าและเป็นนวัตกรรม แรงบันดาลใจจากทีมผู้เชี่ยวชาญที่มีประสบการณ์ เราช่วยสร้างผลลัพธ์ที่ยั่งยืนให้กับธุรกิจของคุณ",
  keywords: "ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,สอนยิงแอด,สอนยิงแอด Conversion,สอนยิงแอดสายเทา,ยิงแอดสายเทา,ยิงโฆษณาสายเทา,รับทำ seo สายเทา,รับทำ seo สายดำ,แอดสายเทา,รับยิงแอดสายเทา,กูเกิ้ลแอดสายเทา,รับทํา google ads,สายเทา seo สายเทา,ตลาดสีเทา,แอดสีเทา,adsสีเทา,กราฟฟิกสายเทา,ยิงแอดเทา,รับยิงแอดfacebookสายเทา,รูปยิงแอดสายเทา,รับจ้างสายเทา,รับโฆษณาสายเทา",
  image: "https://ad-dev.net//img/ads.jpg",
  name: "adsmanager",
  canonical: 'https://ad-dev.net/',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="รับทำโฆษณาออนไลน์ Google, Facebook Ads สายเทาเพื่อธุรกิจของคุณ" />
        <meta property="og:description" content="สำรวจโอกาสใหม่ๆกับทีมการตลาด รับยิงแอดโฆษณาสายเทา สายเทาที่จะช่วยคุณเติบโตด้วยกลยุทธ์การตลาดออนไลน์ที่ล้ำหน้าและเป็นนวัตกรรม แรงบันดาลใจจากทีมผู้เชี่ยวชาญที่มีประสบการณ์ เราช่วยสร้างผลลัพธ์ที่ยั่งยืนให้กับธุรกิจของคุณ." />
        <meta property="og:image" content="https://ad-dev.net/img/logo.png" />
        <meta property="og:url" content="https://ad-dev.net/" />
        <meta property="og:site_name" content="Example Company" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="รับทำโฆษณาออนไลน์ Google, Facebook Ads สายเทาเพื่อธุรกิจของคุณ" />
        <meta name="twitter:description" content="สำรวจโอกาสใหม่ๆกับทีมการตลาด รับยิงแอดโฆษณาสายเทา สายเทาที่จะช่วยคุณเติบโตด้วยกลยุทธ์การตลาดออนไลน์ที่ล้ำหน้าและเป็นนวัตกรรม แรงบันดาลใจจากทีมผู้เชี่ยวชาญที่มีประสบการณ์ เราช่วยสร้างผลลัพธ์ที่ยั่งยืนให้กับธุรกิจของคุณ." />
        <meta name="twitter:image" content="https://ad-dev.net/img/logo.png" />
        <meta name="twitter:site" content="ad-dev.net" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://ad-dev.net" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ad-dev",
              "alternateName": "EC",
              "url": "https://ad-dev.net",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://ad-dev.net/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
