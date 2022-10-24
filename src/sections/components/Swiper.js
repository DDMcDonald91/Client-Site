import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../components/components.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Container, Button } from "react-bootstrap";
export default function SwiperGallery() {
  return (
    <Container className='p-0'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{position: 'relative'}}>
            <Container fluid className="p-0 font" id='image' style={{backgroundImage: 'url("https://images.unsplash.com/photo-1646022665170-72000e70a034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80")', backgroundSize: 'cover', backgroundPosition: 'center',}}>
              <Container style={{backgroundColor: 'black', zIndex: '100', width: '60%', opacity: '0.6', height: '100%', position: 'absolute'}}>
              <h3 style={{color: 'white'}}>Cane Corso Resources</h3>
              <Container className="p-0 mt-2">
                <p style={{color: 'white'}}>Cane Corso Resources is a online tool that helps to educate and empower cane corso owners and dog owners in general.</p>
                <a href="https://www.canecorsoresources.co" target='_blank'><Button variant="outline-success">View Live Site</Button></a>
              </Container>  
              </Container>
            </Container>
        </SwiperSlide>
        <SwiperSlide>
            <Container fluid className="p-0" id='image' style={{backgroundImage: 'url("https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")', backgroundSize: 'cover', backgroundPosition: 'center',}}>
            <Container style={{backgroundColor: 'black', zIndex: '100', width: '60%', opacity: '0.6', height: '100%', position: 'absolute'}}>
              <h3 style={{color: 'white'}}>Altered NWLA</h3>
              <Container className="p-0 mt-2">
                <p style={{color: 'white'}}>Altered NWLA is a nonprofit based out of Louisiana that helps to prepare and empower young women for adulthood.</p>
                <a href="https://www.alterednwla.org" target='_blank'><Button variant="outline-success">View Live Site</Button></a>
              </Container>  
              </Container>
            </Container>   
        </SwiperSlide>
        <SwiperSlide>
            <Container fluid className="p-0" id='image' style={{backgroundImage: 'url("https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80")', backgroundSize: 'cover', backgroundPosition: 'center',}}>
            <Container style={{backgroundColor: 'black', zIndex: '100', width: '60%', opacity: '0.6', height: '100%', position: 'absolute'}}>
              <h3 style={{color: 'white'}}>Blak Kontroller</h3>
              <Container className="p-0 mt-2">
                <p style={{color: 'white'}}>Blak Kontroller is a online tool that helps users find free online PC games to play.</p>
                <a href="https://www.blakkontroller.com" target='_blank'><Button variant="outline-success">View Live Site</Button></a>
              </Container>  
              </Container>
            </Container>   
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}


