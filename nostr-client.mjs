// Import NDK using ES modules
import NDK from '@nostr-dev-kit/ndk';

// Initialize NDK with multiple relays
const ndk = new NDK({ 
  explicitRelayUrls: [
    'wss://orangesync.tech',
    'wss://nostr.mom',
    'wss://relay.wikifreedia.xyz'
  ] 
});

// Function to fetch notes from Nostr relays
async function fetchNotes() {
    try {
        await ndk.connect();
        const events = await ndk.fetchEvents({
            kinds: [1], // Fetch events of kind 34128
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

    let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Sorted Nostr Notes</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .note { margin-bottom: 20px; }
        </style>
    </head>
    <body>
        <h1>Sorted Nostr Notes by PoW</h1>
    `;

    sortedNotes.forEach((note) => {
        htmlContent += `
        <div class="note">
            <h2>Note ID: ${note.id}</h2>
            <p>PoW: ${calculatePoW(note)}</p>
            <p>Content: ${note.content}</p>
            <hr>
        </div>
        `;
    });

    htmlContent += `
    </body>
    </html>
    `;

    const fs = await import('fs/promises');
    await fs.writeFile('index.html', htmlContent);
    console.log('HTML file generated: index.html');
}

main().catch(console.error);