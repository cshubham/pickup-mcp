# Setting Up Romantic Shubham MCP in Cursor 🎯

Follow these steps to integrate your personalized pickup line MCP server into Cursor.

## Quick Setup Steps

### 1. Find Your Cursor MCP Settings File

The file location depends on your operating system:

**macOS** (Your system):
```
~/Library/Application Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json
```

**Windows**:
```
%APPDATA%\Cursor\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json
```

**Linux**:
```
~/.config/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json
```

### 2. Open the Settings File

On macOS, you can open it with:
```bash
open ~/Library/Application\ Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json
```

Or use any text editor:
```bash
nano ~/Library/Application\ Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json
```

### 3. Add Your MCP Server Configuration

If the file doesn't exist or is empty, create it with this content:

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

If the file already has other MCP servers, just add your server to the `mcpServers` object:

```json
{
  "mcpServers": {
    "existing-server": {
      "command": "...",
      "args": ["..."]
    },
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

### 4. Verify the Path

Make sure the path `/Users/sc432t/Documents/TestProjects/hello-mcp/index.js` is correct. This should be the absolute path to your `index.js` file.

### 5. Restart Cursor

**Important**: You must completely quit Cursor and reopen it:

1. **Quit Cursor** (Cmd+Q on Mac, or File → Quit)
2. **Reopen Cursor**
3. Wait a few seconds for the MCP server to initialize

### 6. Test Your MCP Server

Open Cursor's AI chat and try these commands:

#### Test 1: Basic Pickup Line
```
Can you use the romantic-shubham MCP to get me a pickup line?
```

Expected response:
```
Hello romantic Shubham! 💝

[A romantic pickup line will appear here]
```

#### Test 2: Specific Type and Mood
```
Get me a casual/funny pickup line using the romantic-shubham MCP
```

#### Test 3: List Available Options
```
Use the romantic-shubham MCP to list all available moods
```

#### Test 4: Different Combinations
```
Give me a wholesome/sweet pickup line
```

```
Get me a flirt/nerdy pickup line
```

```
Show me a smooth/confident pickup line
```

## Troubleshooting

### Issue: MCP Server Not Found

**Solution 1**: Check the file path
```bash
ls -la /Users/sc432t/Documents/TestProjects/hello-mcp/index.js
```
This should show the file. If not, update the path in your config.

**Solution 2**: Verify the file is executable
```bash
chmod +x /Users/sc432t/Documents/TestProjects/hello-mcp/index.js
```

**Solution 3**: Test the server manually
```bash
cd /Users/sc432t/Documents/TestProjects/hello-mcp
node index.js
```
You should see: "Romantic Shubham MCP Server running on stdio"
Press Ctrl+C to stop it.

### Issue: JSON Configuration Error

Make sure your JSON is valid. Common mistakes:
- Missing commas between objects
- Trailing commas after the last item
- Unmatched brackets or braces

Use a JSON validator online or run:
```bash
python3 -m json.tool ~/Library/Application\ Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json
```

### Issue: Server Starts But No Response

1. Check Cursor's developer console (Help → Toggle Developer Tools)
2. Look for any error messages related to MCP
3. Make sure Node.js is installed and accessible:
```bash
which node
node --version
```

### Issue: "Command Not Found"

If you see errors about Node not being found, you may need to specify the full path to Node:

```json
{
  "mcpServers": {
    "romantic-shubham": {
      "command": "/usr/local/bin/node",
      "args": [
        "/Users/sc432t/Documents/TestProjects/hello-mcp/index.js"
      ],
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

Find your Node path with:
```bash
which node
```

## Alternative: Global Installation

If you want to use the MCP server from anywhere, you can install it globally:

```bash
cd /Users/sc432t/Documents/TestProjects/hello-mcp
npm link
```

Then update your Cursor config to:
```json
{
  "mcpServers": {
    "romantic-shubham": {
      "command": "romantic-shubham-mcp",
      "args": [],
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

## Verification Checklist

- [ ] Settings file exists and contains valid JSON
- [ ] Path to index.js is absolute and correct
- [ ] index.js file is executable (chmod +x)
- [ ] Node.js is installed and working (node --version)
- [ ] Cursor has been completely quit and reopened
- [ ] No JSON syntax errors in configuration
- [ ] Tested with a simple command in Cursor

## Success!

Once everything is working, you can:

- Ask for pickup lines whenever you need them
- Specify different types: flirt, casual, smooth, wholesome
- Choose different moods within each type
- Get a personalized "Hello romantic Shubham!" greeting every time

Enjoy your personalized MCP server! 💝✨

---

**Need Help?**

If you're still having issues:
1. Check the main README.md for more information
2. Verify all file paths are correct
3. Make sure you have the latest version of Cursor
4. Check that you have Node.js 14+ installed

