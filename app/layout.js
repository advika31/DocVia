import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocVia - Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}> 
        {/* header */}
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            
        <main className="min-h-screen">{children}</main>
        
        {/* footer */}
        <footer className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-200">
            <p> Advika </p>
          </div>
        </footer>

          </ThemeProvider>
      </body>
    </html>
  );
}
