import Link from 'next/link';
import { getPageBySlug } from '../../lib/data';

export const metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  const pageData = getPageBySlug('privacy-policy');

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Privacy Policy</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Privacy Policy
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            {pageData && pageData.content ? (
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
            ) : (
              <p>Privacy Policy is being updated.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
