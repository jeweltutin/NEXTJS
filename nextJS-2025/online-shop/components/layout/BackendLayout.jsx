"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { usePathname } from "next/navigation";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../backend/app-sidebar";
import { Toaster } from "../ui/sonner";

export default function BackendLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/dx-admin");

  return <>
    {isAdminPage ?
      <div className="admin-container">
        <div className="flex min-h-screen bg-gray-100">
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </div>
        <Toaster richColors position="top-right" />
      </div> : children}</>;
}
