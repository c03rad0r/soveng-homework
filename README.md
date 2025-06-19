# Nsite Setup and Deployment Guide

## Overview
This guide provides step-by-step instructions on setting up and deploying an nsite using `@nsyte/cli`.

## Prerequisites
1. Install Deno on your system.
2. Create a new directory for your project and navigate into it.

## Step 1: Generate `index.html`
Run the following command to generate `index.html`:
```bash
node nostr-client.mjs
```

## Step 2: Configure and Deploy `@nsyte/cli`
Run the following command to deploy your site:
```bash
deno run -A jsr:@nsyte/cli upload ./
```
Follow the interactive prompts to:
1. Manage your Nostr key (generate a new private key or use an existing one).
2. Enter your website or project name and description.
3. Configure Nostr relay URLs and Blossom server URLs.
4. Choose whether to publish profile information, relay list, and server list to Nostr.

## Example Configuration
- User: `cef7e35e8eba726ef5189a6703b975b304ab7fa6dd16d3f381464c2e3c33f6cc`
- Relays: `wss://relay.nostr.band`, `wss://nos.lol`, `wss://relay.damus.io`
- Servers: `https://cdn.hzrd149.com/`, `https://cdn.sovbit.host/`

## Deployment
After configuration, `@nsyte/cli` will upload your files to the specified servers and publish the necessary information to Nostr relays.

## Accessing Your Nsite
Your nsite will be available on any nsite gateway, for example:
```
https://npub1emm7xh5whfexaagcnfns8wt4kvz2klaxm5td8uupgexzu0pn7mxqqc9l2l.nsite.lol/
```

## Design Documents
1. [High Level Design Document (HLDD)](HLDD.md)
2. [Low Level Design Document (LLDD)](LLDD.md)

## Implementation Status
- [x] Set up the project structure.
- [x] Implement Nostr relay connection and note fetching.
- [x] Implement PoW calculation for notes.
- [x] Implement sorting of notes by PoW.
- [x] Create the UI to display sorted notes with their PoW.
- [x] Build the project into a deployable format.
- [x] Deploy the client to Nostr and Blossom servers using `@nsyte/cli`.

## Pending Tasks
See the task checklist in [LLDD.md](LLDD.md).