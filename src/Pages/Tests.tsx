import Sidebar from "../Components/Sidebar";
import CustomerForm from "../Components/CustomerForm";

const Tests = () => {
  return (
    <div className="flex grow">
      <Sidebar />
      <main className="flex-1 py-20 flex items-center justify-center">
        <CustomerForm />
      </main>
    </div>
  );
};

export default Tests;
