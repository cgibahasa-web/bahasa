import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function EnLayout({ children }: LayoutProps<"/en">) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader locale="en" />
      {children}
      <SiteFooter locale="en" />
    </div>
  );
}
