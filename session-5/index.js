function getGrade(total) {
  if (total > 90) {
    return "A+";
  } else if (total > 80 && total <= 90) {
    return "A";
  } else if (total > 70 && total <= 80) {
    return "B";
  } else if (total > 60 && total <= 70) {
    return "c";
  } else if (total > 50 && total <= 60) {
    return "D";
  } else if (total > 40 && total <= 50) {
    return "E";
  } else if (total > 30 && total <= 40) {
    return "F";
  } else {
    return "Fail";
  }
}
//console.log(getGrade(92));

let grade;
function getResults(total) {
  switch (true) {
    case total > 90:
      grade = "A+";
      break;

    case total > 80:
      grade = "A";
      break;

    case total > 70:
      grade = "B";
      break;

    case total > 60:
      grade = "C";
      break;
    case total > 50:
      grade = "D";
      break;
    case total > 40:
      grade = "E";
    case total > 30:
      grade = "F";
      break;
    default:
      grade = "Fail";
  }

  console.log(grade);
}
