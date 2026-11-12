import { CreateContactDTO } from "./zod";
export interface CreateContactResponse<T = any> {
  status: number;
  data?: T;
  errors?: Record<string, string> | string;
}

export async function createContact(
  dto: CreateContactDTO,
) {
  const payload = {
    name: dto.name,
    mobile: dto.mobile,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await response.json();

  if (response.status === 422) {
    return {
      data: null,
      status: response.status,
      errors: result.errors ?? result,
    };
  }

  if (!response.ok) {
    return {
      data: null,
      status: response.status,
      errors: result.message || "Something went wrong",
    };
  }

  return {
    status: response.status,
    data: result,
    errors: {},
  };
}

export async function listContacts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contacts`,
    {
      method: "GET", //
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data = await response.json();
  return data;
}
