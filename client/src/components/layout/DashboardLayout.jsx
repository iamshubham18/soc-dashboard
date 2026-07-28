import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-72">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-72 flex flex-1 flex-col">
        <Navbar />

        <main
          className="
            flex-1
            overflow-y-auto
            bg-slate-100
            dark:bg-slate-900
            p-8
            transition-colors
            duration-300
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;