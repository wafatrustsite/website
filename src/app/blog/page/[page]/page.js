import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogCard from '../../../../components/BlogCard';
import Pagination from '../../../../components/Pagination';
import { getBlogsPage, getBlogPageCount } from '../../../../lib/data';

export function generateStaticParams() {
  const total = getBlogPageCount();
  const params = [];
  // page 1 lives at /blog, so generate 2..total here
  for (let i = 2; i <= total; i++) params.push({ page: String(i) });
  return params;
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  return {
    title: `Blog — Page ${page} | Wafa Educational And Charitable Trust`,
    description:
      'More guides on Zakat and Sadaqah, impact stories and donor resources from Wafa Educational And Charitable Trust.',
    alternates: { canonical: `/blog/page/${page}` },
  };
}

export default async function BlogPaginatedPage({ params }) {
  const { page } = await params;
  const current = parseInt(page, 10);
  const totalPages = getBlogPageCount();

  if (!current || current < 2 || current > totalPages) {
    notFound();
  }

  const blogs = getBlogsPage(current);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Blog: Zakat, Sadaqah &amp; Impact Stories</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span> Page {current}
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
          <Pagination current={current} total={totalPages} />
        </div>
      </section>
    </>
  );
}
