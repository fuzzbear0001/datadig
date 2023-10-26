// pages/_app.tsx
import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { NextUIProvider, Progress, Spinner } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const handleStart = () => {
      // Show the loading bar when a route change starts
      setLoading(true);
    };

    const handleComplete = () => {
      // Hide the loading bar when a route change is complete
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <NextUIProvider>
      <NextThemesProvider>
        {loading ? (
          <Modal
            isOpen={loading}
            hideCloseButton
            isDismissable={false}
            style={{ width: "90px", height: "90px" }}
          >
            <ModalContent>
              <ModalBody>
                <Spinner
                  color="primary"
                  size="large"
                  className="fixed top-0 left-0 z-50 w-screen h-screen"
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        ) : null}
        <main className="min-h-screen retro-vibes text-foreground bg-background">
          <Head>
            <title>Urlcut</title>
            <meta name="title" content="Urlcut - Shorten Your Links." />
            <meta
              name="description"
              content="Quick, easy, and free URL shortener."
            />

            {/* Open Graph (OG) meta tags for social sharing */}
            <meta property="og:title" content="Urlcut - Shorten Your Links" />
            <meta
              property="og:description"
              content="Quick, easy, and free URL shortener."
            />
            <meta
              property="og:image"
              content="https://storage.tally.so/e62ccd35-f7cc-41a0-884a-722b3b7bfe7a/Urlcut.png"
            />
            <meta property="og:url" content="https://urlcut.app/" />

            {/* Twitter Card meta tags for Twitter sharing */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Urlcut - Shorten Your Links" />
            <meta
              name="twitter:description"
              content="Quick, easy, and free URL shortener."
            />
            <meta
              name="twitter:image"
              content="https://urlcut.app/assets/twitter-card.png"
            />

            {/* Additional meta tags */}
            <meta name="author" content="Urlcut" />
            <meta
              name="keywords"
              content="URL shortener, link shortener, shorten URLs"
            />
          </Head>
          <Component {...pageProps} />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
