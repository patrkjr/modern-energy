import Logo from './logo';
import NavItem from './nav-item';
import Button from './button';
import CloseIcon from './icons/close-icon';

export default function MobileMenu({ onClose }) {
  return (
    <nav>
    <div className="fixed flex flex-col justify-between inset-0 bg-rose-50 dark:bg-slate-950">
      <div className="flex flex-col gap-6 m-12">
        <div className='flex justify-between'>
          <Logo/>
          <button aria-label="Close menu" onClick={() => onClose()}><CloseIcon/></button>
        </div>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/pricing">Pricing</NavItem>
        <NavItem href="/about">About us</NavItem>
      </div>
      <div className="flex flex-col gap-6 m-12">
      <Button>Sign up</Button>
      </div>
    </div>
    </nav>
  )
}
