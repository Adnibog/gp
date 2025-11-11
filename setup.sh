#!/bin/bash

echo "🌟 Portfolio Website Setup Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Frontend dependency installation failed"
    exit 1
fi
echo "✅ Frontend dependencies installed"
echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd server
npm install
if [ $? -ne 0 ]; then
    echo "❌ Backend dependency installation failed"
    exit 1
fi
echo "✅ Backend dependencies installed"
echo ""

# Setup environment files
echo "⚙️  Setting up environment files..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created server/.env file"
    echo "⚠️  Please edit server/.env with your email credentials"
else
    echo "ℹ️  server/.env already exists"
fi

cd ..

if [ ! -f .env ]; then
    echo "REACT_APP_API_URL=http://localhost:5000" > .env
    echo "✅ Created frontend .env file"
else
    echo "ℹ️  Frontend .env already exists"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Edit server/.env with your Gmail credentials"
echo "2. Generate API key: ./generate-api-key.sh"
echo "3. Start backend: cd server && npm run dev"
echo "4. Start frontend: npm start (in new terminal)"
echo ""
echo "📚 For complete instructions, see README.md"
echo ""
echo "🚀 Happy coding!"
