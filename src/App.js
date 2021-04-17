import logo from './qantas-logo.png';

function App() {
  return (
    <div className="container px-3 pt-10 pb-1">
      <header className="App-header">
      <a
          href="//hotel.qantas.com.au"
          className="block max-w-1/2 sm:max-w-1/5"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={logo} alt="qantas logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
