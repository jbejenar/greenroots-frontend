// app/contact/page.tsx
import { NextSeo } from 'next-seo';
import CustomForm from '@/components/CustomForm';

export default function ContactPage() {
  return (
    <>
      <NextSeo title="Contact Us - GreenRoots" description="Get in touch with GreenRoots." />
      <main id="main-content">
        <h1>Contact Us</h1>
        <CustomForm />
      </main>
    </>
  );
}
