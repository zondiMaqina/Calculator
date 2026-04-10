# Calculator
A simple calculator created with 0 reliance on built-in methods for operations.

> [!NOTE] 
> The calculator can perfom complex calculations but... it does not respect, BODMAS principles, for now...

## Challenges

- Allowing simple operations without any reliance ojn built-in methods such as eval().
- How to use input element for outputing number display

## Solutions

- [x] Use three vars for first number, operator chosen ans second number, as other operators are clicked, it assigns current total to num1

- [x] Use he `readonly` attribute on element and the `.value` method for retrieving and changing its value