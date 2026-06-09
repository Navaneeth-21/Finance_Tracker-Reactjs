import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div
      className="flex
    h-screen
    bg-slate-100
    text-slate-900
    dark:bg-slate-950
    dark:text-white
"
    >
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
