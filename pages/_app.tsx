import "../src/styles/index.css";
import { ThemeProvider } from "@/components/common/providers";
import { Inter } from "next/font/google";
import { Header } from "@/components/common/Header";
import { Toaster } from "@/components/ui/toaster";
import { Meta } from "@/components/meta";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Meta />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
