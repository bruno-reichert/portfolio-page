# 1. Navigate to your project folder
cd portfolio-page

# 2. Run npm install to generate the package-lock.json file locally
npm install

# 3. Step out back to the repository root directory
cd ..

# 4. Add the newly created package-lock.json to Git tracking
git add portfolio-page/package-lock.json

# 5. Commit and push the file to GitHub
git commit -m "chore: add package-lock.json to resolve deployment dependency check"
git push origin main