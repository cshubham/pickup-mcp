# Romantic Shubham MCP Server 💝

A personalized Model Context Protocol (MCP) server that provides romantic and fun pickup lines with various moods and types. Perfect for adding some charm to your Cursor AI conversations!

## Features

- 🎭 **Multiple Types**: Flirt, Casual, Smooth, Wholesome
- 🎨 **Various Moods**: Romantic, Playful, Confident, Nerdy, Funny, Sweet, Clever, Friendly, and Genuine
- 🎲 **Random Selection**: Get a different pickup line each time
- 💬 **Personalized Greetings**: Every response starts with "Hello romantic Shubham!"
- 📚 **Extensive Database**: Over 100 curated pickup lines

## Available Options

### Types and Moods

- **FLIRT**: romantic, playful, confident, nerdy
- **CASUAL**: friendly, funny, sweet, clever
- **SMOOTH**: romantic, confident
- **WHOLESOME**: sweet, genuine

## Installation

1. Clone or navigate to this repository:
```bash
cd /Users/sc432t/Documents/TestProjects/hello-mcp
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Make the script executable:
```bash
chmod +x index.js
```

## Usage

### Standalone Testing

You can test the server directly:
```bash
node index.js
```

### Integration with Cursor

#### Step 1: Locate Cursor's MCP Configuration File

The MCP configuration file is located at:
- **macOS**: `~/Library/Application Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- **Windows**: `%APPDATA%\Cursor\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
- **Linux**: `~/.config/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

#### Step 2: Add the MCP Server Configuration

Open the `cline_mcp_settings.json` file and add your server configuration:

```json
{
  "mcpServers": {
    "romantic-shubham": {
      "command": "node",
      "args": [
        "/Users/sc432t/Documents/TestProjects/hello-mcp/index.js"
      ],
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

**Important**: Replace `/Users/sc432t/Documents/TestProjects/hello-mcp/index.js` with the absolute path to your `index.js` file.

#### Step 3: Restart Cursor

After saving the configuration file:
1. Completely quit Cursor (not just close the window)
2. Reopen Cursor
3. The MCP server should now be available

#### Step 4: Verify Integration

In Cursor, you can now use the MCP tools:

1. Open the Cursor AI chat
2. Try these commands:
   - "Can you use the romantic-shubham MCP to get me a pickup line?"
   - "Get me a flirt/playful pickup line"
   - "Give me a wholesome/sweet pickup line"
   - "Show me what moods are available in the romantic-shubham MCP"

## MCP Tools Available

### 1. `get_pickup_line`
Get a personalized pickup line with optional parameters.

**Parameters:**
- `type` (optional): "flirt", "casual", "smooth", or "wholesome" (default: "flirt")
- `mood` (optional): varies by type (default: "romantic")

**Example:**
```
Get me a casual/funny pickup line
```

### 2. `list_available_moods`
List all available types and moods.

**Example:**
```
Show me all available pickup line moods
```

## Example Interactions

**User**: "Hello! Can you get me a pickup line?"

**Response**: 
```
Hello romantic Shubham! 💝

Are you a magician? Because whenever I look at you, everyone else disappears.
```

**User**: "Give me a nerdy flirt pickup line"

**Response**:
```
Hello romantic Shubham! 💝

Are you made of copper and tellurium? Because you're Cu-Te.
```

**User**: "Get me something wholesome and sweet"

**Response**:
```
Hello romantic Shubham! 💝

You have the kind of smile that could brighten anyone's day.
```

## Troubleshooting

### MCP Server Not Showing Up in Cursor

1. **Check the configuration path**: Make sure the path to `index.js` in your config is absolute and correct
2. **Verify JSON syntax**: Ensure your `cline_mcp_settings.json` is valid JSON
3. **Check permissions**: Make sure the `index.js` file is executable (`chmod +x index.js`)
4. **Restart Cursor completely**: Quit the application entirely and reopen it
5. **Check Cursor logs**: Look for MCP-related errors in Cursor's developer console

### Node Version Issues

This MCP server requires Node.js version 14 or higher (for ES modules support). Check your version:
```bash
node --version
```

### Testing the Server Manually

You can test if the server starts correctly:
```bash
node index.js
```

You should see: `Romantic Shubham MCP Server running on stdio`

## Customization

Want to add your own pickup lines? Edit the `pickup-lines.json` file:

```json
{
  "your-type": {
    "your-mood": [
      "Your custom pickup line here",
      "Another custom pickup line"
    ]
  }
}
```

## Contributing

Feel free to add more pickup lines or create new mood categories! The more variety, the better!

## License

ISC

## Author

Created with ❤️ by Shubham

---

Enjoy spreading the romance! 💝✨

