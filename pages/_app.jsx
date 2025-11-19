// pages/_app.jsx

// CSS global deve ser importado apenas aqui
import '../styles/app.css';


export default function MyApp({ Component, pageProps }) {
 
  return <Component {...pageProps} />;
}
