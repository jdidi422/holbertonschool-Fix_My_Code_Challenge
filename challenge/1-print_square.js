#!/usr/bin/env node

// Get the size from command line arguments
const size = parseInt(process.argv[2]);

if (isNaN(size) || size <= 0) {
  console.log("Please provide a positive integer.");
  process.exit(1);
}

// Loop over each row
for (let i = 0; i < size; i++) {
  let row = '';
  // Loop over each column
  for (let j = 0; j < size; j++) {
    row += '#';
  }
  console.log(row);
}

