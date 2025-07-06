# PoW Calculation - Low-Level Design

## 1. Implementation Details

The `calculatePoW` function will be implemented in `../nostr-client.mjs` as follows:

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

## 2. Data Structures

The function takes a standard Nostr event object as input. The only field used is `event.id`, which is a 64-character hexadecimal string.

## 3. Algorithms

The algorithm iterates through the hexadecimal characters (nibbles) of the event ID.
- For each full `0` nibble, it adds 4 to the total count of leading zero bits.
- When it encounters a non-zero nibble, it calculates the number of leading zero bits within that nibble using `Math.clz32()`.
- `Math.clz32()` operates on 32-bit integers. Since a nibble is 4 bits, the result is adjusted by subtracting 28 to get the correct count for the nibble.
- The loop breaks after the first non-zero nibble, as subsequent bits are not relevant to the leading zero count.

## 4. Error Handling

- The `parseInt()` function will return `NaN` if the character is not a valid hexadecimal digit. This is not expected for a valid Nostr event ID. No special error handling is added, as the input is assumed to be a valid event.

## 5. Performance Considerations

This implementation is highly efficient. The loop will, at most, run 64 times (the length of the event ID). In practice, it will terminate much sooner, as soon as it encounters a non-zero hex character. The use of `Math.clz32` is a fast, low-level operation. This is suitable for any environment, including resource-constrained ones like OpenWRT.