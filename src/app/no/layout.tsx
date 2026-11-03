import type { Metadata } from "next";
import { Header } from "@/app/no/components/Header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Libre_Baskerville, Roboto } from "next/font/google";
import { Footer } from "@/app/no/components/Footer";
import { StateProvider } from "@/globalStates";
import { CookieBanner } from "@/app/no/components/CookiesBanner";
import { ComingSoon } from "./ComingSoon";

const libreBaskerville = Libre_Baskerville({
  variable: "--libreFont",
  subsets: ["latin"],




});

const roboto = Roboto({
  variable: "--robotoFont",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Bokhus",
  description: "Bokhus Web Page Norwegian",
  icons: {
    icon: '/icon.png'
  }
};

const comingSoon = process.env.COMING_SOON !== "false";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="no" data-scroll-behavior="smooth">
      <body className={`${libreBaskerville.variable} ${roboto.variable}`}>
        {comingSoon ? <ComingSoon /> :

          <ClerkProvider
            localization={{

              userButton: {
                action__manageAccount: "Administrer Konto",
                action__signOut: "Logg ut"
              }
            }}
          >
            <StateProvider>
              <Header />
              <CookieBanner />
              {children}
              <Footer />
            </StateProvider>
          </ClerkProvider>}
      </body>
    </html>
  );
}
