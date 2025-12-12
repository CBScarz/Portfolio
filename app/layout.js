import '@/styles/globals.css'

export const metadata = {
  title: 'Backend Developer | Portfolio',
  description: 'Computer Science student focused on scalable systems and high-performance APIs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
