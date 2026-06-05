# GitHub Deployment Guide for SANA Softs

## 📋 Prerequisites

Before pushing to GitHub, make sure you have:

1. **Git installed** - [Download Git](https://git-scm.com)
2. **GitHub account** - [Create one](https://github.com/signup)
3. **Node.js and npm** - [Download Node.js](https://nodejs.org)

## 🚀 Quick Start

### 1. Local Development

```bash
# Navigate to project directory
cd c:\Users\Dell\SANA_Softs

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

### 2. Create a GitHub Repository

#### Option A: Using GitHub Web Interface

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon in the top right → **New repository**
3. Name it: `sana-softs` (or your preferred name)
4. Add description: "Professional software company website"
5. Choose **Public** or **Private**
6. **Do NOT** initialize with README (we have one)
7. Click **Create repository**

#### Option B: Using GitHub CLI

```bash
gh repo create sana-softs --public --source=. --remote=origin --push
```

### 3. Push to GitHub

```bash
cd c:\Users\Dell\SANA_Softs

# Add remote (if you created empty repo)
git remote add origin https://github.com/YOUR_USERNAME/sana-softs.git

# Rename branch to main (optional but recommended)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### 4. Verify Deployment

Visit: `https://github.com/YOUR_USERNAME/sana-softs`

You should see:
- ✅ All files and folders
- ✅ Git history
- ✅ README.md displayed
- ✅ .gitignore configured

## 🌐 Deploy to Cloudflare Pages

### Step 1: Connect GitHub to Cloudflare

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Click **Create a project** → **Connect to Git**
3. Select **GitHub**
4. Authorize Cloudflare to access your GitHub account
5. Select your `sana-softs` repository

### Step 2: Configure Build Settings

When Cloudflare detects your project:

- **Project name**: `sana-softs` (or your choice)
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables**: (leave blank for now)

> Note: the app now uses `HashRouter` for client-side routing, so Cloudflare Pages and GitHub Pages will both preserve navigation without server-side route fallback.

### Step 3: Deploy

Click **Save and Deploy**

Cloudflare will:
1. Install dependencies
2. Run the build command
3. Deploy to their CDN
4. Provide you with a live URL

### Step 4: Custom Domain (Optional)

In Cloudflare Pages → Your Project → Custom domains:
1. Connect a domain you own
2. Update DNS records
3. Enable HTTPS (automatic)

Your live URL will be: `https://your-domain.com`

## 📝 Making Updates

After you've pushed to GitHub:

```bash
# Make changes to your code
# Edit files as needed

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Cloudflare will automatically redeploy!
```

## 🔄 Continuous Deployment (CI/CD)

Cloudflare Pages automatically:
- Deploys on every push to `main`
- Builds your app
- Handles SSL/HTTPS
- Provides CDN distribution

No additional configuration needed!

## 📊 Project Structure in GitHub

```
sana-softs/
├── src/                    # Source code
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                 # Static assets (if added)
├── index.html             # HTML entry point
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
└── .git/                  # Git repository (hidden)
```

## 🆘 Troubleshooting

### Push Rejected: "The remote repository has errors"

```bash
# Check remote URL
git remote -v

# If wrong URL, update it
git remote set-url origin https://github.com/YOUR_USERNAME/sana-softs.git

# Try pushing again
git push -u origin main
```

### Cloudflare Build Fails

1. Check build logs in Cloudflare Pages dashboard
2. Ensure `npm run build` works locally: `npm run build`
3. Verify all dependencies in `package.json`
4. Check for environment variables needed

### Website Shows Blank Page

1. Clear browser cache
2. Check browser console for errors (F12)
3. Verify `dist/` folder was generated
4. Check Cloudflare build logs

## 📚 Useful Git Commands

```bash
# Check status
git status

# View commit history
git log

# View branches
git branch -a

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature
```

## 🎯 Next Steps

After deployment:

1. ✅ Test all pages and links
2. ✅ Test mobile responsiveness
3. ✅ Update social media links with live URL
4. ✅ Set up analytics (Google Analytics, etc.)
5. ✅ Monitor performance
6. ✅ Plan future features

## 📱 Update Information

Before going live, update these links with your actual information:

- **Contact email**: `contact@sanasofts.com`
- **Phone number**: `+1 (XXX) XXX-XXXX`
- **Telegram**: `https://t.me/salis_amin_lone`
- **Instagram**: `https://instagram.com/salis.amin.lone`
- **GitHub**: Your personal GitHub URL
- **Portfolio**: `https://yourportfolio.link`

## 🔐 Environment Variables (If Needed)

Create `.env` file in project root (don't commit this file):

```
VITE_API_URL=https://api.sanasofts.com
VITE_CONTACT_EMAIL=contact@sanasofts.com
```

Access in React:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📞 Need Help?

- GitHub Issues: Create issue in your repository
- GitHub Discussions: Use repository discussions
- Cloudflare Support: https://support.cloudflare.com
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Tailwind Docs: https://tailwindcss.com

## ✨ You're All Set!

Your SANA Softs website is now:
- ✅ Version controlled with Git
- ✅ Hosted on GitHub
- ✅ Deployed on Cloudflare Pages
- ✅ Live on the internet
- ✅ Ready for continuous updates

Happy coding! 🚀
