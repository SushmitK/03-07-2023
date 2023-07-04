import ReactDOM from 'react-dom/client';

// import Pet from "./Pet";
import SearchParam from './SearchParam';

const App = () => {
  return(
    <div>
      <h1>Adopt Me Using Vite And JSX</h1>
      <SearchParam />
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);