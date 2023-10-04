import "./globals.css";

export const metadata = {
  title: "Pine",
  description: "Pine Techonlogy",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
