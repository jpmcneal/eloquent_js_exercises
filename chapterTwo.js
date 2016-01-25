// Looping a triangle
for ( var hash ="#"; hash.length <=7; hash = hash + "#" )
  console.log(hash);

// FizzBuzz: Part 1
var number = 0;
while (number <= 99) {
  number = number + 1;
  if ( number % 3 == 0 )
    console.log("Fizz");
  else if ( number % 5 == 0 )
    console.log("Buzz");
  else
    console.log ( number );
}

// FizzBuzz: Part 2
var number = 0;
while (number <= 99) {
  number = number + 1;
  if ( (number % 3 == 0 && number % 5 == 0) )
    console.log("FizzBuzz");
  else if  ( number % 3 == 0)
    console.log("Fizz");
  else if ( number % 5 == 0 )
    console.log("Buzz");
  else
    console.log ( number );
}

// Chess Board: Part 1
var line ="";

for (var lineLength = 0; lineLength < 8; lineLength++ ) {
  for ( var numberOfLines = 0; numberOfLines < 8; numberOfLines ++) {
    if ( (lineLength + numberOfLines) % 2 == 0 )
      line += " ";
    else
      line += "#";
  }
  line += "\n";
}
console.log(line);

// Chess Board: Part 2
var line ="";
var numLines = 8;

for (var lineLength = 0; lineLength < numLines; lineLength++ ) {
  for ( var numberOfLines = 0; numberOfLines < numLines; numberOfLines ++) {
    if ( (lineLength + numberOfLines) % 2 == 0 )
      line += " ";
    else
      line += "#";
  }
  line += "\n";
}
console.log(line);
