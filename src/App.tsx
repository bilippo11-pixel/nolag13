import './App.css'

function App() {
  return (
    <div className="main-container">
      <nav>
        <div className="logo-container">
          <div className="logo-box">
            <img src="https://vitejs.dev/logo.svg" alt="logo" />
          </div>
        </div>
        <ul>
          <li>Strona Główna</li>
          <li>Cennik</li>
          <li>Kontakt</li>
        </ul>
      </nav>

      <div className="hero">
        <h1>Przeglądaj produkty!</h1>
        <p>Wybierz pakiet Nolag idealny dla siebie.</p>
      </div>

      <div className="cards-container">
        <div className="card">
          <h2>Nolag Normal</h2>
          <div className="price">20 zł</div>
          <ul className="features">
            <li>Dostęp do Nolag</li>
            <li>Regularne aktualizacje</li>
            <li>Wsparcie 24/7</li>
          </ul>
          <a className="buy-btn" href="https://discord.gg/KPGvnp3Y">Kup</a>
        </div>

        <div className="card">
          <h2>Nolag Pro</h2>
          <div className="price">50 zł</div>
          <ul className="features">
            <li>Wszystko z Normal</li>
            <li>Priorytetowe wsparcie</li>
            <li>Szybsze aktualizacje</li>
          </ul>
          <a className="buy-btn" href="https://discord.gg/KPGvnp3Y">Kup</a>
        </div>

        <div className="card">
          <h2>Nolag Extra</h2>
          <div className="price">100 zł</div>
          <ul className="features">
            <li>Wszystko z Pro</li>
            <li>Beta dostęp</li>
            <li>Ekskluzywne funkcje</li>
          </ul>
          <a className="buy-btn" href="https://discord.gg/KPGvnp3Y">Kup</a>
        </div>
      </div>
    </div>
  )
}

export default App
