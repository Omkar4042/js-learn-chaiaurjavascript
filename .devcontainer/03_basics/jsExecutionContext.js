// // JavaScript execution context 

// // in js when we write any code then its Global EC is created its different in browser in node js , dino and other envirnoments 
// // In browser global EC is all wise windoes object whichi is inside a this 

// in js there are 3 EC 
// Global EC
// functional EC 
// Eval EC used in mongo 

// // codes are been run in two phases 
// // memory creation phase :- here space is been alocated when we diclear a variable then in this phase its memory is been alocated 

// The working of  memory creation phase
// example 
// let val1 = 10 
// let val2 = 5
// function addNum(num1,num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1,val2)
// let result2 = addNum(10,2)
// //1 Phase now in this example first global EC will be created and it will be stored/allocated in this
// // Phase 2
// // Memory phase
// // the val1, val2, function addnum, result1 , and result for all of this memory is allocated and in them UNDEFINED  is stored 

// // Phase3
// // now in val1 and val2 10 and 5 are stored 
// now for a function addnum a new execcutional context is been created in it system creates a new variable envirnoment and execution thred , now in this new context first will come 
// Memory phase 
// so val1 and val2 and total (its in function ) for them memory is been alocated and undefined is stored in it
// them execution context 

// Execution phase:-
// here the values are been assinged to num1 , num2, total(computed value) and the result is been given to the global execution context the result varible , and then  the new execution enviromnet for the variable is been deleted , 

// then we come to line 8 of result2 the same as result1 the addnum , will be repeted , like for result2 a new  variable or execution environment will be created and same memory  pahse will repet and execution will repet and result will be given to global exrcution phase (what is it  , the variable maybe)


// ########### Call stack #########

// normally when we functuion is called then all the phases are completed for it and then  its been removed from the stack memory

// now when there are nested functions at that time last in first out method is been followed see it on yt how is done on browser