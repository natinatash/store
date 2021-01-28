import React from "react"
import instagram from "../images/icons/instagram.svg"
import facebook from "../images/icons/facebook.svg"


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
        <p className="text-red-500">Follow us on Social media.</p>
      </div>
      <div className="icons flex justify-between w-1/2 md:w-1/4 my-8">
        <a href="#"><img src={instagram} alt="instagram icon" /></a>
        <a href="#"><img src={facebook} alt="facebook icon" /></a>
      </div>
      <small className="text-red-400">&copy; Copyright 2021{getCurrentYear()} Nati Natash</small>
    </footer>
  )
}

export default Footer
