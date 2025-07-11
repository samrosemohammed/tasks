import { AppSidebar } from "@/components/AppSidebat";
import ProtectedRoute from "@/components/ProtectedRoute";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-4">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </ProtectedRoute>
  );
};
export default Layout;
