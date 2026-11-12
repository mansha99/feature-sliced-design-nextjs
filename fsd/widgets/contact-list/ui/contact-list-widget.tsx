"use client";

import React, { useEffect } from "react";
import { useContactStore, ContactRow } from "../../../entities";
import { AppHeader } from "../../../shared";
import { NavigateToAddContactAction, AddContactForm } from "../../../features";

export const ContactListWidget = () => {
  const { contacts, fetchContacts } = useContactStore();

  // Initial load
  useEffect(() => {
    fetchContacts();
    console.log(JSON.stringify(contacts));
  }, []);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      {/* 1. Header Composition */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-white">
        <AppHeader />
        <NavigateToAddContactAction />
      </div>

     
    <div className="flex flex-col w-full min-h-[400px]">
        <AddContactForm />
      </div>
      <div className="flex flex-col w-full min-h-[400px]">
        {contacts &&
          contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                actionsSlot={<a href="#">Some Action</a>}
              />
            );
            return;
          })}
      </div>

      {/* 3. Footer Composition */}
      <div className="p-4 border-t border-slate-200 bg-slate-50">
        That's All
      </div>
    </div>
  );
};
