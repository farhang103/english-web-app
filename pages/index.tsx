/* eslint-disable @next/next/no-script-component-in-head */
import Head from "next/head";
import Script from "next/script";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Pardis Inc</title>
        <meta name="Pardis Ins" content="English Web App" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://cdn.tiny.cloud/1/26en0jjahgkkvvjvptx09yd486ipftjazb0lgmqlzgrelill/tinymce/6/tinymce.min.js"
          referrerPolicy="origin"
        ></Script>
      </Head>
    </div>
  );
};

export default Page;
