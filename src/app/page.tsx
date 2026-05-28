"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import QRCode from "qrcode";

type Language = "ka" | "en";

export default function Home() {
  const [lang, setLang] = useState<Language>("ka");
  const [qrUrl, setQrUrl] = useState<string>("");

  useEffect(() => {
    // Generate QR code for the current URL so scanning it takes the user to this page,
    // which triggers the middleware redirection on their mobile device.
    const currentUrl = window.location.origin + window.location.pathname;
    QRCode.toDataURL(currentUrl, {
      margin: 1,
      width: 320,
      color: {
        dark: "#0f172a",  // Slate 900
        light: "#ffffff", // White
      },
    })
      .then((url) => setQrUrl(url))
      .catch((err) => console.error("Error generating QR code:", err));
  }, []);

  const translations = {
    ka: {
      agencyTitle: "საქართველოს შინაგან საქმეთა სამინისტრო",
      agencySubtitle: "მომსახურების სააგენტო",
      appTitle: "მობილური აპლიკაცია",
      appDescription:
        "საქართველოს შინაგან საქმეთა სამინისტროს მომსახურების სააგენტოს ოფიციალური მობილური აპლიკაცია საშუალებას გაძლევთ მარტივად და უსაფრთხოდ მიიღოთ სააგენტოს სხვადასხვა სახელმწიფო სერვისი პირდაპირ თქვენი მობილური მოწყობილობიდან.",
      features: [
        "მართვის მოწმობის სერვისები და შემოწმება",
        "სატრანსპორტო საშუალებების რეგისტრაცია",
        "ცნობების მიღება (ნასამართლობის და სხვა)",
        "სააგენტოს მომსახურებების საფასურის გადახდა",
      ],
      noticeTitle: "ავტომატური გადამისამართება",
      noticeText:
        "თუ თქვენ იმყოფებით მობილური ტელეფონით, სისტემა ავტომატურად გადაგამისამართებთ შესაბამის მაღაზიაში. სხვა შემთხვევაში, გთხოვთ გამოიყენოთ ქვემოთ მოცემული ბმულები ან QR კოდი.",
      downloadTitle: "ჩამოტვირთეთ აპლიკაცია",
      scanTitle: "ჩამოტვირთვა მობილურით",
      scanDesc: "დაასკანირეთ QR კოდი თქვენი მობილური ტელეფონით სწრაფი გადამისამართებისთვის",
      visitWebsite: "ოფიციალური ვებ-გვერდი",
      hotline: "ცხელი ხაზი: 2 41 91 91",
      rights: "ყველა უფლება დაცულია. შსს მომსახურების სააგენტო © 2026.",
    },
    en: {
      agencyTitle: "Ministry of Internal Affairs of Georgia",
      agencySubtitle: "Service Agency",
      appTitle: "Mobile Application",
      appDescription:
        "The official mobile application of the Service Agency of the Ministry of Internal Affairs of Georgia allows you to access various government services easily and securely, directly from your mobile device.",
      features: [
        "Driver's license services and checks",
        "Vehicle registration services",
        "Obtaining official certificates (conviction records, etc.)",
        "Payment for agency services and fees",
      ],
      noticeTitle: "Automatic Redirection",
      noticeText:
        "If you visit from a mobile device, you will be redirected automatically. Otherwise, please use the download options below or scan the QR code.",
      downloadTitle: "Download the Application",
      scanTitle: "Download on Mobile",
      scanDesc: "Scan the QR code with your mobile device for instant redirection",
      visitWebsite: "Official Website",
      hotline: "Hotline: +995 32 2 41 91 91",
      rights: "All rights reserved. MIA Service Agency © 2026.",
    },
  };

  const t = translations[lang];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner / Header */}
      <header className="border-b border-card-border bg-card-bg shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="MIA Service Agency Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-semibold tracking-wider text-gold uppercase">
                {t.agencyTitle}
              </span>
              <h1 className="text-base font-bold tracking-tight text-foreground uppercase">
                {t.agencySubtitle}
              </h1>
            </div>
          </div>

          {/* Language Toggle Selector */}
          <div className="flex items-center border border-card-border rounded-lg p-0.5 bg-background shadow-xs">
            <button
              onClick={() => setLang("ka")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${lang === "ka"
                ? "bg-primary text-background shadow-sm"
                : "text-foreground hover:bg-card-border"
                }`}
            >
              ქარ
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${lang === "en"
                ? "bg-primary text-background shadow-sm"
                : "text-foreground hover:bg-card-border"
                }`}
            >
              ENG
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Dashboard */}
      <main className="flex-1 flex flex-col justify-center max-w-6xl w-full mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Official Agency Branding & Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
              {t.appTitle}
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              {t.agencySubtitle} <br />
              <span className="text-accent font-semibold">{t.appTitle}</span>
            </h2>
            {/*
            <p className="text-base leading-relaxed text-foreground/80 font-normal">
              {t.appDescription}
            </p>

            <ul className="space-y-3 pt-2">
              {t.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/95 font-medium">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
*/}
            {/* Redirection Alert Banner */}
            <div className="border border-card-border bg-card-bg/40 p-5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-accent uppercase tracking-wide">
                {t.noticeTitle}
              </h3>
              <p className="text-xs text-foreground/75 leading-relaxed font-normal">
                {t.noticeText}
              </p>
            </div>
          </div>

          {/* Right Column: Download Actions & QR Transfer */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Store Buttons Box */}
            <div className="border border-card-border bg-card-bg p-6 rounded-2xl shadow-xs space-y-5">
              <h3 className="text-sm font-bold tracking-wider uppercase text-foreground/60">
                {t.downloadTitle}
              </h3>

              <div className="flex flex-col gap-3">
                {/* Apple App Store Button */}
                <a
                  href="https://apps.apple.com/ge/app/service-agency/id1574456853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-card-border bg-foreground text-background hover:bg-foreground/90 px-5 py-3.5 rounded-xl shadow-sm transition-all focus:outline-hidden"
                >
                  {/* Apple SVG Icon */}
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase font-bold tracking-wider opacity-85">
                      Download on the
                    </span>
                    <span className="block text-base font-extrabold tracking-tight -mt-1">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Google Play Store Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=ge.gov.sa.serviceagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-card-border bg-foreground text-background hover:bg-foreground/90 px-5 py-3.5 rounded-xl shadow-sm transition-all focus:outline-hidden"
                >
                  {/* Google Play SVG Icon */}
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M5 3.05c-.17.17-.27.44-.27.78v16.34c0 .34.1.61.27.78l.06.06L14.12 12l-.06-.06L5.06 2.99 5 3.05zm10.59 7.42l3.3 3.3c.47.47.47 1.24 0 1.71l-3.3 3.3-3.48-3.48 3.48-3.48-.06-.06zm.5-6.52c.28.16.52.4.67.69l3.52 7.04c.15.3.15.65 0 .95l-3.52 7.04c-.15.29-.39.53-.67.69l-1.03-1.03 3.48-3.48-3.48-3.48 1.03-1.03.02-.02zm-6.17 6.17l-.06.06L5.8 4.79l.06-.06L9.92 8.87l-.06.06z" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase font-bold tracking-wider opacity-85">
                      GET IT ON
                    </span>
                    <span className="block text-base font-extrabold tracking-tight -mt-1">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Desktop to Mobile Handover Card (QR Code) */}
            {qrUrl && (
              <div className="border border-card-border bg-card-bg p-6 rounded-2xl shadow-xs flex flex-col items-center text-center space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                    {t.scanTitle}
                  </h3>
                  <p className="text-xs text-foreground/60 leading-normal max-w-xs font-normal">
                    {t.scanDesc}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-card-border shadow-inner">
                  <Image
                    src="mia_theasylum_qr.svg"
                    alt="Bypassed App download link QR Code"
                    width={180}
                    height={180}
                    className="w-[180px] h-[180px] object-contain select-none"
                  />
                </div>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Official State Agency Footer */}
      <footer className="border-t border-card-border bg-card-bg text-foreground/75 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span>{t.rights}</span>
            <span className="hidden md:inline text-card-border">|</span>
            <a
              href="tel:2419191"
              className="text-accent hover:underline flex items-center gap-1.5 focus:outline-hidden"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.hotline}
            </a>
          </div>

          <a
            href="https://sa.gov.ge"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-card-border hover:bg-foreground hover:text-background px-4 py-2 rounded-lg shadow-2xs font-semibold uppercase tracking-wider transition-all focus:outline-hidden"
          >
            {t.visitWebsite}
          </a>
        </div>
      </footer>
    </div>
  );
}
