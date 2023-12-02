import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=optional" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <p>Temperature: {temperature} K</p>
        <p>Humidity: {humidity}</p>
        <p>{JSON.stringify(alldata, null, 2)}</p> */}
        {/* Display Unsplash image */}
        {/* {unsplashImage && (
          <img src={unsplashImage} alt="Unsplash" style={{ maxWidth: '100%' }} />
        )} */}
      </body>
    </Html>
  );
}
