import Link from 'next/link';

// Path-based pagination: page 1 => /blog, page N => /blog/page/N
function pageHref(base, n) {
  return n <= 1 ? base : `${base}/page/${n}`;
}

export default function Pagination({ current, total, base = '/blog' }) {
  if (total <= 1) return null;

  const pages = [];
  for (let i = 1; i <= total; i++) {
    // show first, last, and neighbours of current; collapse the rest
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '…') {
      pages.push('…');
    }
  }

  return (
    <nav className="pagination" aria-label="Blog pagination">
      {current > 1 && (
        <Link className="pagination-btn" href={pageHref(base, current - 1)} rel="prev" aria-label="Previous page">
          ← Prev
        </Link>
      )}

      {pages.map((p, idx) =>
        p === '…' ? (
          <span key={`e${idx}`} className="pagination-ellipsis">…</span>
        ) : (
          <Link
            key={p}
            href={pageHref(base, p)}
            className={`pagination-num ${p === current ? 'active' : ''}`}
            aria-current={p === current ? 'page' : undefined}
          >
            {p}
          </Link>
        )
      )}

      {current < total && (
        <Link className="pagination-btn" href={pageHref(base, current + 1)} rel="next" aria-label="Next page">
          Next →
        </Link>
      )}
    </nav>
  );
}
