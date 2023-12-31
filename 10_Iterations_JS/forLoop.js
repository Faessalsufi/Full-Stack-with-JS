// for loop

for (let i = 1; i <= 24; i++) {
  const element = i;
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    const element = j;
    //  console.log(`inner loop value: ${j} and inner loop ${i}`);
    //   console.log(`${i} * ${j} = ${i * j}`);
  }
}

myArray = ["flash", "barman", "superman"];

// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element);
}

// break and continue

for (let i = 1; i <= 24; i++) {
  if (i == 13) {
    // console.log("Error detected");
    break;
  }
  //   console.log(i);
}

//continue

for (let i = 1; i <= 24; i++) {
  if (i == 13) {
    console.log("Error detected");
    continue;
  }
  console.log(i);
}
