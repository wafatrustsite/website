import CountUp from './CountUp';

const ICONS = {
  water: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
  drop: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  masjid: <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />,
};

export default function CounterSection({ counters }) {
  const items = [
    { key: 'borewell', label: 'Borewell / Waterwell', icon: 'water' },
    { key: 'handpump', label: 'Handpump', icon: 'drop' },
    { key: 'masjid', label: 'Masjid', icon: 'masjid' },
    { key: 'foods', label: 'Foods', icon: 'drop' },
  ];

  return (
    <section className="counters">
      <div className="container">
        <div className="counters-grid">
          {items.map((item) => (
            <div className="counter-item" key={item.key}>
              <span className="counter-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[item.icon]}
                </svg>
              </span>
              <CountUp className="counter-number" value={counters[item.key]} suffix="+" />
              <span className="counter-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
