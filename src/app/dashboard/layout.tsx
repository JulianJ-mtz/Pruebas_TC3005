import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-[100%] bg-white dark:bg-slate-900/70">
      <Header />

      <div className="md:flex">
        <Sidebar />
        <div className="md:flex-1"> {children} </div>
      </div>
    </div>
  );
}
