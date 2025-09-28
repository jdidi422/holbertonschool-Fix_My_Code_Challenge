#!/usr/bin/env node

// Get the size from command line arguments
const size = parseInt(process.argv[2], 10);

// Exit silently if size is not a positive integer
if (isNaN(size) || size <= 0) {
  process.exit(0);
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
