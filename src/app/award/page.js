import Link from 'next/link';
import { getPageBySlug } from '../../lib/data';

export const metadata = {
  title: 'Awards & Recognition',
};

export default function AwardPage() {
  const pageData = getPageBySlug('award');

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Awards & Recognition</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Award
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body" style={{ textAlign: 'center' }}>
            {pageData && pageData.content ? (
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
            ) : (
              <p>Awards information is being updated.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
