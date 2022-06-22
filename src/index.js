import ReactDOMClient from 'react-dom/client';
import App from './App';

const root = document.getElementById("root");
const container = ReactDOMClient.createRoot(root);
container.render(
  <App />
);
