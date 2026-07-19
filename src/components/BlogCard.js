import Link from 'next/link';

export default function BlogCard({ blog }) {
  if (!blog) return null;

  return (
    <div className="blog-card">
      <Link href={`/blog/${blog.id}`} className="blog-card-image">
        <img src={`/${blog.image}`} alt={blog.title} />
      </Link>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Admin
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            0 Comments
          </span>
        </div>
        <h3>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>
        <div
          className="blog-card-excerpt"
          dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 120) + '...' }}
        />
        <Link href={`/blog/${blog.id}`} className="read-more">
          Read More <span>→</span>
        </Link>
      </div>
    </div>
  );
}
