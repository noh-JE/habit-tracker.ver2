import './app.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Calendar from "./components/calendar/calendar";

function App() {
  return (
    <div className='app'>
      <Header />

      <div id='contents'>
        <main>
            <Calendar />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
