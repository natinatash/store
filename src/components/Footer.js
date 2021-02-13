import React from "react"
import instagram from "../images/icons/instagram.svg"
import facebook from "../images/icons/facebook.svg"
import email from "../images/icons/mail.svg"
import Ada from "./Ada"


function getCurrentYear() {
  let thisYear = new Date().getFullYear()
  if (thisYear !== 2021) {
    return ` - ${thisYear.toString().substring(2)}`
  }
}

function Footer() {
  return (
    <footer className="flex flex-col items-center p-8 pt-10 bg-black text-white mt-12">
      <div className="font-bold text-center uppercase tracking-wide">
        <p>Don't miss out on the latest styles!</p>
        <p className="text-red-400">Follow us on Social media.</p>
      </div>
      <div className="icons flex justify-between w-1/2 md:w-1/4 my-8">
        <a href="https://www.instagram.com/nati_natash21/"><img src={instagram} alt="instagram icon" /></a>
        <a href="https://www.facebook.com/search/top?q=nati%20natash%20fashion"><img src={facebook} alt="facebook icon" /></a>
      </div>
      <div className="email my-8 md:w-3/4 xl:w-1/2">
        <h4 className="text-center font-bold tracking-wider">In need of assistance?</h4>
        <p>Our team is always here for you. Please use the email below and we will respond to you ASAP.</p>
        <a className="flex justify-center items-center text-white text-lg font-bold pt-2 md:text-xl" href="mailto: customer-service@natinatash.com"><img className="mr-2" src={email} alt="email icon" />Customer Service</a>
      </div>
      <Ada />
      <small className="text-red-200 mt-8">&copy; Copyright 2021{getCurrentYear()} Nati Natash</small>
    </footer>
  )
}

export default Footer
