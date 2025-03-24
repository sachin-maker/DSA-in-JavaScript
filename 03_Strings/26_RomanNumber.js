// Roman to Integer
// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romanToInt(s) {
    // Map of Roman numeral values
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    // Iterate through each character
    for (let i = 0; i < s.length; i++) {
        // Get current and next values
        let current = romanValues[s[i]];
        let next = i + 1 < s.length ? romanValues[s[i + 1]] : 0;
        
        // If current is less than next, subtract current
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    
    return result;
}

// Uses a map for basic Roman numeral values
// Checks each character and compares with next
// If current < next (like IV), subtract current
// Otherwise, add current

// Time Complexity: O(n) where n is string length
// Space Complexity: O(1) as map is constant size


// i	Char	Current	Next	Condition (current < next)	Operation	Result
// 0	M	1000	100	         false	                     +1000	1000
// 1	C	100	    1000	     true	                     -100	900
// 2	M	1000	10	         false	                     +1000	1900
// 3	X	10	    100	             true	                     -10	1890
// 4	C	100	    1	             false                     	 +100	1990
// 5	I	1	    5	             true                      	 -1	1989
// 6	V	5	    0	             false	                     +5	1994