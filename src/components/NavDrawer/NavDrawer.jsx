import { HiX } from "react-icons/hi";
import './NavDrawer.css';
import NavLinks from "../NavLinks/NavLinks";
import Button from "../Button/Button";

const NavDrawer = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Backdrop: Fades in/out */}
            <div
                className={`drawer-backdrop ${isOpen ? 'active' : ''}`}
                onClick={onClose}
            />

            {/* Drawer: Slides in/out using transform */}
            <div
                className={`nav-drawer ${isOpen ? 'open' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="drawer-header">
                    <HiX className="close-icon" onClick={onClose} />
                </div>

                <nav className="drawer-nav">
                    {/* The NavLinks component should handle vertical layout via CSS/Tailwind */}
                    <div className="drawer-links-wrapper">
                        <NavLinks onItemClick={onClose} />
                    </div>

                    <div className="drawer-footer">
                        <Button visibility='mobile-only' text="Login" />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavDrawer;