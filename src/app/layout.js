import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "E-fashion",
  description: "Online ecommerce platform for clothes and shoes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}