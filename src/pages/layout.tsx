import { Header } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-body bg-slate-900">
      <Header />
      {children}
    </main>
  );
}
