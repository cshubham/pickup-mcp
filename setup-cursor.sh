#!/bin/bash

# Romantic Shubham MCP - Cursor Setup Script
# This script helps you set up the MCP server in Cursor

echo "🎯 Romantic Shubham MCP - Cursor Setup"
echo "======================================"
echo ""

# Get the absolute path to this script's directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
INDEX_PATH="$SCRIPT_DIR/index.js"

# Determine OS and set config path
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    CONFIG_DIR="$HOME/Library/Application Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings"
    CONFIG_FILE="$CONFIG_DIR/cline_mcp_settings.json"
    OS_NAME="macOS"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    CONFIG_DIR="$HOME/.config/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings"
    CONFIG_FILE="$CONFIG_DIR/cline_mcp_settings.json"
    OS_NAME="Linux"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows
    CONFIG_DIR="$APPDATA/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings"
    CONFIG_FILE="$CONFIG_DIR/cline_mcp_settings.json"
    OS_NAME="Windows"
else
    echo "❌ Unknown operating system: $OSTYPE"
    exit 1
fi

echo "📋 Detected OS: $OS_NAME"
echo "📁 Config directory: $CONFIG_DIR"
echo "📄 Config file: $CONFIG_FILE"
echo "🎯 MCP server path: $INDEX_PATH"
echo ""

# Check if index.js exists
if [ ! -f "$INDEX_PATH" ]; then
    echo "❌ Error: index.js not found at $INDEX_PATH"
    exit 1
fi

echo "✅ Found index.js"

# Make index.js executable
chmod +x "$INDEX_PATH"
echo "✅ Made index.js executable"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed"
    echo "   Please install Node.js from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo "✅ Node.js version: $NODE_VERSION"

# Create config directory if it doesn't exist
if [ ! -d "$CONFIG_DIR" ]; then
    echo "📁 Creating config directory..."
    mkdir -p "$CONFIG_DIR"
fi

# Prepare the MCP server configuration
MCP_CONFIG=$(cat <<EOF
{
  "mcpServers": {
    "romantic-shubham": {
      "command": "node",
      "args": [
        "$INDEX_PATH"
      ],
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
EOF
)

# Check if config file exists
if [ -f "$CONFIG_FILE" ]; then
    echo ""
    echo "⚠️  Config file already exists!"
    echo "   Path: $CONFIG_FILE"
    echo ""
    echo "Choose an option:"
    echo "1) Backup existing file and create new one"
    echo "2) Show the configuration to manually add"
    echo "3) Cancel"
    read -p "Enter choice [1-3]: " choice
    
    case $choice in
        1)
            # Backup existing file
            BACKUP_FILE="${CONFIG_FILE}.backup.$(date +%Y%m%d_%H%M%S)"
            cp "$CONFIG_FILE" "$BACKUP_FILE"
            echo "✅ Backed up existing config to: $BACKUP_FILE"
            echo "$MCP_CONFIG" > "$CONFIG_FILE"
            echo "✅ Created new config file"
            ;;
        2)
            echo ""
            echo "📋 Add this configuration to your existing file:"
            echo "   File: $CONFIG_FILE"
            echo ""
            echo "Add this to the 'mcpServers' object:"
            echo '---'
            cat <<EOF
    "romantic-shubham": {
      "command": "node",
      "args": [
        "$INDEX_PATH"
      ],
      "disabled": false,
      "alwaysAllow": []
    }
EOF
            echo '---'
            exit 0
            ;;
        3)
            echo "❌ Setup cancelled"
            exit 0
            ;;
        *)
            echo "❌ Invalid choice"
            exit 1
            ;;
    esac
else
    # Create new config file
    echo "$MCP_CONFIG" > "$CONFIG_FILE"
    echo "✅ Created config file at: $CONFIG_FILE"
fi

echo ""
echo "🎉 Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Completely quit Cursor (not just close the window)"
echo "2. Reopen Cursor"
echo "3. Try asking: 'Can you use the romantic-shubham MCP to get me a pickup line?'"
echo ""
echo "📚 For more information, see:"
echo "   - README.md (general documentation)"
echo "   - CURSOR_SETUP.md (detailed setup guide)"
echo ""
echo "Happy flirting! 💝"

