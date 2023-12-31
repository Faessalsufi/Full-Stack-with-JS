const sports = [
  "football",
  "basketball",
  "tennis",
  "volleyball",
  "golf",
  "soccer",
];

sports.forEach(function (sport) {
  //   console.log("This is a sport:", sport);
});

sports.forEach((sport) => {
  //   console.log("This is a arrow:", sport);
});

function printMe(item) {
  console.log("This is printMe function", item);
}

// sports.forEach(printMe);

sports.forEach((sport, index, sports) => {
  //   console.log(sport, index, sports);
});
