# How to Run the Project

This project is built using a modern React frontend with Vite.

## Step 1: Ensure Node.js & NPM are loaded
If you saw an error like `zsh: command not found: npm`, it means your terminal isn't loading Node.js. 
Since you are on macOS and likely using `nvm` (Node Version Manager), you need to initialize it in your terminal session.

Run this command to load `nvm` and use the latest Node version:
```bash
source ~/.nvm/nvm.sh && nvm use node
```

## Step 2: Navigate to the frontend directory
The React application lives inside the `frontend` folder.
```bash
cd frontend
```

## Step 3: Install Dependencies (if not already done)
If this is your first time setting up the project on this machine, you'll need to install the NPM packages.
```bash
npm install
```

## Step 4: Start the Development Server
Run the Vite development server:
```bash
npm run dev
```

## Step 5: View the Site
Open your browser and navigate to the address shown in the terminal, typically:
[http://localhost:5173/](http://localhost:5173/)







source ~/.nvm/nvm.sh && nvm use node
cd frontend
npm run dev
