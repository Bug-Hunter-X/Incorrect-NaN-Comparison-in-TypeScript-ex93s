# Incorrect NaN Comparison in TypeScript

This repository demonstrates a common error when comparing NaN (Not a Number) values in TypeScript.  The `compare` function, in `bug.ts`, incorrectly identifies NaN as equal to itself, returning 0 instead of handling the comparison appropriately.

The solution, found in `bugSolution.ts`, addresses this by explicitly checking for NaN using `isNaN` before performing the comparison.  This ensures correct behavior when dealing with NaN values.

This example highlights the importance of robust NaN handling in numerical comparisons, especially when working with potentially undefined or invalid inputs.