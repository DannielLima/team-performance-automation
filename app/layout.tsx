import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Análise de Desempenho</title>
        <meta name="description" content="" />
      </head>
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
