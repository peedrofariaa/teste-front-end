import hero from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section className="hero" aria-label="Banner promocional">
      <img
        src={hero}
        alt="Black Friday Econverse"
        className="hero__bg"
        loading="eager"
      />
      <div className="hero__gradient" />
      <div className="hero__content">
        <h1 className="hero__title">
          Venha conhecer nossas promoções
        </h1>
        <p className="hero__subtitle">
          <strong>50% Off</strong> <span>nos produtos</span>
        </p>
        <a href="#" className="hero__btn">Ver produto</a>
      </div>
    </section>
  )
}