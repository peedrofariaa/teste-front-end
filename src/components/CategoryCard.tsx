import tecnologia from '../assets/tecnologia.png';
import supermercado from '../assets/supermercado.png';
import whiskey from '../assets/whiskey.png';
import ferramentas from '../assets/ferramentas.png';
import saude from '../assets/saude.png';
import corrida from '../assets/corrida.png';
import moda from '../assets/moda.png';
import { useState } from 'react';

const categories = [
  { label: 'Tecnologia', img: tecnologia },
  { label: 'Supermercado', img: supermercado },
  { label: 'Bebidas', img: whiskey },
  { label: 'Ferramentas', img: ferramentas },
  { label: 'Saúde', img: saude },
  { label: 'Esportes e Fitness', img: corrida },
  { label: 'Moda', img: moda },
];

export default function CategoryCards() {
  const [active, setActive] = useState('Tecnologia');

  return (
    <section className="categories" aria-label="Compre por categoria">
      <div className="categories__inner">
        {categories.map((cat) => (
          <div key={cat.label} className="categories__item-wrap">
            <button
              className={`categories__card${active === cat.label ? ' categories__card--active' : ''}`}
              onClick={() => setActive(cat.label)}
              aria-current={active === cat.label ? 'true' : undefined}
            >
              <img
                src={cat.img}
                alt={cat.label}
                width="48"
                height="48"
                loading="lazy"
              />
            </button>
            <span className={`categories__label${active === cat.label ? ' categories__label--active' : ''}`}>
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}