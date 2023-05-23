import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      removePreloader();
    };

    const removePreloader = () => {
      const preloader = document.getElementById('js-preloader');
      if (preloader) {
        preloader.remove();
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div id="js-preloader" className={`js-preloader ${isLoaded ? 'loaded' : ''}`}>
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Header />
      <main class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-content">
              <Component {...pageProps} />
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default MyApp;
