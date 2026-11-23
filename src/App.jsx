import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import AppSidebar from "@/components/AppSidebar";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <SidebarProvider>

      <AppSidebar />

      <main className="flex-1 min-h-screen bg-gray-50">

        <div className="p-4 border-b bg-white">
          <SidebarTrigger />
        </div>

        <Dashboard />

      </main>

    </SidebarProvider>
  );
}

export default App;