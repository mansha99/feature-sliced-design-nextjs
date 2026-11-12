"use client";

import React, { useState, ReactElement } from "react";

// Strict downward imports from Shared layer
import { createContactSchema, createContact } from "../../../shared";

// Downward import from Entity layer (to refresh data after mutation)
import { useContactStore } from "../../../entities";

interface AddContactFormProps {
  onSuccess?: () => void;
}

export const AddContactForm = ({
  onSuccess,
}: AddContactFormProps): ReactElement => {
  const {errors,saveContact} = useContactStore();

  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const doSubmit = async () => {
    const dto = {
      name: name,
      mobile: mobile,
    };
    await saveContact(dto);
  };
  return (
   <div className="flex flex-col gap-5 p-6 sm:p-8 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto mt-6">
  <div>
    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
      Name
    </label>
    <input
      id="name"
      name="name"
      className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
      placeholder="Enter your name"
    />
    {errors.name && (
      <span className="block text-xs font-medium text-red-500 mt-1.5">{errors.name}</span>
    )}
  </div>

  <div>
    <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-1.5">
      Mobile Number
    </label>
    <input
      id="mobile"
      name="mobile"
      type="tel"
      className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400"
      value={mobile}
      onChange={(e) => {
        setMobile(e.target.value);
      }}
      placeholder="Enter mobile number"
    />
    {errors.mobile && (
      <span className="block text-xs font-medium text-red-500 mt-1.5">{errors.mobile}</span>
    )}
  </div>

  <div className="flex justify-end gap-3 mt-2">
    <button
      onClick={async () => {
        await doSubmit();
      }}
      className="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
    >
      Save
    </button>
  </div>
</div>
  );
};
