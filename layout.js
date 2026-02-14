export const metadata = {
  title: "CloudDrive Pro",
  description: "Cloud Storage Dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
