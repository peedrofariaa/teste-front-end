import partnersImg from '../assets/parceiros-apple.jpg';

const AppleLogo = () => (
  <svg width="36" height="44" viewBox="0 0 814 1000" fill="white" aria-label="Apple" role="img">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.9 0 663.4 0 541.8c0-207.4 130.3-317.5 263.1-317.5 71.2 0 130.6 47.9 175.8 47.9 43.2 0 111.4-50.7 193.5-50.7 31.2 0 108.2 2.6 168.3 70.7zm-174.6-168.6c27.4-36.6 47.1-87.6 47.1-138.6 0-7.1-.6-14.3-1.9-20.1-44.3 1.9-96.3 29.9-127.9 70.7-24.9 31.2-48.3 82.2-48.3 134.1 0 8.3 1.3 16.6 1.9 19.2 2.6.6 6.5 1.3 10.4 1.3 39.5 0 87.6-26 118.7-66.6z"/>
  </svg>
);

const partners = [
  { id: 1, title: 'Parceiros', desc: 'Lorem ipsum dolor sit amet, consectetur' },
  { id: 2, title: 'Parceiros', desc: 'Lorem ipsum dolor sit amet, consectetur' },
];

export default function PartnersSection() {
  return (
    <section className="partners" aria-label="Parceiros">
      <div className="partners__inner">
        {partners.map((p) => (
          <article
            key={p.id}
            className="partners__card"
            style={{ backgroundImage: `url(${partnersImg})` }}
          >
            <div className="partners__card-overlay" />
            <div className="partners__card-content">
              <AppleLogo />
              <h3 className="partners__card-title">{p.title}</h3>
              <p className="partners__card-desc">{p.desc}</p>
              <button className="partners__card-btn">CONFIRA</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}