import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout page={'Home'}>

      <h1 className={'title'}>
        {/* recuerda que un Next hace el pre-fetch de cualquier Link que esté en el viewport,pero no puedo estilizarlo */}
        Ir a <Link href='/about'>About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </MainLayout>

  );
}
