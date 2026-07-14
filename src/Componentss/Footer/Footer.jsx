import React from 'react'
import './Footer.css'
// import { FaXTwitter, FaYoutube } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareFacebook } from "react-icons/fa6";

import {
  FaSquareFacebook,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";





const Footer = () => {
  return (
    <div className='footer '>
      <div className="footer-icons flex gap-5">
        <FaSquareFacebook className='w-7 cursor-pointer' />
        <FaXTwitter className='w-7 cursor-pointer' />
        <FaLinkedin className='w-7 cursor-pointer' />
        <FaYoutube className='w-7 cursor-pointer' />
      </div>
      <ul className='grid '>
        <li>Auto Description</li>
        <li>Help Center</li>
        <li>Gifts Card</li>
        <li>Investors</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text text-gray-500 text-xl">Copyright 1997-2026 Netflix, Inc</p>
    </div>
  )
}

export default Footer