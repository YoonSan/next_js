import Header from "@/components/Header";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import MainLayout from "@/layouts/MainLayout";

export const metadata = {
  title: {
    default: "E-fashion",
    template: "%s | E-fashion",
  },
  description: "Online ecommerce platform for clothes and shoes.",
  keywords: "Online shopping in Nepal, Best clothing items",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="light">
      <MainLayout>{children}</MainLayout>
      <ToastContainer position="top-center" autoClose={2000} />
    </body>
  </html>
);

export default RootLayout;