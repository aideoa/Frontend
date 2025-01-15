import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext.jsx";
import AdminAuthContextProvider from "./context/adminAuthContext.jsx";

createRoot(document.getElementById("root")).render(
 
         <BrowserRouter>
    <AuthContextProvider>
    <AdminAuthContextProvider>
        <App />
        </AdminAuthContextProvider>
    </AuthContextProvider>
    </BrowserRouter>

);
