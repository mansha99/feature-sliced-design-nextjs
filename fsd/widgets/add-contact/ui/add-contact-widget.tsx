"use client";

import React, { useEffect } from "react";
import { useContactStore, ContactRow } from "../../../entities";
import { AppHeader } from "../../../shared";
import { NavigateToListContactAction, AddContactForm } from "../../../features";

export const AddContactWidget = () => {
 
  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      {/* 1. Header Composition */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-white">
        <AppHeader /> 
        <NavigateToListContactAction />
        
      </div>

      <div className="flex flex-col w-full min-h-[400px]">
        <AddContactForm
          onSuccess={() => alert("Contact added successfully!")}
        />
      </div>
      {/* 2. List Composition (Entities + Injected Features) */}
      

      {/* 3. Footer Composition */}
      <div className="p-4 border-t border-slate-200 bg-slate-50">
        That's All
      </div>
    </div>
  );
};
