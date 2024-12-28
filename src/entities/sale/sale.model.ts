import { Employee } from '../employee/employee.mode';
import { SaleDetail } from './sale-detail.model';

export class Sale {
  employee: Employee;
  date: Date;
  total: number;
  details: Array<SaleDetail>;
}
