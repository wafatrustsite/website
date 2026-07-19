import Link from 'next/link';
import { getPageBySlug } from '../../lib/data';

export const metadata = {
  title: 'Certificate',
};

export default function CertificatePage() {
  const pageData = getPageBySlug('certificate');

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Certificates & Registrations</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Certificate
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body" style={{ textAlign: 'center' }}>
            {pageData && pageData.content ? (
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
            ) : (
              <p>Certificate information is being updated.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
