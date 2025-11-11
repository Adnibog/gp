#!/bin/bash

echo "🔐 API Key Generator for Portfolio Contact Form"
echo "==============================================="
echo ""

# Generate a secure random API key
API_KEY=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")

echo "✅ Generated secure API key:"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "$API_KEY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Setup Instructions:"
echo ""
echo "1️⃣  Backend (.env in server/ directory):"
echo "   API_SECRET_KEY=$API_KEY"
echo ""
echo "2️⃣  Frontend (.env in root directory):"
echo "   REACT_APP_API_KEY=$API_KEY"
echo ""
echo "3️⃣  When deploying backend to Heroku:"
echo "   heroku config:set API_SECRET_KEY=$API_KEY"
echo ""
echo "4️⃣  When deploying backend to Vercel:"
echo "   Add environment variable in Vercel dashboard:"
echo "   API_SECRET_KEY=$API_KEY"
echo ""
echo "5️⃣  When deploying backend to Railway:"
echo "   railway variables set API_SECRET_KEY=$API_KEY"
echo ""
echo "6️⃣  For GitHub Pages deployment:"
echo "   Create .env.production in root directory:"
echo "   REACT_APP_API_KEY=$API_KEY"
echo ""
echo "⚠️  IMPORTANT SECURITY NOTES:"
echo "   • Never commit the .env files to Git"
echo "   • Keep this key secret and secure"
echo "   • Rotate the key periodically (every 6-12 months)"
echo "   • If compromised, generate a new key immediately"
echo ""
echo "💾 Would you like to automatically create the .env files? (y/n)"
read -r CREATE_ENV

if [ "$CREATE_ENV" = "y" ] || [ "$CREATE_ENV" = "Y" ]; then
    # Create backend .env if it doesn't exist
    if [ ! -f server/.env ]; then
        cat > server/.env << EOF
# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Security
API_SECRET_KEY=$API_KEY

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
EOF
        echo "✅ Created server/.env"
    else
        echo "ℹ️  server/.env already exists. Please add manually:"
        echo "   API_SECRET_KEY=$API_KEY"
    fi
    
    # Create frontend .env if it doesn't exist
    if [ ! -f .env ]; then
        cat > .env << EOF
REACT_APP_API_URL=http://localhost:5000
REACT_APP_API_KEY=$API_KEY
EOF
        echo "✅ Created .env"
    else
        echo "ℹ️  .env already exists. Please add manually:"
        echo "   REACT_APP_API_KEY=$API_KEY"
    fi
    
    echo ""
    echo "🎉 Environment files created!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Edit server/.env and add your Gmail credentials"
    echo "2. Test locally: cd server && npm run dev"
    echo "3. In another terminal: npm start"
    echo "4. Visit http://localhost:3000 and test contact form"
    echo ""
else
    echo ""
    echo "👍 No problem! Copy the API key above and add it manually to your .env files."
    echo ""
fi

echo "📚 For complete setup guide, see README.md"
echo ""
echo "🚀 Happy coding!"
