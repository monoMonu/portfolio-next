import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { DataProvider } from "@/lib/data-provider";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
   weight: ["300", "400", "500", "600", "700", "800"],
   subsets: ["latin"]
})

export const metadata: Metadata = {
   title: "Monu Dev",
   description: "Explore the work and projects of Monu, a passionate web developer specializing in modern web technologies.",
   keywords: ["Monu",  "monoMonu", "Portfolio", "Web Developer", "Frontend Developer", "Next.js", "React"],
   authors: [{ name: "Monu", url: "https://monomonu.vercel.app" }],
   creator: "Monu",
   openGraph: {
      title: "Monu Dev",
      description: "Showcasing Monu’s latest work, case studies, and web development projects.",
      url: "https://monomonu.vercel.app",
      siteName: "monoMonu",
      images: [
         {
            url: "https://placehold.co/1200x630/000000/FFFFFF?text=M&font=poppins",
            width: 1200,
            height: 630,
            alt: "Monu Portfolio",
         },
      ],
      type: "website",
   },
   twitter: {
      // card: "",
      title: "Monu | Web Developer Portfolio",
      description: "Explore Monu’s projects and skills in modern web development.",
      creator: "@monoMonu0",
      images: ["https://placehold.co/1200x630/000000/FFFFFF?text=M&font=poppins"],
   },
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
            <Analytics />
            <ThemeProvider>
               <DataProvider>
                  <main>

                     {children}
                     <Footer />
                  </main>
               </DataProvider>
            </ThemeProvider>

         </body>
      </html>
   );
}
