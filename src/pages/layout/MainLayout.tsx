import { TopNavbar } from "components/navigation/TopNavbar";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface MainLayoutProps extends PropsWithChildren<{}> {
  containerClassName?: string;
}

export const MainLayout = ({
  children,
  containerClassName,
}: MainLayoutProps) => {
  const containerClass = twMerge(
    "w-full flex flex-col gap-6",
    containerClassName
  );
  return (
    <main className="max-w-7xl flex flex-col mx-auto p-4">
      <TopNavbar />
      <div className={containerClass}>{children}</div>
    </main>
  );
};
