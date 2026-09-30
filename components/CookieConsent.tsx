"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const GA_ID = "G-PHQN1MJ0FY";
const GTM_ID = "GTM-P8ZGLMP";

function loadAnalytics() {
  if (document.getElementById("ga-script")) return;

  const gtag = document.createElement("script");
  gtag.id = "ga-script";
  gtag.async = true;
  gtag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(gtag);

  const inline = document.createElement("script");
  inline.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(inline);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookie-consent");
    if (choice === "accepted") {
      loadAnalytics();
    } else if (!choice) {
      setVisible(true);
    }
  }, []);

  function decide(accepted: boolean) {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined");
    setVisible(false);
    if (accepted) loadAnalytics();
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookievoorkeuren"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-sm z-[70] bg-elevated border border-divider rounded-2xl p-5 shadow-none"
    >
      <p className="text-sm font-semibold mb-1">Cookies</p>
      <p className="text-sm text-muted leading-relaxed mb-4">
        Wij gebruiken analytische cookies om de website te verbeteren. Zie ons{" "}
        <Link href="/privacy" className="underline hover:text-foreground">
          privacybeleid
        </Link>
        .
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => decide(true)}
          className="flex-1 bg-accent text-accent-ink text-sm font-semibold py-2.5 rounded-full hover:bg-accent-hover transition-colors"
        >
          Accepteren
        </button>
        <button
          onClick={() => decide(false)}
          className="flex-1 border border-divider text-sm font-semibold py-2.5 rounded-full hover:border-muted transition-colors"
        >
          Weigeren
        </button>
      </div>
    </div>
  );
}
