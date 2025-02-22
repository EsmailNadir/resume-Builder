import "../styles/globals.css"; 
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      
      <main className="flex-grow pt-16"> 
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
