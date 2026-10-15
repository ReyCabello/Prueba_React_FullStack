import { NavLink } from '../atoms/NavLink';

export function Navbar({ links = [], className = '' }) {
  return (
    <nav className={`navbar ${className}`.trim()}>
      <ul className="navbar__list">
        {links.map((link, index) => (
          <li key={index} className="navbar__item">
            <NavLink href={link.href}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}