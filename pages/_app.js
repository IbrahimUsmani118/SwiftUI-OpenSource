import '../global.css'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => handleNavigation('/about')}>About</button></li>
          <li><button onClick={() => handleNavigation('/contact')}>Contact</button></li>
          <li><button onClick={() => handleNavigation('/')}>Home</button></li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
