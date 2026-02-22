/* Reset i tło */
body {
  margin: 0;
  padding: 0;
  background-color: #0b0b14;
  color: white;
  font-family: 'Inter', sans-serif;
  display: block; /* Naprawia centrowanie Vite */
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* ===== NAVBAR ===== */
nav {
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 15px 30px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(15px);
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.08);
}

.logo {
  width: 40px;
  height: 40px;
  background: #7c5cff;
  border-radius: 12px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
}

nav ul li {
  color: #9a9aa5;
  cursor: pointer;
}

/* ===== HERO ===== */
.hero {
  text-align: center;
  margin: 60px 0;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 10px;
}

.hero p {
  color: #8e8e99;
}

/* ===== CARDS - To sprawi, że będą w rzędzie ===== */
.cards {
  display: flex;
  flex-direction: row; /* Karty obok siebie */
  justify-content: center;
  align-items: stretch;
  gap: 25px;
  flex-wrap: wrap; /* Na telefonach przejdą pod spód */
  margin-top: 50px;
}

.card {
  background: #12121c;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  padding: 40px;
  width: 320px;
  transition: 0.3s;
  text-align: left;
}

.card:hover {
  border-color: #7c5cff;
  transform: translateY(-10px);
  box-shadow: 0 10px 40px rgba(124, 92, 255, 0.2);
}

.price {
  font-size: 50px;
  font-weight: bold;
  margin: 20px 0;
}

.features {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.features li {
  margin: 15px 0;
  color: #cfcfe6;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Ikony (kwadraciki z ptaszkiem) */
.features li::before {
  content: "✔";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid white;
  border-radius: 4px;
  font-size: 10px;
}

/* ===== PRZYCISK ===== */
.buy-btn {
  display: block;
  background: #7c5cff;
  color: white;
  text-align: center;
  padding: 15px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.buy-btn:hover {
  background: #9175ff;
}
