SELECT e.employee_id from Employees e 
LEFT JOIN Employees m on e.manager_id is not null and m.employee_id = e.manager_id
where m.employee_id is null and e.salary < 30000 and e.manager_id is not null order by e.employee_id;