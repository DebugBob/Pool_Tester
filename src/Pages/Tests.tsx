import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import CustomerForm from "../Components/CustomerForm";
import dummy from "../Schema/dummy.json";

const Tests = () => {
  const [data, setData] = useState(dummy);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleAddCustomer = (newCustomer: any) => {
    setData((prevData) => [...prevData, newCustomer]);
  };

  const handleSelectCustomer = (customer: any) => {
    setSelectedCustomer(customer);
  };

  const handleCreateNew = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        data={data}
        onSelectCustomer={handleSelectCustomer}
        onCreateNew={handleCreateNew}
      />
      <main className="flex-1 pt-50 pb-10 md:pb-0 md:pt-0 flex items-center justify-center overflow-y-auto">
        <CustomerForm
          onAddCustomer={handleAddCustomer}
          selectedCustomer={selectedCustomer}
        />
      </main>
    </div>
  );
};

export default Tests;
