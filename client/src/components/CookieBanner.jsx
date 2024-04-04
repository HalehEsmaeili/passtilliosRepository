import React, { useEffect } from 'react';
import "./cookiebanner.css";
const CookieBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('data-cmp-ab', '1');
    script.src = 'https://cdn.consentmanager.net/delivery/autoblocking/4f3c4e1881832.js';
    script.setAttribute('data-cmp-host', 'c.delivery.consentmanager.net');
    script.setAttribute('data-cmp-cdn', 'cdn.consentmanager.net');
    script.setAttribute('data-cmp-codesrc', '0');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="cookie-banner">
    
    </div>
  );
};

export default CookieBanner;
