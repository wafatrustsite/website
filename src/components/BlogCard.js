import Link from 'next/link';

function formatDate(d) {
  const date = new Date(d);
  if (isNaN(date)) return d;
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function BlogCard({ blog }) {
  if (!blog) return null;

  const excerpt =
    blog.excerpt ||
    blog.metaDescription ||
    blog.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 140) + '...';

  return (
    <article className="blog-card">
      <Link href={`/blog/${blog.id}`} className="blog-card-image">
        <img src={`/${blog.image}`} alt={blog.title} loading="lazy" />
        {blog.category && <span className="blog-card-tag">{blog.category}</span>}
      </Link>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            {formatDate(blog.date)}
          </span>
          {blog.readTime && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {blog.readTime}
            </span>
          )}
        </div>
        <h3>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <Link href={`/blog/${blog.id}`} className="read-more">
          Read More <span>→</span>
        </Link>
      </div>
    </article>
  );
}
