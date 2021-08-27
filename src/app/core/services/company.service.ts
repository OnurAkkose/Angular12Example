import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CompanyModel } from 'src/app/models/company/company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanies()
  {
    return this.http.get<CompanyModel[]>(`${environment.dev.apiUrl}/Company`);
  }
  getCompanyById(id: number)
  {
    return this.http.get<CompanyModel[]>(`${environment.dev.apiUrl}/Company/${id}`);
  }
  postCompany(company: CompanyModel)
  {
    return this.http.post(`${environment.dev.apiUrl}/Company/Add`,company);   
  }
  updateCompany(company: CompanyModel)
  {
    return this.http.put(`${environment.dev.apiUrl}/Company/Add`,company);   
  }
}
