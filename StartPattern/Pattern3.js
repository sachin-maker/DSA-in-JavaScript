// Type 4
//     *
//    **
//   *** 
//  ****
// *****

// Number of rows for the pattern
const rows = 5;

// Loop to iterate through each row
for (let i = 1; i <= rows; i++) {
  let pattern = '';
  
  // Loop to add spaces before the '*' characters
  for (let j = 1; j <= rows - i; j++) {
    pattern += ' ';
  }
  
  // Loop to add '*' characters in each row
  for (let k = 1; k <= i; k++) {
    pattern += '*';
  }
  
  // Print the current row pattern
  console.log(pattern);
}
