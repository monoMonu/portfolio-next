import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { DataProvider } from "@/lib/data-provider";

const poppins = Poppins({
   weight: ["300", "400", "500", "600", "700", "800"],
   subsets: ["latin"]
})

export const metadata: Metadata = {
   title: "monoMonu",
   description: "Monu's Portfolio",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={poppins.className}
         >
            <DataProvider>
               <ThemeProvider>
                  <main>

                     {children} 
                     <Footer />
                  </main>
               </ThemeProvider>
            </DataProvider>

         </body>
      </html>
   );
}
