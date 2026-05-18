import { SideNav } from "@/features/shell/components/side-nav";
import { TopNav } from "@/features/shell/components/top-nav";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="laptop:ltr:pl-side-nav min-h-fs w-full bg-primary-bg text-pure-color">
      {/* <SideNav /> */}
      <TopNav />
      <div className="reader-layout-grid">{children}</div>
    </div>
  );
}
