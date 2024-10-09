// app/page.tsx
import { Metadata } from 'next';
import ResponsiveImage from '@/components/ResponsiveImage';
import CustomButton from '@/components/CustomButton'; // Assuming you have a button component

export const metadata: Metadata = {
  title: 'GreenRoots Home',
  description: 'Welcome to GreenRoots - Nurturing Nature, One Tree at a Time.',
};

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <ResponsiveImage
            src="/images/forest.jpg"
            alt="GreenRoots Forest"
            width={1200}
            height={600}
          />
          <div className="hero-content">
            <h1>Welcome to GreenRoots</h1>
            <p>Your journey towards a greener future begins here. Explore our initiatives to restore and protect our planet's forests.</p>
            <CustomButton label="Explore Projects" href="/projects" />
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-section">
          <h2>About GreenRoots</h2>
          <p>GreenRoots is committed to reforestation and afforestation projects that aim to restore natural ecosystems. Through the power of community and technology, we are making the world greener, one tree at a time.</p>
          <p>We believe in transparency, sustainability, and using the latest technology, such as blockchain and IoT, to track and manage our efforts.</p>
          <CustomButton label="Learn More" href="/about" />
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <h2>Our Projects</h2>
          <p>We have ongoing projects around the world that focus on restoring forests, increasing biodiversity, and empowering communities.</p>
          <ul>
            <li><a href="/projects/1">Project 1: Amazon Reforestation</a></li>
            <li><a href="/projects/2">Project 2: Australian Bush Recovery</a></li>
            <li><a href="/projects/3">Project 3: Urban Tree Planting</a></li>
          </ul>
          <CustomButton label="View All Projects" href="/projects" />
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <h2>Join Us in Our Mission</h2>
          <p>Together, we can make a lasting impact. Whether by planting trees, supporting our projects, or spreading awareness, your contribution matters.</p>
          <CustomButton label="Get Involved" href="/contact" />
        </section>
      </main>
    </>
  );
}
