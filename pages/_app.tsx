import AppLayout from "@/layout/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Africa Female Founder Collective (AFFC) | Empowering Africa’s Female
          Entrepreneurs
        </title>
        <meta
          name="description"
          content="AFFC is closing the gender funding gap in Africa by supporting female founders with funding, networks, and resources to build scalable ventures."
        />
        <meta
          name="keywords"
          content="AFFC, Africa Female Founder Collective, female entrepreneurs Africa, women in tech Africa, gender funding gap, African startups, women founders"
        />
        <meta name="author" content="Africa Female Founder Collective" />
        <meta property="og:title" content="Africa Female Founder Collective (AFFC)" />
        <meta
          property="og:description"
          content="We support Africa’s female entrepreneurs with access to capital, community, and opportunities to build world-class ventures."
        />
        <meta property="og:url" content="https://affcollective.org" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.affcollective.org/images/header_img.png" // Replace with actual image URL
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Africa Female Founder Collective | AFFC"
        />
        <meta
          name="twitter:description"
          content="Join us in supporting 10,000+ African female founders with $500M in funding by 2030."
        />
        <meta
          name="twitter:image"
          content="https://www.affcollective.org/images/header_img.png" // Replace with actual image URL
        />
        <link rel="canonical" href="https://www.affcollective.org" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
