// Visible developer credit with a followed backlink. Deliberately understated
// but fully readable (real muted colour, normal size) — NOT hidden text.
// Placed on Home, About and Contact per the client's approval (off the main
// footer at the client's request).
export default function DevCredit() {
  return (
    <div className="dev-credit">
      <span>
        Website designed &amp; developed by{' '}
        <a href="https://rankursite.com" target="_blank" rel="noopener">
          RankUrSite
        </a>
      </span>
    </div>
  );
}
