export interface IOffice {
  id?: string;
  title: string;
  address: string;
  fullName: string;
  job: string;
  email: string;
  phone: string;
}

export type IContact = Omit<IOffice, "title" | "address">
