import logo from '../assets/Logo.png'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__newsletter">
        <div className="footer__newsletter-inner">
          <div className="footer__newsletter-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <div className="footer__newsletter-right">
            <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter">
              <label htmlFor="nl-name" className="sr-only">Seu nome</label>
              <input id="nl-name" type="text" placeholder="Digite seu nome" />
              <label htmlFor="nl-email" className="sr-only">Seu e-mail</label>
              <input id="nl-email" type="email" placeholder="Digite seu e-mail" />
              <button type="submit" className="btn btn--newsletter">INSCREVER</button>
            </form>
            <label className="footer__newsletter-check">
              <input type="checkbox" /> Aceito os termos e condições
            </label>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__main-inner">
          <div className="footer__brand">
            <img
              src={logo}
              alt="Econverse"
              width={130}
              height={40}
              loading="lazy"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer__social" aria-label="Redes sociais">
              <a href="#" aria-label="Instagram" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="Facebook" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <nav className="footer__links" aria-label="Institucional">
            <h4>Institucional</h4>
            <a href="#">Sobre Nós</a>
            <a href="#">Movimento</a>
            <a href="#">Trabalhe conosco</a>
          </nav>
          <nav className="footer__links" aria-label="Ajuda">
            <h4>Ajuda</h4>
            <a href="#">Suporte</a>
            <a href="#">Fale Conosco</a>
            <a href="#">Perguntas Frequentes</a>
          </nav>
          <nav className="footer__links" aria-label="Termos">
            <h4>Termos</h4>
            <a href="#">Termos e Condições</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Troca e Devolução</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}