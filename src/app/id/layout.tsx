import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function IdLayout({ children }: LayoutProps<"/id">) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader locale="id" />
      {children}
      <SiteFooter locale="id" />
    </div>
  );
}
