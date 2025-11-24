// switch case
// in switch case if one match is found then remining code is not executed and if the mactch case's break is commented then all the code will be executed after match case excluding defult
// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

// const month = 4;
const month = "march";
// here we can compair cases based on numbers and string as well  but its case sensetive
switch (month) {
  case "January":
    console.log("January");
    break;

  case "February":
    console.log("February");
    break;
  case "march":
    console.log("March");
    break;
  case "April":
    console.log("April");
    break;

  default:
    console.log("Year End")
    break;
}
