import { ChakraProvider } from "@chakra-ui/react"
import FontFace from "components/font-face"
import { DefaultSeo } from "next-seo"
import Head from "next/head"
import React from "react"
import theme from "theme"
import { getSeo } from "utils/seo"

const App = ({ Component, pageProps }) => {
  const seo = getSeo()
  return (
    <>
      <Head>
        {/* <style>.async-hide { opacity: 0 !important} </style>
          <script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
          h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
          (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
          })(window,document.documentElement,'async-hide','dataLayer',4000,
          {'GTM-K9BGS8K':true});</script>

          <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-46172202-22', 'auto', {allowLinker: true});
          ga('set', 'anonymizeIp', true);
          ga('require', 'GTM-K9BGS8K');
          ga('require', 'displayfeatures');
          ga('require', 'linker');
          ga('linker:autoLink', ["2checkout.com","avangate.com"]);
          </script>

          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NKDMSK6');</script> */}

        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <meta name="theme-color" content="#319795" />
        {process.env.NODE_ENV === "production"}
      </Head>
      <DefaultSeo {...seo} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <FontFace />
    </>
  )
}

export default App
