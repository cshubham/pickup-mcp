# Quick Start Guide 🚀

Get your Romantic Shubham MCP server running in Cursor in 3 easy steps!

## Step 1: Run the Setup Script

```bash
cd /Users/sc432t/Documents/TestProjects/pickup-mcp
./setup-cursor.sh
```

This will automatically configure Cursor for you.

## Step 2: Restart Cursor

**Important:** Completely quit Cursor and reopen it:
- Press `Cmd + Q` (Mac) or close all windows and quit the application
- Reopen Cursor
- Wait a few seconds for initialization

## Step 3: Test It!

In Cursor's AI chat, type:

```
Can you use the romantic-shubham MCP to get me a pickup line?
```

You should see:
```
Hello Romantic user! 💝

[Your pickup line here]
```

## Example Commands

### Get a pickup line (default: flirt/romantic)
```
Get me a pickup line from romantic-shubham
```

### Get a specific type/mood
```
Get me a casual/funny pickup line
```

```
Give me a flirt/nerdy pickup line
```

```
Show me a wholesome/sweet pickup line
```

### List all available options
```
List all available moods from romantic-shubham
```

### Get a personalized pickup line with your name
```
Get me a pickup line for Shubham
```

```
Give me a romantic pickup line for Sarah
```

## Available Combinations

| Type | Moods |
|------|-------|
| **flirt** | romantic, playful, confident, nerdy |
| **casual** | friendly, funny, sweet, clever |
| **smooth** | romantic, confident |
| **wholesome** | sweet, genuine |

## Troubleshooting

### Not Working?

1. **Test the server:**
   ```bash
   cd /Users/sc432t/Documents/TestProjects/pickup-mcp
   node test-server.js
   ```

2. **Check Cursor config:**
   ```bash
   open ~/Library/Application\ Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json
   ```

3. **See detailed troubleshooting:**
   - Read `CURSOR_SETUP.md` for detailed setup instructions
   - Read `README.md` for full documentation

## What's Included

- 📚 **120 pickup lines** across 4 types and 10 moods
- 🎲 **Random selection** for variety
- 💝 **Personalized greeting** with customizable name support
- 🎯 **Easy customization** (edit `pickup-lines.json`)

---

For more details, see the main [README.md](README.md) or [CURSOR_SETUP.md](CURSOR_SETUP.md).

Happy flirting! 💝

