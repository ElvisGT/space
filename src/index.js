import ReactDOMClient from "react-dom/client";
import { AppRoutes } from "./routes/AppRoutes";

const root = document.getElementById("root");
const container = ReactDOMClient.createRoot(root);
container.render(<AppRoutes />);
