# PoW Calculation - Unit Test Edge Cases

This document outlines the unit tests for the `calculatePoW` function.

## Test Cases

-   **[ ] Test Case 1: No leading zeros**
    -   **Input `event.id`**: `f123...`
    -   **Expected Output**: `0`

-   **[ ] Test Case 2: One leading zero nibble**
    -   **Input `event.id`**: `0f123...`
    -   **Expected Output**: `4`

-   **[ ] Test Case 3: Multiple leading zero nibbles**
    -   **Input `event.id`**: `0000abcd...`
    -   **Expected Output**: `16`

-   **[ ] Test Case 4: Leading zero bits within the first non-zero nibble**
    -   **Input `event.id`**: `7fff...` (binary `0111...`)
    -   **Expected Output**: `1`
    -   **Input `event.id`**: `3fff...` (binary `0011...`)
    -   **Expected Output**: `2`
    -   **Input `event.id`**: `1fff...` (binary `0001...`)
    -   **Expected Output**: `3`

-   **[ ] Test Case 5: Mix of zero nibbles and leading zero bits**
    -   **Input `event.id`**: `007f...`
    -   **Expected Output**: `8 + 1 = 9`

-   **[ ] Test Case 6: Full 64-character zero ID (highly unlikely)**
    -   **Input `event.id`**: `0000000000000000000000000000000000000000000000000000000000000000`
    -   **Expected Output**: `256`

-   **[ ] Test Case 7: ID with `f` as the first non-zero nibble**
    -   **Input `event.id`**: `0f123...`
    -   **Expected Output**: `4`

-   **[ ] Test Case 8: ID from NIP-13 example**
    -   **Input `event.id`**: `000006d8c378af1779d2feebc7603a125d99eca0ccf1085959b307f64e5dd358`
    -   **Expected Output**: `21` (5 * 4 = 20 leading zero bits from "00000", plus 1 leading zero bit from "6" which is `0110` in binary)