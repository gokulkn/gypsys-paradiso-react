# How to Run Your React Website

Since you are new to React, here is a step-by-step guide to getting your website running. React requires a tool called **Node.js** to build and run the code.

## Step 1: Install Node.js
1.  Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
2.  Download the **LTS (Long Term Support)** version for Windows.
3.  Run the installer. Keep clicking "Next" and accept the defaults.
4.  **Important**: Once installed, restart your computer (or at least close and reopen VS Code) to make sure the commands work.

## Step 2: Install Project Dependencies
1.  Open VS Code.
2.  Open the terminal (Ctrl + `).
3.  Make sure you are in the `React Website` folder. If not, type:
    ```powershell
    cd "React Website"
    ```
4.  Run this command to install the tools we need (like React, Vite, and Framer Motion):
    ```powershell
    npm install
    ```
    *You should see a progress bar. If it says "command not found", try restarting VS Code.*

## Step 3: Run the Website
1.  Once the installation finishes, run:
    ```powershell
    npm run dev
    ```
2.  You will see a link like `http://localhost:5173`.
3.  **Ctrl + Click** that link to open your new futuristic website in Chrome!

## Step 4: Hosting for Free (Later)
Once you are happy with the design running locally, we can deploy it for free using **Vercel** or **Netlify**.
1.  You will need a GitHub account.
2.  We will upload this code to GitHub.
3.  Vercel will automatically build and host it.

Let me know once you have installed Node.js!
