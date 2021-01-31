import React from "react"
import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
  return (
    <header className="h-28 flex justify-center px-4 py-2 bg-black text-white fixed w-full z-10">
      <div className="header-container flex justify-between items-center w-full md:w-8/12 lg:w-6/12">
        <Logo />
        <Nav />
      </div>
    </header>
  )
}

export default Header
