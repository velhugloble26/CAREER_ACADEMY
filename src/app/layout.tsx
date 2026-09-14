import type { Metadata } from "next";
import "../styles.css";
import { AppShell } from "@/components/site";

export const metadata: Metadata = {
  title: "Career Academy Nashik | MPSC, PSI, TET मार्गदर्शन",
  description: "सरकार करिअर अकॅडमी, नाशिक — MPSC, PSI, TET आणि पोलीस भरती परीक्षांसाठी मार्गदर्शन.",
  authors: [{ name: "Career Academy" }],
  openGraph: {
    title: "Career Academy Nashik",
    description: "स्पर्धा परीक्षेतील यशासाठी योग्य मार्गदर्शन.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mr">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
