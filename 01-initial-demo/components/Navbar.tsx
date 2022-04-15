import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'


type Route = {
  href: string;
  text: string;
}
const menuItems: Array<Route> = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar: React.FC = () => {
  return (
    <nav className={styles['menu-container']}>
      {/* recuerda destructurar el arg Es buena idea realmente */}
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  )
}