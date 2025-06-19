// Import NDK using ES modules
import NDK from '@nostr-dev-kit/ndk';

// Initialize NDK
const ndk = new NDK({ explicitRelayUrls: ['wss://relay.nostr.band'] });

// Function to fetch notes from Nostr relays
async function fetchNotes() {
    try {
        await ndk.connect();
        const events = await ndk.fetchEvents({
            kinds: [1], // Text notes
            limit: 100, // Fetch last 100 notes
        });
        // Convert Set to Array
        return Array.from(events);
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
}

// Function to calculate PoW for a note
function calculatePoW(event) {
    // Implement PoW calculation logic here
    // For demonstration, let's assume PoW is the number of leading zeros in the event ID
    return event.id.split('0').length - 1;
}

// Function to sort notes by PoW
function sortNotesByPoW(notes) {
    return notes.sort((a, b) => calculatePoW(b) - calculatePoW(a));
}

// Main function to fetch, sort, and display notes
async function main() {
    const notes = await fetchNotes();
    const sortedNotes = sortNotesByPoW(notes);
    
    console.log('Sorted Notes:');
    sortedNotes.forEach((note) => {
        console.log(`Note ID: ${note.id}, PoW: ${calculatePoW(note)}`);
        console.log(`Content: ${note.content}`);
        console.log('---');
    });
}

main().catch(console.error);