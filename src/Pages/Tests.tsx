import Sidebar from "../Components/Sidebar";
import CustomerForm from "../Components/CustomerForm";

const Tests = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 pt-50 pb-10 md:pb-0 md:pt-0 flex items-center justify-center overflow-y-auto">
        <CustomerForm />
      </main>
    </div>
  );
};

export default Tests;
