import logo from '../assets/Logo.png'

export default function Header() {
  return (
    <header className="header" role="banner">
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>

      <div className="header__topbar">
        <div className="header__topbar-inner">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3.125 8.95833V4.375C3.125 4.20924 3.19085 4.05027 3.30806 3.93306C3.42527 3.81585 3.58424 3.75 3.75 3.75H16.25C16.4158 3.75 16.5747 3.81585 16.6919 3.93306C16.8092 4.05027 16.875 4.20924 16.875 4.375V8.95833C16.875 15.522 11.3042 17.6966 10.1919 18.0654C10.0675 18.1082 9.93246 18.1082 9.80811 18.0654C8.69578 17.6966 3.125 15.522 3.125 8.95833Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.4375 8.125L8.85414 12.5L6.5625 10.3125" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg> Compra <span>100% segura</span>
          </p>
            <p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M18.75 9.375H13.75V6.25H17.0769C17.2018 6.25 17.3238 6.28743 17.4272 6.35746C17.5307 6.42749 17.6108 6.5269 17.6572 6.64288L18.75 9.375Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.25 11.25H13.75" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.6875 16.875C15.723 16.875 16.5625 16.0355 16.5625 15C16.5625 13.9645 15.723 13.125 14.6875 13.125C13.652 13.125 12.8125 13.9645 12.8125 15C12.8125 16.0355 13.652 16.875 14.6875 16.875Z" stroke="#9F9F9F" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M5.3125 16.875C6.34803 16.875 7.1875 16.0355 7.1875 15C7.1875 13.9645 6.34803 13.125 5.3125 13.125C4.27697 13.125 3.4375 13.9645 3.4375 15C3.4375 16.0355 4.27697 16.875 5.3125 16.875Z" stroke="#9F9F9F" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M12.8125 15H7.1875" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.4375 15H1.875C1.70924 15 1.55027 14.9342 1.43306 14.8169C1.31585 14.6997 1.25 14.5408 1.25 14.375V5.625C1.25 5.45924 1.31585 5.30027 1.43306 5.18306C1.55027 5.06585 1.70924 5 1.875 5H13.75V13.3762" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.75 13.3762V9.375H18.75V14.375C18.75 14.5408 18.6842 14.6997 18.5669 14.8169C18.4497 14.9342 18.2908 15 18.125 15H16.5625" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Frete grátis</span> acima de R$ 200
            </p>
            <p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M17.5 4.375H2.5C2.15482 4.375 1.875 4.65482 1.875 5V15C1.875 15.3452 2.15482 15.625 2.5 15.625H17.5C17.8452 15.625 18.125 15.3452 18.125 15V5C18.125 4.65482 17.8452 4.375 17.5 4.375Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.1245 13.125H15.6245" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.37451 13.125H10.6245" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.87451 7.56665H18.1245" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Parcele</span> suas compras
            </p>
        </div>
      </div>

      <div className="header__main">
        <div className="header__main-inner">
          <a href="/" className="header__logo" aria-label="Econverse - página inicial">
            <img src={logo} alt="Econverse" width={139} height={41} loading="eager" />
          </a>

          <div className="header__search" role="search">
            <label htmlFor="search-input" className="sr-only">Buscar produtos</label>
            <input
              id="search-input"
              type="search"
              placeholder="O que você está buscando?"
              className="header__search-input"
            />
            <button className="header__search-btn" aria-label="Buscar">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>

          <div className="header__actions">
            <button className="header__action-btn" aria-label="Loja">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
                <path d="M21.0896 0.100342H2.67065L2.53979 0.111084C2.28135 0.155825 2.04897 0.332238 1.93628 0.569092L1.89038 0.692139V0.693115L0.125732 7.40991L0.124756 7.41089C0.108012 7.47647 0.100211 7.54437 0.100342 7.61206V23.4939C0.100386 23.9187 0.481197 24.2995 0.906006 24.2996H23.4939C23.9187 24.2995 24.2995 23.9187 24.2996 23.4939V15.0232C24.2994 14.5985 23.9186 14.2176 23.4939 14.2175H14.0642V12.5525C14.0673 12.1641 13.7564 11.8024 13.3718 11.7478H13.3699C13.1827 11.7247 12.9888 11.7698 12.8308 11.8728L8.948 14.3435C8.71328 14.4929 8.60237 14.7634 8.60229 15.0232C8.60229 15.2831 8.7132 15.5544 8.948 15.7039L12.8298 18.1736L12.8308 18.1746C13.0814 18.3315 13.391 18.2988 13.6306 18.1667C13.8702 18.0347 14.0629 17.7905 14.0642 17.4949V15.8289H22.6882V22.6882H1.71167V8.41772H22.6882V11.4929L22.6912 11.572C22.7296 11.9681 23.0918 12.3102 23.4939 12.3103C23.9225 12.3103 24.3054 11.9215 24.2996 11.4929V7.61108C24.2991 7.51695 24.2825 7.42299 24.2498 7.33472L21.7791 0.61792V0.616943C21.6721 0.335667 21.398 0.127752 21.0984 0.100342L21.0896 0.0993652V0.100342ZM12.4529 16.032L10.8757 15.0232L12.4529 14.0144V16.032ZM11.7468 6.80542H1.95093L3.28784 1.71167H11.7468V6.80542ZM22.3357 6.80542H13.3591V1.71167H20.4578L22.3357 6.80542Z" fill="#9F9F9F" stroke="#9F9F9F" strokeWidth="0.2"/>
              </svg>
            </button>

            <button className="header__action-btn" aria-label="Favoritos">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 27C16 27 3.5 20 3.5 11.5C3.50025 9.99768 4.02082 8.5418 4.97318 7.37991C5.92555 6.21801 7.25093 5.42181 8.72399 5.12669C10.197 4.83156 11.7269 5.05572 13.0533 5.76105C14.3798 6.46638 15.421 7.60935 16 8.99564L16 8.99565C16.579 7.60936 17.6202 6.46639 18.9467 5.76106C20.2731 5.05572 21.8029 4.83156 23.276 5.12669C24.7491 5.42181 26.0745 6.21801 27.0268 7.3799C27.9792 8.5418 28.4997 9.99768 28.5 11.5C28.5 20 16 27 16 27Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="header__action-btn" aria-label="Minha conta">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#9F9F9F" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" stroke="#9F9F9F" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M7.97485 24.9218C8.72812 23.4408 9.8765 22.1971 11.2929 21.3284C12.7093 20.4598 14.3384 20 16 20C17.6615 20 19.2906 20.4598 20.707 21.3284C22.1234 22.1971 23.2718 23.4407 24.0251 24.9217" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="header__action-btn" aria-label="Carrinho">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M23 23H8.72727L5.2402 3.82112C5.19831 3.5907 5.07688 3.3823 4.89708 3.23225C4.71728 3.08219 4.49052 3 4.25633 3H2" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 28C11.3807 28 12.5 26.8807 12.5 25.5C12.5 24.1193 11.3807 23 10 23C8.61929 23 7.5 24.1193 7.5 25.5C7.5 26.8807 8.61929 28 10 28Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 28C24.3807 28 25.5 26.8807 25.5 25.5C25.5 24.1193 24.3807 23 23 23C21.6193 23 20.5 24.1193 20.5 25.5C20.5 26.8807 21.6193 28 23 28Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.81818 18H23.5127C23.981 18 24.4346 17.8356 24.7942 17.5355C25.1538 17.2354 25.3966 16.8186 25.4804 16.3578L27 8H6" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <nav className="header__nav" aria-label="Categorias">
        <div className="header__nav-inner">
          <a href="#">TODAS CATEGORIAS</a>
          <a href="#">SUPERMERCADO</a>
          <a href="#">LIVROS</a>
          <a href="#">MODA</a>
          <a href="#">LANÇAMENTOS</a>
          <a href="#" className="header__nav--highlight">OFERTAS DO DIA</a>
          <a href="#" className="header__nav--assinatura">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3.52571 15.3137C3.54519 15.3959 3.58109 15.4732 3.63126 15.5412C3.68142 15.6091 3.7448 15.6662 3.8176 15.7089C3.89039 15.7517 3.97108 15.7793 4.05483 15.7901C4.13857 15.8009 4.22363 15.7947 4.30489 15.7717C8.03061 14.743 11.9654 14.7426 15.6913 15.7706C15.7725 15.7935 15.8576 15.7998 15.9413 15.789C16.025 15.7782 16.1056 15.7506 16.1784 15.7079C16.2512 15.6651 16.3146 15.6081 16.3647 15.5402C16.4149 15.4723 16.4508 15.395 16.4703 15.3129L18.4616 6.8506C18.4883 6.73732 18.4828 6.61884 18.4457 6.50851C18.4087 6.39818 18.3416 6.30039 18.252 6.22615C18.1623 6.1519 18.0538 6.10415 17.9385 6.08828C17.8232 6.07241 17.7057 6.08904 17.5994 6.13631L13.6475 7.89269C13.5048 7.95611 13.3436 7.96382 13.1955 7.91429C13.0474 7.86476 12.9232 7.76159 12.8474 7.62508L10.5464 3.48334C10.4923 3.38591 10.4131 3.30472 10.317 3.2482C10.2209 3.19167 10.1115 3.16187 10 3.16187C9.88857 3.16187 9.77914 3.19167 9.68308 3.2482C9.58701 3.30472 9.50781 3.38591 9.45368 3.48334L7.15272 7.62508C7.07688 7.76159 6.95269 7.86476 6.8046 7.91429C6.6565 7.96381 6.49523 7.95611 6.35253 7.89269L2.40008 6.13604C2.29375 6.08878 2.17634 6.07215 2.06107 6.08801C1.94579 6.10386 1.83724 6.15158 1.74762 6.2258C1.658 6.30001 1.59088 6.39777 1.55381 6.50806C1.51674 6.61836 1.51119 6.73681 1.5378 6.85008L3.52571 15.3137Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            ASSINATURA
          </a>
        </div>
      </nav>
    </header>
  );
}