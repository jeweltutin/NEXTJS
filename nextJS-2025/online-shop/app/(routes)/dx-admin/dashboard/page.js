"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (!jwt || !user) {
      router.push("/sign-in"); // Redirect to sign-in if no JWT or user data
      return;
    }

    // Check if the user's role allows access to the dashboard
    const userRole = user.role;
    if (userRole !== "admin" && userRole !== "manager" && userRole !== "editor") {
      router.push("/"); // Redirect to home if the role isn't allowed
    }
  }, [router]);

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <div className="p-4 bg-gray-100">
          {/* Top Stats Section */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md flex items-center">
              <i className="fas fa-shopping-cart text-2xl mr-3"></i>
              <div>
                <p className="text-sm">Orders</p>
                <p className="text-lg font-bold">0</p>
              </div>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-md flex items-center">
              <i className="fas fa-money-bill-wave text-2xl mr-3"></i>
              <div>
                <p className="text-sm">Revenue</p>
                <p className="text-lg font-bold">None</p>
              </div>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md flex items-center">
              <i className="fas fa-users text-2xl mr-3"></i>
              <div>
                <p className="text-sm">Customers</p>
                <p className="text-lg font-bold">0</p>
              </div>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md flex items-center">
              <i className="fas fa-sitemap text-2xl mr-3"></i>
              <div>
                <p className="text-sm">Item Sold</p>
                <p className="text-lg font-bold">0</p>
              </div>
            </div>
          </div>

          {/* Order Status Section */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md flex items-center">
              <i className="fas fa-pause-circle text-2xl mr-3"></i>
              <div>
                <p className="text-sm">Pending Orders</p>
                <p className="text-lg font-bold">0</p>
              </div>
            </div>
            <div className="bg-green-600 text-white p-4 rounded-lg shadow-md flex items-center">
              <i className="fas fa-check-circle text-2xl mr-3"></i>
              <div>
                <p className="text-sm">Confirmed Order</p>
                <p className="text-lg font-bold">0</p>
              </div>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-md flex items-center">
              <i className="fas fa-truck text-2xl mr-3"></i>
              <div>
                <p className="text-sm">Order Delivered</p>
                <p className="text-lg font-bold">0</p>
              </div>
            </div>
            <div className="bg-teal-500 text-white p-4 rounded-lg shadow-md flex items-center">
              <i className="fas fa-undo text-2xl mr-3"></i>
              <div>
                <p className="text-sm">Returned Order</p>
                <p className="text-lg font-bold">0</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$12,345</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1,234</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">567</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>


    </>

  );
}
