import Link from 'next/link';

export default function CampaignGrid({ campaigns }) {
  if (!campaigns || campaigns.length === 0) return null;

  return (
    <div className="campaigns-grid">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="campaign-card">
          <Link href={`/services/${campaign.id}`} className="campaign-card-image">
            <img src={campaign.image} alt={campaign.title} />
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
