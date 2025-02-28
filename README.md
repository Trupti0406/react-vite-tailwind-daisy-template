# Setting Up a React Project with Vite, Tailwind CSS 4, and DaisyUI

## Introduction

With the deprecation of Create React App (CRA), the modern way to set up a React project without wanting any framework involved is by using Vite. This guide will walk you through setting up a React project with [Vite](https://vitejs.dev/), [Tailwind CSS 4](https://tailwindcss.com/docs/installation/using-vite), and [DaisyUI](https://daisyui.com/), making your development process faster and more efficient.

## 1. Create a React App with Vite

First, navigate to the folder where you want to create your project and run the following command:

```bash
npm create vite@latest my-app -- --template react
```

Replace `my-app` with your preferred project name.

Press Y when prompted to proceed.

Now, navigate into your project directory and install the necessary dependencies:

```bash
cd my-app
npm install
```

Start the development server:

```bash
npm run dev
```

Your React app should now be running locally.

## 2. Install and Configure Tailwind CSS 4

[Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) provides a utility-first approach to styling. Follow these steps to install and configure it in your Vite project:

### Step 1: Install Tailwind CSS

Run the following command inside your project directory:

```bash
npm install tailwindcss @tailwindcss/vite
```

### Step 2: Configure Vite

Open `vite.config.ts` or `vite.config.js` and add Tailwind CSS as a plugin:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; //THIS LINE

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), //THIS LINE
  ],
});
```

### Step 3: Import Tailwind into Your CSS File

Open `src/index.css` and import Tailwind CSS at the top:

```css
@import "tailwindcss";
```

If you want a clean project, remove all default styles from `index.css` and `App.css`

### Step 4: Verify Tailwind Installation

Modify `App.jsx` To check if Tailwind is working:

```jsx
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-red-500">
        React + Tailwind CSS 4
      </h1>
    </>
  );
}

export default App;
```

Run the project again:

```bash
npm run dev
```

If the text appears styled as expected, Tailwind is successfully installed.

## 3. Install DaisyUI (Optional as per need)

[DaisyUI](https://daisyui.com/) is a UI component library built on top of Tailwind CSS. It simplifies styling and provides pre-designed components.

### Step 1: Install DaisyUI

Run the following command:

```bash
npm i -D daisyui@beta
```

### Step 2: Configure DaisyUI in Tailwind

Add DaisyUI to your `index.css` file:

```css
@import "tailwindcss";
@plugin "daisyui";
```

### Step 3: Restart and Test DaisyUI

Stop the server (Ctrl + C) and restart it:

```bash
npm run dev
```

### Step 4: Use a DaisyUI Component

Modify `App.jsx` to include a DaisyUI chat bubble:

```jsx
function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-red-500">
        React + Tailwind CSS 4 + Daisy UI
      </h1>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </>
  );
}

export default App;
```

Save the file and check your browser. If you see the styled chat bubble, DaisyUI is working correctly!

This is how your app will look running in localhost with Tailwind CSS and Daisy UI installed:

![Screenshot of app with Tailwind CSS and DaisyUI](/src/Screenshot.png)

----

## If you want to skip the manual setup, you can simply clone the repo and run `npm install` and `npm run dev`.

### Don't forget to star the repo! ⭐
