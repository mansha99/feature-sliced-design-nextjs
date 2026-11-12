import React, { ReactNode } from "react";
import type { ContactDTO } from "../../../shared";

interface ContactRowProps {
  contact: ContactDTO;
  actionsSlot: ReactNode;
}

export const ContactRow = ({ contact, actionsSlot }: ContactRowProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-4 flex-1">
        <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">
          {contact.name.substring(0, 2).toUpperCase()}
        </div>
        <div className="w-1/4 font-medium text-slate-900">{contact.name}</div>
        <div className="w-1/4 text-slate-500">{contact.mobile}</div>
      </div>

      <div className="flex items-center gap-2">{actionsSlot}</div>
    </div>
  );
};
