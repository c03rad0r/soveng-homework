# PoW Calculation - Manual Test Edge Cases

This document provides a checklist for manually testing the Proof of Work (PoW) functionality in the `nostr-client` application.

## Pre-requisites

-   The application is running and connected to Nostr relays.
-   The browser's developer console is open to view the output.

## Test Steps

1.  **[ ] Verify Correct Sorting:**
    -   **Action:** Load the `index.html` page.
    -   **Expected Result:** The notes displayed on the page should be sorted in descending order based on their PoW difficulty. The "PoW" value for each note should decrease as you scroll down.

2.  **[ ] Verify PoW Values:**
    -   **Action:** Manually inspect a few notes in the console output. For a given event ID, manually calculate the expected PoW and compare it to the value logged by the application.
    -   **Example ID**: `000006d8c378af1779d2feebc7603a125d99eca0ccf1085959b307f64e5dd358`
    -   **Expected PoW**: 21
    -   **Expected Result:** The calculated PoW should match the value displayed in the application for that note.

3.  **[ ] Test with Zero PoW:**
    -   **Action:** Find a note in the console output that has an ID starting with a non-zero character (e.g., `f...`).
    -   **Expected Result:** The application should display a PoW of `0` for this note.

4.  **[ ] Test with High PoW:**
    -   **Action:** Find a note with a high number of leading zeros in its ID.
    -   **Expected Result:** The application should correctly calculate and display a high PoW value, and this note should appear at or near the top of the sorted list.