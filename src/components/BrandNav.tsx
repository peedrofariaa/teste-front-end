import logo from '../assets/Logo.png';

const brands = [
  { id: 1, name: 'Econverse' },
  { id: 2, name: 'Econverse' },
  { id: 3, name: 'Econverse' },
  { id: 4, name: 'Econverse' },
  { id: 5, name: 'Econverse' },
];

export default function BrandNav() {
  return (
    <section className="brand-nav" aria-label="Navegue por marcas">
      <div className="brand-nav__inner">
        <h2 className="brand-nav__title">Navegue por marcas</h2>
        <div className="brand-nav__list" role="list">
          {brands.map((brand) => (
            <button key={brand.id} className="brand-nav__item" role="listitem" aria-label={brand.name}>
              <img src={logo} alt={brand.name} width="80" height="40" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}