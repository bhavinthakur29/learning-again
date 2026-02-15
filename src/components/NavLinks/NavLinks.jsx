import { Link } from "react-router-dom";
import { navLinks } from "../../config/navLinks.js";

const NavLinks = ({ onItemClick }) => {
    return (
        <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map(link => (
                <li key={link.id}>
                    <Link
                        to={link.path}
                        onClick={onItemClick}
                        className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary dark:text-foreground/90 dark:hover:text-primary"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavLinks;