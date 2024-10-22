import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";  // Import Bounce transition
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./Contexts/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
    <div className="d-flex flex-column min-vh-100"> 
      <Header />
      <main className="flex-grow-1">
           <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
    </AuthContextProvider>
  );
}

export default App;
