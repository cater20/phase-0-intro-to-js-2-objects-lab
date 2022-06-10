const employee={
    name:'sam',
    streetAddress:'11 Broadway'  
    
}
let streetAddress='12 Broadway'

function updateEmployeeWithKeyAndValue(sam, key, value){
return {...sam,...{[key] :value}}
}

function destructivelyUpdateEmployeeWithKeyAndValue(Sam, key, value){
employee[key] ='12 Broadway';
return Sam;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee}
    delete newEmployee[key];
    return newEmployee ;
      }
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}