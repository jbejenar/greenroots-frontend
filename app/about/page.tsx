// app/about/page.tsx
import { NextSeo } from 'next-seo';

export default function AboutPage() {
  return (
    <>
      <NextSeo title="About Us - GreenRoots" description="Learn more about GreenRoots." />
      <main id="main-content">
        <h1>About Us</h1>
        {/* About content */}
      </main>
    </>
  );
}
