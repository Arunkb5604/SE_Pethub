import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Explore our pet paradise, where every furry friend's needs are met with care and quality. From playful pups to majestic felines, and even the feathered companions, our diverse selection of premium products caters to all. Treat your pets to the finest treats, toys, grooming essentials, and more, ensuring their happiness and well-being. With convenience at your fingertips, discover the joy of shopping for your beloved pets with ease. Join us in creating moments of pure delight for every pet owner and their cherished companions. Welcome to your pet's new favorite destination!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9962135268</li>
                <li>contact@pethub.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © PetHub.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
