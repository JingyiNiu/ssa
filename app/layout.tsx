import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ThemeProvider from "./components/ThemeProvider"
import { BackToTop } from "./components/layout/footer/BackToTop"
import { Navbar } from "./components/layout/nav/Navbar"
import { Footer } from "./components/layout/footer/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SSA Wheels & Tyres",
  description: "SSA Wheels & Tyres - New Zealand's leading tyre distributor",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
