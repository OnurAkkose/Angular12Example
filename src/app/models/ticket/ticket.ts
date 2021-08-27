import { CompanyModel } from "../company/company";

export interface TicketModel {
  id: number;
  name: string;
  foundationDate: string;
  sector: string;
  isActive: boolean;
  price: number;
  company: CompanyModel;
}