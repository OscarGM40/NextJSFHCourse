import Link from 'next/link';
import { useRouter } from 'next/router';


const style = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink = ({ text, href }) => {

  const router = useRouter();
  const path = router.pathname;  

  return (
    <Link href={href}>
      <a style={ path === href ? style : null}>{text}</a>
    </Link>
  )
}