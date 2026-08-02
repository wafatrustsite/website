import Link from 'next/link';
import Image from 'next/image';

export default function CampaignGrid({ campaigns }) {
  if (!campaigns || campaigns.length === 0) return null;

  return (
    <div className="campaigns-grid">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="campaign-card">
          <Link href={`/services/${campaign.id}`} className="campaign-card-image">
            <Image src={campaign.image} alt={campaign.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            <div className="campaign-card-overlay" />
          </Link>
          <div className="campaign-card-body">
            <h3>
              <Link href={`/services/${campaign.id}`}>{campaign.title}</Link>
            </h3>
            <div
              className="campaign-card-excerpt"
              dangerouslySetInnerHTML={{ __html: (campaign.content || '').substring(0, 100) + '...' }}
            />
          </div>
          <div className="campaign-card-footer">
            <Link href={`/services/${campaign.id}`} className="read-more">
              Read More <span>→</span>
            </Link>
            <Link href="/donate" className="btn btn-primary btn-sm">
              Donate
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
