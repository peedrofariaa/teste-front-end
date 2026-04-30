import { useState, useEffect } from 'react';
import type { Product, ProductsResponse } from '../types/product';

const API_URL =
  '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data: ProductsResponse = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return { products, loading, error };
}