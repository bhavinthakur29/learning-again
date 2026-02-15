import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import './Header.css'
// Note: Ensure your ThemeToggle is the one we fixed with the provider logic!
import { Button, NavDrawer, NavLinks, ThemeToggle } from '../../components';

const Header = ({ siteName }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <header className="border-b bg-background text-foreground transition-colors duration-300">
      <div className='site-name'>
        {siteName || "Teksquad"}
      </div>

      <nav className="navbar desktop-only">
        <NavLinks />
      </nav>

      <div className='login'>
        <ThemeToggle />
        <Button visibility='desktop-only' label="Login" />
        <HiMenuAlt3
          className='mobile-only menu-toggle border-foreground/20'
          onClick={() => setIsDrawerOpen(true)} />
      </div>

      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)} />
    </header>
  )
}

export default Header;