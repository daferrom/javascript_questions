// Reduce pattern: build one result by accumulating each item in an array.

const shifts = [
  { employee: 'ana', day: 'mon', hours: 8 },
  { employee: 'luis', day: 'mon', hours: 6 },
  { employee: 'ana', day: 'tue', hours: 4 },
  { employee: 'marta', day: 'tue', hours: 8 },
  { employee: 'luis', day: 'wed', hours: 7 },
];

// 1. Sum hours by employee.
const hoursByEmployee = shifts.reduce((totals, { employee, hours }) => {
  totals[employee] = (totals[employee] ?? 0) + hours;
  return totals;
}, {});

console.log('Hours by employee:', hoursByEmployee);
// { ana: 12, luis: 13, marta: 8 }

// 2. Use the accumulated totals to find qualifying employees.
const employeesOverTenHours = Object.entries(hoursByEmployee)
  .filter(([, hours]) => hours > 10)
  .map(([employee]) => employee)
  .sort();

console.log('Employees over 10 hours:', employeesOverTenHours);
// [ 'ana', 'luis' ]

const timeEntries = [
  { employee: 'ana', project: 'hotel', day: 'mon', hours: 5 },
  { employee: 'luis', project: 'store', day: 'mon', hours: 8 },
  { employee: 'ana', project: 'store', day: 'mon', hours: 3 },
  { employee: 'marta', project: 'hotel', day: 'tue', hours: 6 },
  { employee: 'ana', project: 'hotel', day: 'tue', hours: 7 },
  { employee: 'luis', project: 'hotel', day: 'wed', hours: 4 },
];

// 3. Group employees by day. Create the array before pushing into it.
const employeesByDay = timeEntries.reduce((groupedEmployees, { employee, day }) => {
  groupedEmployees[day] ??= [];
  groupedEmployees[day].push(employee);
  return groupedEmployees;
}, {});

console.log('Employees by day:', employeesByDay);
// { mon: [ 'ana', 'luis', 'ana' ], tue: [ 'marta', 'ana' ], wed: [ 'luis' ] }

const sales = [
  { product: 'laptop', category: 'electronics', price: 1200 },
  { product: 'mouse', category: 'electronics', price: 50 },
  { product: 'desk', category: 'furniture', price: 300 },
  { product: 'chair', category: 'furniture', price: 150 },
  { product: 'keyboard', category: 'electronics', price: 100 },
];

// 4. Sum sale prices by category.
const salesByCategory = sales.reduce((totals, { category, price }) => {
  totals[category] = (totals[category] ?? 0) + price;
  return totals;
}, {});

console.log('Sales by category:', salesByCategory);
// { electronics: 1350, furniture: 450 }