import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  CheckSquare,
  ChartNoAxesCombined,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "My Tasks", icon: CheckSquare },
  { title: "Analytics", icon: ChartNoAxesCombined },
  { title: "Documents", icon: FileText },
  { title: "Team Chat", icon: MessageSquare },
  { title: "Settings", icon: Settings },
];

function AppSidebar() {
  return (
    <Sidebar>

      {/* Header */}
      <SidebarHeader>
        <div className="px-3 py-4">
          <h1 className="text-xl font-bold">
            PulseWorks<span className="text-orange-500"> AI</span>
          </h1>
          <p className="text-xs text-muted-foreground">
            Enterprise Workspace
          </p>
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Workspace
          </SidebarGroupLabel>

          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={item.title === "Dashboard"}
                  tooltip={item.title}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="px-3 py-3 border-t">
          <p className="text-sm font-semibold">Koushik</p>
          <p className="text-xs text-muted-foreground">
            Workspace Member
          </p>
        </div>
      </SidebarFooter>

    </Sidebar>
  );
}

export default AppSidebar;