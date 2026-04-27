import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IssueStrip from "@/components/layout/IssueStrip";
import PageTransition from "@/components/layout/PageTransition";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IssueStrip />
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
