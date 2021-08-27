import { CompanyModel } from "src/app/models/company/company";

export class GetAllCompaniesAction {
    static readonly type = '[Companies] Get All Companies';
    constructor(){}
}    
export class DeleteCompanyAction {
    static readonly type = '[Companies] Delete Company';
    constructor(public companyId: number) {}
}
export class AddCompanyAction
{
    static readonly type = '[Companies] Add Company';
    constructor(public company: CompanyModel){}
}
export class UpdateCompanyAction
{
    static readonly type = '[Companies] Update Company';
    constructor(public company: CompanyModel){}
}
  