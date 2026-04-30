import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import type { Product } from '../types/product';
import ProductCard from './ProductCard';
import Modal from './Modal';

const TABS = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];
const ITEMS_PER_PAGE = 4;

interface ProductShelfProps {
  limit?: number;
  showTabs?: boolean;
}

export default function ProductShelf({ limit, showTabs = false }: ProductShelfProps) {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState('CELULAR');
  const [currentIndex, setCurrentIndex] = useState(0);

  const sourceProducts = limit ? products.slice(0, limit) : products;
  const total = sourceProducts.length;
  const visibleProducts = sourceProducts.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex + ITEMS_PER_PAGE < total;

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - ITEMS_PER_PAGE));
  const handleNext = () => setCurrentIndex((i) => Math.min(total - ITEMS_PER_PAGE, i + ITEMS_PER_PAGE));

  return (
    <>
      <section className="shelf" aria-labelledby="shelf-title">
        <div className="shelf__header">
          <h2 className="shelf__title" id="shelf-title">Produtos relacionados</h2>
          {!showTabs && <a href="#" className="shelf__see-all">Ver todos</a>}
        </div>

        {showTabs && (
          <nav className="shelf__tabs" aria-label="Categorias de produtos">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`shelf__tab${activeTab === tab ? ' shelf__tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
                aria-current={activeTab === tab ? 'true' : undefined}
              >
                {tab}
              </button>
            ))}
          </nav>
        )}

        <div className="shelf__carousel">
          <button
            className="shelf__arrow shelf__arrow--prev"
            onClick={handlePrev}
            disabled={!canPrev}
            aria-label="Produtos anteriores"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {loading && (
            <ul className="shelf__grid" aria-label="Carregando produtos..." role="list">
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                <li key={i} className="skeleton-card" aria-hidden="true">
                  <div className="skeleton skeleton-image" />
                  <div className="skeleton skeleton-text" />
                  <div className="skeleton skeleton-text skeleton-text--short" />
                  <div className="skeleton skeleton-price" />
                  <div className="skeleton skeleton-btn" />
                </li>
              ))}
            </ul>
          )}

          {error && (
            <div className="error-state" role="alert">
              <p>Não foi possível carregar os produtos.</p>
            </div>
          )}

          {!loading && !error && (
            <ul className="shelf__grid" role="list">
              {visibleProducts.map((product, index) => (
                <li key={`${product.productName}-${index}`}>
                  <ProductCard product={product} onClick={setSelectedProduct} />
                </li>
              ))}
            </ul>
          )}

          <button
            className="shelf__arrow shelf__arrow--next"
            onClick={handleNext}
            disabled={!canNext}
            aria-label="Próximos produtos"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </section>

      <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}