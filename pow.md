# Plan to Correct Nostr Proof of Work (PoW) Calculation

This document outlines the plan to fix the Proof of Work (PoW) calculation in `nostr-client.mjs` to align with NIP-13.

## 1. Analysis

The current `calculatePoW` function in `../nostr-client.mjs` incorrectly calculates the PoW by counting the number of "0" characters in the event ID.

According to [NIP-13](./nips/13.md), the PoW difficulty is defined as the number of **leading zero bits** in the event ID (which is a hex string).

## 2. Proposed Changes

### 2.1. Code Changes

The `calculatePoW` function in `../nostr-client.mjs` will be updated to implement the correct logic as described in NIP-13.

**File:** `../nostr-client.mjs`

**Current Implementation:**
```javascript
function calculatePoW(event) {
    // Implement PoW calculation logic here
    // For demonstration, let's assume PoW is the number of leading zeros in the event ID
    return event.id.split('0').length - 1;
}
```

**Proposed Implementation:**
```javascript
// Function to calculate PoW for a note based on NIP-13
function calculatePoW(event) {
    const hex = event.id;
    let count = 0;

    for (let i = 0; i < hex.length; i++) {
        const nibble = parseInt(hex[i], 16);
        if (nibble === 0) {
            count += 4;
        } else {
            // clz32 returns the number of leading zero bits in a 32-bit integer.
            // A nibble is 4 bits. We subtract 28 because clz32 works on 32 bits,
            // and we are only interested in the 4 bits of the nibble.
            count += Math.clz32(nibble) - 28;
            break;
        }
    }

    return count;
}
```

The `sortNotesByPoW` function already uses `calculatePoW` and will not require any changes.

### 2.2. Documentation

The following documentation will be created in a new `docs/pow/` directory:

*   **`HLDD.md`**: High-Level Design Document.
*   **`LLDD.md`**: Low-Level Design Document.
*   **`unit_test_edge_cases.md`**: Unit test cases.
*   **`manual_test_edge_cases.md`**: Manual testing checklist.

The `docs/manual_testing/consolidated_manual_tests.md` will be updated to include a reference to the new manual tests.

## 3. Approval

Once this plan is approved, I will switch to Code mode to implement the changes.
