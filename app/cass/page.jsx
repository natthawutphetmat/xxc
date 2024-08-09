import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div className='container'>
       <h3>ไปยังหน้าหนัก<Link href="/">Home</Link></h3>
      <img src="/img/class.webp" width="100%" alt="class" />


      <div className="cass">

      <Link href="/cass/facebook" className='btn btn-outline-primary'> คอร์สเรียนfacebookสายเทา</Link>
      <Link href="/cass/google" className='btn btn-outline-primary'>คอร์สเรียนgoogleสายเทา</Link>

      </div>
      <div className="text-center m-5">
        <img src="/img/course.webp" width='50%' alt="course" className='mt-5' />
      </div>
    </div>
  )
}


