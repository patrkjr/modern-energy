'use client';
import Link from "next/link";
import Logo from "./logo";
import MobileMenu from './mobile-menu';
import NavItem from "./nav-item";
import Button from "./button";
import MenuIcon from './icons/menu-icon';
import { useState } from "react";

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  const handleOnClickMenu = () => {
    setIsOpen(!isOpen);
  }
 
  return (
    <>
    {
      isOpen ? <MobileMenu onClose={() => setIsOpen(false)}/> : null
    }
    <div className="flex md:hidden justify-between p-12">
      <Logo/>
      <button onClick={handleOnClickMenu}><MenuIcon/></button>
    </div>
    <div className="hidden md:flex flex-row justify-between items-center p-4">
      <Logo/>
      <nav className="flex gap-6 items-center">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/pricing">Pricing</NavItem>
        <NavItem href="/about">About us</NavItem>
        <Button>Sign up</Button>
      </nav>
    </div>
    </>
  )
}