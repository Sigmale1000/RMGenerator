import './globals.css'

export const metadata = {
  title: 'RMGenerator',
  description: 'RMGenerator is made to create easy, fast and fancy READMEs for your Github projects and profiles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
