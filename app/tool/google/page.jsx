"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    const openModal = () => {
        setModalIsOpen(true);
        setTimeLeft(30);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        if (!modalIsOpen) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [modalIsOpen]);

    useEffect(() => {
        if (timeLeft === 0) {
          window.location.href='/dowloads/GooglePage.zip';
            closeModal();
        }
    }, [timeLeft]);

    return (
        <>

        <div className="container text-center">
          <h3>Dowloads Landing page Google</h3>
          <Image src="/img/d.webp"  width={800} height={300}  alt="ทำการตลาดฟรี" className="header-image"/>
        </div>
        <div className="text-center">
        
        

  
            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onClick={openModal} >
            <Image src="/img/dl.webp"  width={100} height={100}  alt="ดาวน์โหลด" />
            </button>
            </div> 


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">หลังจาก 30 วินาทีจะดาวน์โหลดอัตโนมัติ</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
      </div>
      <div class="modal-body">


        {modalIsOpen && (
                                <>  
                                    <div className="text-center"><div className='h2'>กรุณารอ {timeLeft} วินาที</div>
                                    
                                    
                                    </div> 
                                </>
                            )}


      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default HomePage;
