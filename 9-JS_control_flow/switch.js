// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3; //"march"

switch (month) {
  case 1: // case "march":
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
  // break; //! if a case is match than it will not check other cases and directly execute all code till break or end included default
  case 4:
    console.log("April");
  // break;
  case 5:
    console.log("May");
  // break;
  case 6:
    console.log("June");
  // break;

  default:
    console.log("Default case");
    break;
}
