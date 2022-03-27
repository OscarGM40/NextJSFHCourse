import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
import { RedLayout } from "../../components/layouts/RedLayout";

export default function Pricing(): React.ReactNode {
  return (
    <>
      <h1 className={'title'}>
        Ir a <Link href='/about'>About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing/index.jsx</code>
      </p>
    </>
  );
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout page="Pricing">
      <RedLayout>
        {page}
      </RedLayout>
    </MainLayout>
  )
}