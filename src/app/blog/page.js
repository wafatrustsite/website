import Link from 'next/link';
import BlogCard from '../../components/BlogCard';
import Pagination from '../../components/Pagination';
import { getBlogsPage, getBlogPageCount } from '../../lib/data';

export const metadata = {
  title: 'Zakat, Sadaqah & Charity Blog | Wafa Educational And Charitable Trust',
  description:
    'Guides on Zakat, Sadaqah Jariyah and Islamic giving, real impact stories from Akola & across India, and how NRIs can donate — from Wafa Educational And Charitable Trust.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const blogs = getBlogsPage(1);
  const totalPages = getBlogPageCount();

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Blog: Zakat, Sadaqah &amp; Impact Stories</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Blog
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="blog-grid">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <Pagination current={1} total={totalPages} />
        </div>
      </section>
    </>
  );
}
