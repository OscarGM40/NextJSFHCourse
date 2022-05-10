import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log('middleware added');
  return NextResponse.next();
  return new Response('Hello from nasty middleware', {
    status: 401,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
  /* si quiero que el middleware no me bloquee tengo que llamar a NextResponse.next() <- hay que importar la clase */
}
