import "../src/styles/globals.js";
import Theme from "../src/styles/theme";
import "../src/styles/font.css";
import "../src/style/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
