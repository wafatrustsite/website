import Link from 'next/link';
import GalleryGrid from '../../components/GalleryGrid';
import { getGallery } from '../../lib/data';

export const metadata = {
  title: 'Photo Gallery',
};

export default function GalleryPage() {
  const gallery = getGallery();

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Photo Gallery</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Gallery
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="section-header">
            <h2>Our Impact in Pictures</h2>
            <p>
              A visual journey through our various initiatives, campaigns, and the 
              smiles we've helped bring to communities across India.
            </p>
          </div>
          <GalleryGrid images={gallery} />
        </div>
      </section>
    </>
  );
}
