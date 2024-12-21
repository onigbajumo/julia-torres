import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const marri = localFont({
  src: "./fonts/Merriweather.ttf",
  variable: "--font-marri-weather",
  weight: "100 900",
});
const playFair = localFont({
  src: "./fonts/PlayFair.ttf",
  variable: "--font-playfair-display",
  weight: "100 900",
});

export const metadata = {
  title: {
    default:
      "Julia E. Torres - Writer, Scholar & Cultural organizer. Based in Denver, Colorado.",
    template: "%s | Julia E. Torres",
  },
  description: `As a librarian and veteran language arts teacher, I help schools and libraries meet every student’s educational needs.`,
  openGraph: {
    title:
      "Julia E. Torres - Writer, Scholar & Cultural organizer. Based in Denver, Colorado.",
    description: `As a librarian and veteran language arts teacher, I help schools and libraries meet every student’s educational needs.`,
    url: "https://www.juliaetorres.com/",
    siteName:
      "Julia E. Torres - Writer, Scholar & Cultural organizer. Based in Denver, Colorado.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.juliaetorres.com/",
        width: 1200,
        height: 630,
        alt: "Julia E. Torres",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playFair.variable} ${marri.variable} antialiased font-[family-name:var(--font-marri-weather)] bg-[#F7F7F7]`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
