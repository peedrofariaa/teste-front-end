import { useEffect, useRef, useState } from 'react';
import type { Product } from '../types/product';

interface ModalProps {
  product: Product | null;
  onClose: () => void;
}

function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ModalContent({ product, onClose }: { product: Product; onClose: () => void }) {
  const [quantity, setQuantity] = useState(1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes de ${product.productName}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <button
          ref={closeButtonRef}
          className="modal__close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M13 1L1 13M1 1l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="modal__content">
          <div className="modal__image-wrap">
            <img
              src={product.photo}
              alt={product.productName}
              width={260}
              height={260}
              loading="eager"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://placehold.co/260x260/f3f3f3/999?text=Produto';
              }}
            />
          </div>

          <div className="modal__info">
            <h2 className="modal__product-name">{product.productName}</h2>
            <p className="modal__price">{formatPrice(product.price)}</p>
            <p className="modal__desc">{product.descriptionShort}</p>
            <a href="#" className="modal__details-link">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="modal__quantity">
              <button
                className="modal__qty-btn"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                aria-label="Diminuir quantidade"
              >−</button>
              <span
                className="modal__qty-value"
                aria-live="polite"
                aria-label={`Quantidade: ${quantity}`}
              >
                {String(quantity).padStart(2, '0')}
              </span>
              <button
                className="modal__qty-btn"
                onClick={() => setQuantity(q => q + 1)}
                aria-label="Aumentar quantidade"
              >+</button>
              <button className="btn modal__buy-btn">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Modal({ product, onClose }: ModalProps) {
  if (!product) return null;

  return <ModalContent key={product.productName} product={product} onClose={onClose} />;
}