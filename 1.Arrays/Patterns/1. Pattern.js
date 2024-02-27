//Pattern 1
for (let i = 0; i < 4; i++) {
  let result = "";
  for (let j = 0; j <= 4; j++) {
    result += "* ";
  }
  console.log(result + "\n");
}

//Pattern 2
for (let i = 0; i < 5; i++) {
  let result = "";
  for (let j = 0; j <= i; j++) {
    result += "* ";
  }
  console.log(result + "\n");
}

//Pattern 3
for (let i = 1; i <= 5; i++) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += j;
  }
  console.log(result + "\n");
}

//Pattern 4
for (let i = 1; i <= 5; i++) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += i;
  }
  console.log(result + "\n");
}

//Pattern 5

for (let i = 0; i <= 5; i++) {
  let result = "";
  for (let j = 5; j >= i; j--) {
    result += "* ";
  }
  console.log(result + "\n");
}

//Pattern 6
for (let i = 1; i <= 5; i++) {
  let result = "";
  for (let j = 1; j <= 5 - i + 1; j++) {
    result += j;
  }
  console.log(result + "\n");
}
console.log("shubham");

//Pattern 7
for (let i = 0; i < 9; i++) {
  let result = "";
  //space
  for (let j = 0; j < i; j++) {
    result += " ";
  }
  //star
  for (let j = 0; j < 2 * 9 - (2 * i + 1); j++) {
    result += "*";
  }
  //space
  for (let j = 0; j < i; j++) {
    result += " ";
  }
  console.log(result + "\n");
}

//pattern 8
for (let i = 0; i <= 9; i++) {
  let result = "";
  //space
  for (let j = 0; j < 9 - i + 1; j++) {
    result += " ";
  }
  //star
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  //space
  for (let j = 0; j < 9 - i + 1; j++) {
    result += " ";
  }
  console.log(result + "\n");
}

//Pattern 9
for (let i = 0; i <= 9; i++) {
  let result = "";
  //space
  for (let j = 0; j < 9 - i + 1; j++) {
    result += " ";
  }
  //star
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  //space
  for (let j = 0; j < 9 - i + 1; j++) {
    result += " ";
  }
  console.log(result + "\n");
}
for (let i = 0; i <= 9; i++) {
  let result = "";
  //space
  for (let j = 0; j <= i; j++) {
    result += " ";
  }
  //star
  for (let j = 0; j < 2 * 9 - (2 * i + 1); j++) {
    result += "*";
  }
  //space
  for (let j = 0; j <= i; j++) {
    result += " ";
  }
  console.log(result + "\n");
}

//Pattern 10

for (let i = 1; i <= 2 * 6 - 1; i++) {
  let result = "";
  let stars = i;
  if (i > 6) stars = 2 * 6 - i;
  for (let j = 1; j < stars; j++) {
    // Change the condition from j <= i to j < stars
    result += "* ";
  }
  console.log(result + "\n");
}

//Pattern 11
for (let i = 0; i <= 6; i++) {
  let start = 1;
  let result = "";
  if (i % 2 === 0) start = 1;
  else start = 0;
  for (let j = 0; j <= i; j++) {
    result += start + " ";
    start = 1 - start;
  }
  console.log(result + "\n");
}

//PAttern 12
for (let i = 1; i <= 5; i++) {
  //numbers
  let result = "";
  let space = 2 * (5 - 1);
  for (let j = 1; j <= i; j++) {
    result += j;
  }

  //space
  for (let j = 1; j <= space; j++) {
    result += " ";
  }
  //numbers
  for (let j = 1; j >= 1; j--) {
    result += j;
  }

  console.log(result + "\n");
  space -= 2;
}
