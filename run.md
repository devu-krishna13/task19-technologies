# How to Run & Build the Project

This project is built using a modern React frontend with Vite.

## Step 1: Ensure Node.js & NPM are loaded
If you see an error like `zsh: command not found: npm`, it means your terminal isn't loading Node.js. 
Since you are on macOS and using `nvm` (Node Version Manager), you MUST run this command in your terminal first before running any `npm` commands:
```bash
source ~/.nvm/nvm.sh && nvm use node
```

## Step 2: Navigate to the frontend directory
The React application lives inside the `frontend` folder.
```bash
cd frontend
```

## Step 3: Install Dependencies (if not already done)
```bash
npm install
```

## How to run locally (Development)
Run the Vite development server:
```bash
npm run dev
```

## How to build for Hostinger (Production)
When you are ready to upload to Hostinger, you must compile the code:
```bash
npm run build
```
Once this completes, Vite creates a new folder called **`dist`** (`frontend/dist`). 
Upload **ONLY the contents of the `dist` folder** into your Hostinger `public_html` directory (not the source code files). This will automatically include the `.htaccess` file needed to fix the 403 errors.







source ~/.nvm/nvm.sh && nvm use node
cd frontend
npm run dev
