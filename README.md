# Nsite Setup and Deployment Guide

## Overview
This guide provides step-by-step instructions on setting up and deploying an nsite using `@nsyte/cli`.

## Prerequisites
1. Install Deno on your system.
2. Create a new directory for your project and navigate into it.

## Step 1: Initialize `@nsyte/cli`
Run the following command to deploy your site:
```
deno run -A jsr:@nsyte/cli upload ./
```

## Step 2: Configure `@nsyte/cli`
Follow the interactive prompts to:
1. Manage your Nostr key (generate a new private key or use an existing one).
2. Enter your website or project name and description.
3. Configure Nostr relay URLs and Blossom server URLs.
4. Choose whether to publish profile information, relay list, and server list to Nostr.

## Example Configuration
- User: `2d9200863d79b7d4c7ea1985e670d415d2d4850f888066a7bf24b9a8f6781aa2`
- Relays: `wss://orangesync.tech`, `wss://nostr.mom/`, `wss://relay.wikifreedia.xyz/`
- Servers: `https://cdn.hzrd149.com/`, `https://cdn.sovbit.host/`

## Deployment
After configuration, `@nsyte/cli` will upload your files to the specified servers and publish the necessary information to Nostr relays.

## Accessing Your Nsite
Your nsite will be available on any nsite gateway, for example:
```
https://npub19kfqpp3a0xmaf3l2rxz7vux5zhfdfpg03zqxdfalyju63ancr23q05cvh0.nsite.lol/
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