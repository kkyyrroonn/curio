# Curio

Curio is a simple activity generator for when you don't know what to do with yourself. Filter by location and budget, and get a random activity suggestion with a single click!

## Features

- 🎲 Random activity generation from 300+ activities
- 🏠 Filter by indoor or outdoor
- 💸 Filter by budget (Free, Low, High)
- 🔄 "Try Another" button to cycle through suggestions

## Tech Stack

Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies.

## Getting Started

Since the app loads `activities.json` via `fetch`, you'll need to run it through a local server rather than opening the HTML file directly.

**Option 1 — VS Code Live Server**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Open the project folder in VS Code
3. Click **Go Live** in the bottom status bar

**Option 2 — Terminal**

You can use ```cmd```, then navigate to the project directory then run:
```bash
npx serve .
```
You can then open the URL it gives you in your browser and start exploring Curio!

## File Structure

```
curio/
├── index.html
├── style.css
├── app.js
└── activities.json
```
