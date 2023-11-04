import FooterLink from './footer-link';
import Logo from './logo';
import P from './p';

export default function Footer() {
  return (
    <div className='bg-blue-50 dark:bg-neutral-950 flex flex-col justify-center m-auto'>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-8 w-full max-w-[2000px] min-h-max px-24 md:px-24 py-36 justify-between">
        <div className='col-span-full xl:col-span-2 pb-12'>
          <Logo/>
        </div>
        <div className="container gap-3">
          <h4 className='text-xl font-bold text-blue-500 dark:text-cyan-100 mb-4 lg:mb-8'>Company</h4>
          <FooterLink href="#" text="About us"/>
          <FooterLink href="#" text="Careers"/>
          <FooterLink href="#" text="Press"/>
          <FooterLink href="#" text="Blog"/>
        </div>
        <div className="container gap-3">
          <h4 className='text-xl font-bold text-blue-500 dark:text-cyan-100 mb-4 lg:mb-8'>Pages</h4>
          <FooterLink href="#" text="Login"/>
          <FooterLink href="#" text="Register"/>
          <FooterLink href="#" text="Add list"/>
          <FooterLink href="#" text="Contact"/>
        </div>
        <div className="container gap-3">
          <h4 className='text-xl font-bold text-blue-500 dark:text-cyan-100 mb-4 lg:mb-8'>Legal</h4>
          <FooterLink href="#" text="Terms"/>
          <FooterLink href="#" text="Team"/>
          <FooterLink href="#" text="Privacy"/>
        </div>
        <div className="container gap-3">
          <h4 className='text-xl font-bold text-blue-500 dark:text-cyan-100 mb-4 lg:mb-8'>Resources</h4>
          <FooterLink href="#" text="Services"/>
          <FooterLink href="#" text="Product"/>
          <FooterLink href="#" text="Pricing"/>
        </div>
        {/* <div className="h-44 bg-rose-200"> Height </div> */}
      </div>
      <div className='text-center pb-6 text-slate-400'>
        <p className="text-black dark:text-white">All rights reserved <span className='font-bold'>Kleanergy</span> © 2023</p>
      </div>
    </div>
  )
}
