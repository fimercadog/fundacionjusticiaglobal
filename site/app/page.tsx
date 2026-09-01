import HomeClient from './home-client';

// Force a static prerender so the build emits plain HTML (deployable as a
// static site). Nothing here runs on the server at request time.
export const dynamic = 'force-static';

export default function Page() {
  return <HomeClient />;
}
