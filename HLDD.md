# High Level Design Document (HLDD)

## System Overview
The Nostr client will fetch notes from Nostr relays, calculate the PoW for each note, sort them by PoW, and display the results.

## Component Interactions
1. Nostr Relay Connection: Connect to Nostr relays to fetch notes.
2. PoW Calculation: Calculate the PoW for each fetched note.
3. Sorting: Sort notes based on their PoW.
4. UI Display: Display the sorted notes with their PoW.

## API Definitions
1. Nostr Relay API: Use Nostr protocol to fetch notes.
2. PoW Calculation API: Implement a function to calculate PoW for notes.

## Data Flow
1. Fetch notes from Nostr relays.
2. Calculate PoW for each note.
3. Sort notes by PoW.
4. Display sorted notes with their PoW.

## Mermaid Diagram
```mermaid
graph LR
    A[Nostr Relay] -->|Fetch Notes|> B[Nostr Client]
    B -->|Calculate PoW|> C[PoW Calculator]
    C -->|Sort Notes|> D[Sorting Component]
    D -->|Display Notes|> E[UI Component]