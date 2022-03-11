import Nav from "./components/layout/Nav/Nav";
import Conteudo from "./components/layout/Main/Conteudo";
import Footer from "./components/layout/Footer/Footer";

function App() {
   return (
      <div className="container">
        <Nav />
        <Conteudo />
        <Footer />
      </div>
  );
}

export default App;
