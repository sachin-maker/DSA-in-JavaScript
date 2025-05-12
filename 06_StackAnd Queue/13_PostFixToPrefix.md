## Postfix to Prefix

### Algorithm:
* #### Use a stack to store operands (and intermediate prefix expressions).
* #### Iterate through each character in the postfix expression:
* #### If it's an operand (alphanumeric), push it to the stack.
* #### If it's an operator (+, -, *, /, ^), pop the top two operands:
* #### The second popped operand is the first in the prefix expression (left operand).
* #### The first popped operand is the second in the prefix expression (right operand).
* #### Form a new prefix expression: operator + leftOperand + rightOperand (e.g., *BC for operands B, C and operator *).
* #### Push this new expression back to the stack.
* #### After processing, the stack should contain one string: the final prefix expression.

### Key Points:
* ####  Postfix processes operands in order, and the stack ensures operators are applied correctly.
* ####  Unlike postfix-to-infix (which adds parentheses), prefix conversion directly concatenates the operator and operands without parentheses, as prefix notation is unambiguous.
* ####  Right-associativity of ^ (exponentiation) is preserved by the postfix order (e.g., ABC^^ means A^(B^C), converting to ^A^BC).
 
## Time Complexity: O(n), where n is the length of the postfix expression (single pass, O(1) stack operations).
## Space Complexity: O(n) for the stack, which stores operands and intermediate expressions.