import { React, useState } from 'react'
import "./Header.css"
import { ChevronDown, Briefcase, Users, LockKeyhole, LifeBuoy, SquarePen, Code, Menu, LogIn } from 'lucide-react';
import { motion } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
        <header className='header'>
            <div className="nav-content">
                <div className="logo">Stark</div>
                <nav>
                    <div className="dropdown">
                        <div className="element difEl">
                            <a href="#">Company</a>
                            <ChevronDown size={16} className='dropdownIcon'/>
                            <div className="dropDiv">
                                <a href="#"><Briefcase size={18}/>Careers</a>
                                <a href="#"><Users size={18}/>About</a>
                                <a href="#"><LockKeyhole size={18}/>Security</a>
                                <a href="#"><LifeBuoy size={18}/>Help Center</a>
                                <a href="#"><SquarePen size={18}/>Blog</a>
                                <a href="#"><Code size={18}/>Engineering Blog</a>
                            </div>
                        </div>
                    </div>
                    <a href="#">Products</a>
                    <a href="#">Solutions</a>
                    <a href="#">Customers</a>
                    <a href="#">Pricing</a>
                    <a href="#">Faq</a>
                </nav>
                <div className="login">
                    <a href="#">Log in</a>
                    <button>Open Account</button>
                </div>
                <div className="menuCont">
                    <div className={menuOpen ? "hamburger active" : "hamburger"} onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="menu">
                        <a href="#"><Briefcase size={18}/>Careers</a>
                        <a href="#"><Users size={18}/>About</a>
                        <a href="#"><LockKeyhole size={18}/>Security</a>
                        <a href="#"><LifeBuoy size={18}/>Help Center</a>
                        <a href="#"><SquarePen size={18}/>Blog</a>
                        <a href="#"><Code size={18}/>Engineering Blog</a>
                        <div className="line"></div>
                        <a href="#" className='menuLogin'><LogIn size={18}/>Login</a>
                    </div>
                </div>
            </div>
        </header>
    </motion.nav>
  )
}

export default Header