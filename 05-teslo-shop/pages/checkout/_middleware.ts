import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  let url = req.nextUrl.clone();
  url.basePath = '/auth/login?p=';
  url.pathname = req.page.name!;

  const { token = '' } = req.cookies;

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_SEED));
    return NextResponse.next();
  } catch (error) {
    const url = req.nextUrl.clone();
    // next ya ofrece una forma de navegar con NextResponse,es lo recomendado
    // fijate que para saber la pagina lo tengo en req.page.name
    return NextResponse.redirect(`${url.origin}/auth/login?p=${req.page.name}`);
  }
}
