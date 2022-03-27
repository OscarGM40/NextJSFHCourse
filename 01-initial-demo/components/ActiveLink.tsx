import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';


const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

type Props = {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

  const router = useRouter();
  const path = router.pathname;  

  return (
    <Link href={href}>
      <a style={ path === href ? style : undefined}>{text}</a>
    </Link>
  )
}