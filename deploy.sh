#!/bin/bash

# AmitabhC Deployment Script
# This script helps deploy AmitabhC to GitHub Pages

echo "🎬 AmitabhC Deployment Script 🎬"
echo "================================"

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed. Please install git first.${NC}"
    exit 1
fi

# Function to print success
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Function to print error
error() {
    echo -e "${RED}❌ $1${NC}"
}

# Function to print info
info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Step 1: Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    info "Initializing git repository..."
    git init
    success "Git repository initialized"
else
    info "Git repository already exists"
fi

# Step 2: Create necessary files
info "Creating project files..."

# Create .gitignore
cat > .gitignore << EOF
# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log

# Dependencies
node_modules/

# Build files
dist/
build/

# Local env files
.env
.env.local
EOF

# Create LICENSE file
cat > LICENSE << EOF
MIT License

Copyright (c) 2024 AmitabhC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF

# Rename main interpreter file to editor.html
if [ -f "amitabhc-interpreter.html" ]; then
    mv amitabhc-interpreter.html editor.html
    success "Renamed interpreter file to editor.html"
fi

# Rename landing page to index.html
if [ -f "amitabhc-landing.html" ]; then
    mv amitabhc-landing.html index.html
    success "Renamed landing page to index.html"
fi

success "Project files created"

# Step 3: Create examples directory
mkdir -p examples
info "Creating example programs..."

# Create example files
cat > examples/hello.amitabhc << EOF
LIGHTS
CAMERA
    BOLO "Naam hai Shahenshah!"
    BOLO "Welcome to AmitabhC!"
ACTION
EOF

cat > examples/factorial.amitabhc << EOF
LIGHTS
CAMERA
    NAAM factorial(n)
        AGAR n <= 1
            WAPAS 1
        NAHI TOH
            WAPAS n * factorial(n - 1)
        BAS
    PURA
    
    VIJAY num = 5
    VIJAY result = factorial(num)
    BOLO "Factorial of 5 is:"
    BOLO result
ACTION
EOF

success "Example programs created"

# Step 4: Add files to git
info "Adding files to git..."
git add .
git commit -m "Initial commit: AmitabhC - The Bollywood Programming Language 🎬"
success "Files committed to git"

# Step 5: GitHub repository setup
echo ""
echo "📦 GitHub Repository Setup"
echo "========================="
echo ""
echo "Please follow these steps:"
echo ""
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named 'amitabhc'"
echo "3. Don't initialize with README (we already have one)"
echo "4. After creating, copy the repository URL"
echo ""
read -p "Enter your GitHub repository URL (e.g., https://github.com/username/amitabhc.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    error "Repository URL cannot be empty"
    exit 1
fi

# Add remote origin
info "Adding remote origin..."
git remote add origin $REPO_URL || git remote set-url origin $REPO_URL
success "Remote origin set"

# Step 6: Push to GitHub
info "Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    success "Code pushed to GitHub successfully!"
else
    error "Failed to push to GitHub. Please check your credentials and try again."
    exit 1
fi

# Step 7: Enable GitHub Pages
echo ""
echo "🌐 Enable GitHub Pages"
echo "====================="
echo ""
echo "Almost done! Now enable GitHub Pages:"
echo ""
echo "1. Go to your repository: ${REPO_URL%.git}"
echo "2. Click on 'Settings' tab"
echo "3. Scroll down to 'Pages' section"
echo "4. Under 'Source', select 'Deploy from a branch'"
echo "5. Select 'main' branch and '/ (root)' folder"
echo "6. Click 'Save'"
echo ""
echo "Your site will be available at:"
echo "https://$(echo $REPO_URL | cut -d'/' -f4).github.io/amitabhc"
echo ""
echo "🎉 Deployment complete! 🎉"
echo ""
echo "Share your site and spread the joy of Bollywood programming!"
echo "Don't forget to star the repository! ⭐"
echo ""
echo '"Rishtey mein toh hum tumhare deployment script lagte hain!" 🎬'