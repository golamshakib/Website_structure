import Footer from "@/components/sheard/Footer";
import Navbar from "@/components/sheard/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </main>
  );
}
