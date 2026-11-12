import { create } from "zustand";
// Assuming Orval generated this fetcher using our custom-fetch.ts mutator
import {
  createContact,
  CreateContactResponse,
  CreateContactDTO,
  listContacts,
  type ContactDTO,
} from "../../../shared";

export interface ContactState {
  contacts: ContactDTO[];
  errors: {};
  status: number;
  fetchContacts: () => Promise<void>;
  saveContact: (dto: CreateContactDTO) => Promise<void>;
}

export const useContactStore = create<ContactState>((set) => ({
  contacts: [],
  status: 0,
  errors: {},
  fetchContacts: async () => {
    const response = await listContacts();
    set({
      contacts: response,
    });
  },
  saveContact: async (dto: CreateContactDTO) => {
    const response = await createContact(dto);
    if (response.status == 422) {
    set({
      errors: response.errors.detail.errors,
      status: response.status,
    });
  }
    if (response.status == 200) {
      // const response = await listContacts();
      set({
        contacts: response.data,
      });
    }
  },
}));
