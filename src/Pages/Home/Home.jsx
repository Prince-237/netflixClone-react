// import React from 'react'
import './Home.css'
import Navbar from '../../Componentss/Navbar/Navbar'
// import assets from '../../assets/asset'
import TitleCards from '../../Componentss/TitleCards/TitleCards'
import Footer from '../../Componentss/Footer/Footer'
// import bg_img from 'background_banner.jpg'
import bg_img from '../../assets/hero_banner.jpg'
import title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'


const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero relative ">
            <img src={bg_img} className='babber-img' alt="" />
            <div className="hero_caption w-full absolute bottom-0">
                <img src={title} className='capImg' alt="" />
                <p className='title-cards'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sint impedit officiis excepturi, atque quibusdam consequatur numquam dolor! Vero, esse.</p>
                <div className="hero-btns flex gap-2.5 mb-15">
                    <button className='btn gap-1 w-6 border-0 outline-0'>
                        <img src={play} className='w-5 h-5' alt="" />
                        Play</button>
                    <button className='btn dark-btn gap-1'>
                        <img src={info} className='w-5 h-5' alt="" />
                        More Info</button>
                </div>
                <TitleCards/>
            </div>
        </div>
        <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
                <TitleCards title={"Only on Netflix"} category={"popular"}/>
                <TitleCards title={"Upcoming"} category={"upcoming"}/>
                <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
        </div>
        <Footer />
    </div>
  )
}

export default Home