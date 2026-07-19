import Link from 'next/link';
import BlogCard from '../../components/BlogCard';
import { getAllBlogs } from '../../lib/data';

export const metadata = {
  title: 'Blog & News',
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>News & Updates</h1>
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
        </div>
      </section>
    </>
  );
}
