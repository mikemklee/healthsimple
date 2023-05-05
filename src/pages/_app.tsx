import "../styles/globals.css";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import Head from "next/head";
import HeaderBar from "@/components/HeaderBar";

import "@fontsource/lexend";
import Layout from "@/components/Layout";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      <Head>
        <title>Healthsimple</title>
      </Head>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <HeaderBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionContextProvider>
    </>
  );
}
export default MyApp;
