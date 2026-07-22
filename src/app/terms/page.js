import Link from 'next/link';
import { getPageBySlug } from '../../lib/data';

export const metadata = {
  title: 'Terms and Conditions',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  const pageData = getPageBySlug('terms-conditions');

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Terms and Conditions
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            {pageData && pageData.content ? (
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
            ) : (
              <p>Terms and Conditions are being updated.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
