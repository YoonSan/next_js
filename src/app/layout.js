import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: { 
    default: "E-fashion",
    template: "%s | E-fashion",
  },
  description: "Online ecommerce platform for clothes and shoes",
};

// export default function RootLayout({ children }) {

const RootLayout = ({children}) => (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );

  export default RootLayout;