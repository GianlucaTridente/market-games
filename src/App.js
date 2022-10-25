import './App.css';
import Navbar from './components/Navbar';
import NavbarList from './components/NavbarList';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body">
      <header>
        <nav >
          <Navbar/>
        </nav>
      </header>
      <main>
          <section>
            <NavbarList/>
          </section>
          <section>
            <ItemListContainer greeting={true}/>
          </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
