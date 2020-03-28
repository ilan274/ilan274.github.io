# JavaScript assert (tests) exercises

### 1. The sum(a, b) function returns the sum of parameter a and b
- Test if the sum return (4, 5) is 9
- Test whether the return of sum (0, 0) is 0
- Test if the sum function throws an error when the parameters are 4 and "5" (string 5)
- Test if the error message is “parameters must be numbers” when making the sum call (4, "5")]

### 2. The function myIndexOf (arr, item) receives an array arr, an item and returns the index of the item or -1 if the item does not belong to the array 'arr'**
- Test if the call myIndexOf ([1, 2, 3, 4], 3) returns the expected value
- Test if the call myIndexOf ([1, 2, 3, 4], 5) returns the expected value.

### 3. The mySum (arr) function receives an arr array and returns the sum of its elements**1. 
Test if the call mySum ([1, 2, 3, 4]) returns the value 10
Test if the call mySum ([1, -2, - 3, 4]) returns the expected value


### 4. The myRemove (arr, item) function receives an arr array and returns a copy of that array without the item element if it exists in the array**
Check if the myRemove call ([1, 2, 3, 4], 3) returns the expected array
Check that the myRemove call ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]
Check that the array passed by parameter has not changed
Check if the myRemove call ([1, 2, 3, 4], 5) returns the expected array

### 5. The myRemoveWithoutCopy (arr, item) function receives an arr array and returns the array itself without the item element if it exists in the array**
Check that the myRemoveWithoutCopy call ([1, 2, 3, 4], 3) returns the expected array
Check that the myRemoveWithoutCopy call ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]
Check that the myRemoveWithoutCopy call ([1, 2, 3, 4], 5) returns the expected array

### 6. The function myFizzBuzz (num) receives a number num and returns "fizzbuzz" if the number is divisible by 3 and 5, returns "fizz" if it is divisible by only 3, returns "buzz" if divisible only by 5, returns the number itself if not divisible by 3 or 5 and returns false if num is not a number
- Make a call with a number divisible by 3 and 5 and check if the return is as expected
- Make a call with a number divisible by 3 and check if the return is as expected
- Make a call with a number divisible by 5 and check if the return is as expected
- Make a call with a number that is not divisible by 3 or 5 and check if the return is as expected
- Make a call with a parameter that is not a number and check if the return is as expected

### 7. Test if a variable has been defined

### 8. Test whether a function has been defined