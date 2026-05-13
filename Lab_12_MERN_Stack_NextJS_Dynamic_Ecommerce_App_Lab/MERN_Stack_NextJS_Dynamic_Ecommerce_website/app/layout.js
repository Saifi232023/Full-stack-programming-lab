import "./globals.css";

export const metadata = {
  title: "Rustik Plank Furniture",
  description: "Dynamic Next.js ecommerce replica inspired by the Rustik Plank reference."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
