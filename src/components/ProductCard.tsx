import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const oldPrice = product.price * 1.15;
  const installment = product.price / 2;

  return (
    <article
      className="product-card"
      onClick={() => onClick(product)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(product)}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${product.productName}`}
    >
      <div className="product-card__image-wrap">
        <img
          src={product.photo}
          alt={product.productName}
          width={200}
          height={200}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://placehold.co/200x200/f3f3f3/999?text=Produto';
          }}
        />
      </div>
      <div className="product-card__body">
        <p className="product-card__desc">{product.descriptionShort}</p>
        <p className="product-card__old-price">{formatPrice(oldPrice)}</p>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        <p className="product-card__installment">
          ou 2x de {formatPrice(installment)} sem juros
        </p>
        <p className="product-card__shipping">Frete grátis</p>
        <button className="btn btn--buy" tabIndex={-1} aria-hidden="true">
          COMPRAR
        </button>
      </div>
    </article>
  );
}