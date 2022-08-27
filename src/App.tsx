import { Footer } from "./Componets/Footer/Footer";
import { Header } from "./Componets/Header/Header";
import { Main } from "./Componets/Main/Main";
import "./Componets/scss/styles.scss";


function App() {
  return (
    <div className="App" >
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
