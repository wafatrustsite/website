import Link from 'next/link';
import { getPageBySlug } from '../../lib/data';

export const metadata = {
  title: 'Refund Policy',
};

export default function RefundPolicyPage() {
  const pageData = getPageBySlug('donation-refund-policy');

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Refund Policy</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Refund Policy
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            {pageData && pageData.content ? (
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
            ) : (
              <p>Refund Policy is being updated.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
