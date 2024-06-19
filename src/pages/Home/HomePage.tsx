import { Subheader } from "pages/Home/Subheader";
import { MainLayout } from "pages/layout/MainLayout";
export const HomePage = () => {
  return (
    <MainLayout containerClassName="items-center justify-center">
      <h1 className="text-center">Start your new great project</h1>
      <Subheader />
    </MainLayout>
  );
};
