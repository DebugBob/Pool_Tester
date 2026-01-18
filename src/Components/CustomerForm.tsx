import React, { useState, useEffect } from "react";

interface CustomerFormProps {
  onAddCustomer: (customer: any) => void;
  selectedCustomer?: any;
}

const initial_state = {
  name: "",
  time: "",
  date: "",
  technician: "",
  pool: {
    chlorine: "",
    ph: "",
    alkalinity: "",
    hardness: "",
  },
  comments: [],
};

const CustomerForm = ({
  onAddCustomer,
  selectedCustomer,
}: CustomerFormProps) => {
  const [customer_data, set_customer_data] = useState(initial_state);

  useEffect(() => {
    if (selectedCustomer) {
      set_customer_data(selectedCustomer);
    } else {
      set_customer_data(initial_state);
    }
  }, [selectedCustomer]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddCustomer(customer_data);
    set_customer_data(initial_state);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("pool.")) {
      const field = name.split(".")[1];
      set_customer_data({
        ...customer_data,
        pool: {
          ...customer_data.pool,
          [field]: value,
        },
      });
    } else {
      set_customer_data({ ...customer_data, [name]: value });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 p-4 rounded-sm"
    >
      <div className="inline-block md:flex gap-4 mb-4">
        <div className=" flex flex-col px-4 py-2">
          <label htmlFor="name" className="bg-gray-100 rounded-t-sm p-2">
            Customer
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={customer_data.name || ""}
            onChange={handleChange}
            className="bg-gray-100 rounded-b-sm border-b-2 px-2"
            autoFocus
          />
        </div>
        <div className="flex flex-col  px-4 py-2">
          <label htmlFor="technician" className="bg-gray-100 rounded-t-sm p-2">
            Technician
          </label>
          <input
            type="text"
            id="technician"
            name="technician"
            className="bg-gray-100 rounded-b-sm border-b-2 px-2"
            value={customer_data.technician || ""}
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col  px-4 py-2 self-center">
          <input
            type="date"
            id="date"
            name="date"
            className="bg-gray-100 rounded-b-sm border-b-2 items-center p-4"
            value={customer_data.date || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <fieldset className="mt-4 border p-2 rounded border-gray-200">
        <legend className="font-semibold">Pool Info</legend>
        <span className="inline-block md:flex">
          <div className=" flex flex-col  px-4 py-2">
            <label
              htmlFor="pool.chlorine"
              className="bg-gray-100 rounded-t-sm p-2"
            >
              Chlorine
            </label>
            <input
              type="text"
              id="pool.chlorine"
              name="pool.chlorine"
              className="bg-gray-100 rounded-b-sm border-b-2 px-2"
              value={customer_data.pool.chlorine || ""}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col  px-4 py-2">
            <label htmlFor="pool.ph" className="bg-gray-100 rounded-t-sm p-2">
              pH
            </label>
            <input
              type="text"
              id="pool.ph"
              name="pool.ph"
              className="bg-gray-100 rounded-b-sm border-b-2 px-2"
              value={customer_data.pool.ph || ""}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col  px-4 py-2">
            <label
              htmlFor="pool.alkalinity"
              className="bg-gray-100 rounded-t-sm p-2"
            >
              Alkalinity
            </label>
            <input
              type="text"
              id="pool.alkalinity"
              name="pool.alkalinity"
              className="bg-gray-100 rounded-b-sm border-b-2 px-2"
              value={customer_data.pool.alkalinity || ""}
              onChange={handleChange}
            />
          </div>
        </span>
        <span className="md:flex">
          <div className=" flex flex-col  px-4 py-2">
            <label
              htmlFor="pool.hardness"
              className="bg-gray-100 rounded-t-sm p-2"
            >
              Hardness
            </label>
            <input
              type="text"
              id="pool.hardness"
              name="pool.hardness"
              className="bg-gray-100 rounded-b-sm border-b-2 px-2"
              value={customer_data.pool.hardness || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col px-4 py-2 grow">
            <label
              htmlFor="pool_comments"
              className="bg-gray-100 rounded-t-sm p-2"
            >
              Comments
            </label>
            <textarea
              id="pool_comments"
              name="pool_comments"
              className="w-full h-24 resize-none bg-gray-100 rounded-b-sm border-b-2 px-2"
              placeholder="Enter comments"
            />
          </div>
        </span>
        <button
          type="submit"
          className="bg-gray-100 rounded-t-sm py-2 px-6 hover:bg-gray-200 cursor-pointer active:bg-gray-300"
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default CustomerForm;
