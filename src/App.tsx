import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import ProductShelf from './components/ProductShelf';
import PartnersSection from './components/PartnersSection';
import BrandNav from './components/BrandNav';
import Footer from './components/Footer';
import './styles/global.scss';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <CategoryCard />
        <ProductShelf limit={4} showTabs />
        <PartnersSection />
        <ProductShelf limit={4} />
        <PartnersSection />
        <BrandNav />
        <ProductShelf limit={4} />
      </main>
      <Footer />
    </>
  );
}