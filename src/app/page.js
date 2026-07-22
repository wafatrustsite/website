import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';
import FeatureCards from '../components/FeatureCards';
import CounterSection from '../components/CounterSection';
import BlogCard from '../components/BlogCard';
import GalleryGrid from '../components/GalleryGrid';
import { getCounters, getAllBlogs, getGallery } from '../lib/data';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  const counters = getCounters();
  const blogs = getAllBlogs();
  const gallery = getGallery();

  return (
    <>
      <HeroSlider />

      {/* 4 Overlapping Feature Cards */}
      <FeatureCards />

      {/* Counters */}
      <CounterSection counters={counters} />

      {/* About Section — Wafa Educational and Charitable Trust */}
      <section className="section">
        <div className="container">
          <div className="about-section">
            <div className="about-image animate-fade-in">
              <img src="/assets/image-1.jpg" alt="Wafa Trust charity work" />
            </div>
            <div className="about-text animate-fade-in-up">
              <span className="subtitle" style={{ color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>About Us</span>
              <h2>Wafa Educational and Charitable Trust</h2>
              <p>
                Wafa Educational And Charitable Trust is a national charitable institution
                dedicated to empowering, educating, and uplifting communities across India
                through sustainable and compassionate initiatives — from clean water and food
                distribution to housing, education, and medical support.
              </p>
              <div className="about-boxes">
                <div className="about-box">
                  <span className="about-box-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <div>
                    <h4>Economic Support</h4>
                    <p>Helping poor families, widows, and those in need stand on their own feet with dignity.</p>
                  </div>
                </div>
                <div className="about-box">
                  <span className="about-box-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </span>
                  <div>
                    <h4>Medical Assistance</h4>
                    <p>Providing wheelchairs, tricycles, and healthcare support to the sick and disabled.</p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="btn btn-primary mt-4">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* We're here to help them */}
      <section className="section-alt help-section">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="subtitle">Wafa Educational &amp; Charitable Trust</span>
            <h2>We&apos;re here to help them</h2>
            <p>
              Our mission is to empower, educate, and uplift communities across our nation
              through holistic, sustainable, and compassionate initiatives. We are committed
              to making a meaningful and lasting impact on the lives of the underprivileged,
              marginalized, and underserved.
            </p>
          </div>
          <div className="help-features">
            <div className="about-feature">
              <span className="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>Quality Education</span>
            </div>
            <div className="about-feature">
              <span className="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>Clean Water Projects</span>
            </div>
            <div className="about-feature">
              <span className="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>Healthcare Support</span>
            </div>
            <div className="about-feature">
              <span className="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>Community Building</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="subtitle">Our Impact</span>
            <h2>Event Gallery</h2>
          </div>
          <GalleryGrid images={gallery.slice(0, 8)} />
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link href="/gallery" className="btn btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="subtitle">From The Blog</span>
            <h2>Latest news &amp; articles</h2>
            <p>
              Stay updated with the latest news, activities, and impact stories
              from Wafa Educational And Charitable Trust.
            </p>
          </div>
          <div className="blog-grid">
            {blogs.slice(0, 4).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link href="/blog" className="btn btn-outline">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Fundraising for the people and causes you care about</h2>
          <p>
            Your contribution, no matter how small, has the power to transform lives.
            Join hands with us in our mission to create a better, more equitable world for everyone.
          </p>
          <Link href="/donate" className="btn btn-white btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            Become a Donor Today
          </Link>
        </div>
      </section>
    </>
  );
}
