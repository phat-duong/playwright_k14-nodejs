import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";
import FTE from "./FTE";

// Create object
let teo = new FTE("Teo");
let ti = new FTE("Ti");
let tun = new Contractor("Tun");

// Use controller to process object data
const totalSalary = EmployeeController.getTotalSalary([teo, ti, tun]);
console.log(`Total salary is: ${totalSalary}`);