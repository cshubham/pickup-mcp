# 🎯 Integration Steps for Cursor

Follow these exact steps to integrate your Romantic Shubham MCP server with Cursor.

---

## METHOD 1: Automated Setup (Easiest) ⚡

### Step 1: Run the Setup Script

Open Terminal and run:

```bash
cd /Users/sc432t/Documents/TestProjects/hello-mcp
./setup-cursor.sh
```

Follow the prompts. The script will:
- ✅ Verify all files are in place
- ✅ Check Node.js is installed
- ✅ Create/update the Cursor configuration
- ✅ Guide you through any conflicts

### Step 2: Restart Cursor

**IMPORTANT:** You must completely quit Cursor!

1. Press `Cmd + Q` (or Cursor → Quit Cursor)
2. Wait 2-3 seconds
3. Reopen Cursor from Applications or Spotlight

### Step 3: Test It!

In Cursor's AI chat, type:

```
Can you use the romantic-shubham MCP to get me a pickup line?
```

**Expected Response:**
```
Hello romantic Shubham! 💝

[A romantic pickup line will appear here]
```

✅ **Done!** If you see this, your MCP is working!

---

## METHOD 2: Manual Setup (More Control) 📝

### Step 1: Find Your Cursor Config Directory

On macOS (your system), the file is at:
```
~/Library/Application Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json
```

To open it in Terminal:
```bash
open ~/Library/Application\ Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/
```

### Step 2: Edit the Config File

Open `cline_mcp_settings.json` in a text editor.

**If the file doesn't exist or is empty**, create it with this content:

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

**If the file already has content**, add just the romantic-shubham section:

```json
{
  "mcpServers": {
    "existing-server-1": {
      ...existing config...
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

**Important:** Make sure:
- The JSON is valid (no trailing commas, matching braces)
- The path `/Users/sc432t/Documents/TestProjects/hello-mcp/index.js` is correct
- You save the file after editing

### Step 3: Restart Cursor

Same as Method 1 - **completely quit and reopen Cursor**.

### Step 4: Test It!

Same test as Method 1 above.

---

## Verification Checklist ✓

Before testing in Cursor, make sure:

- [ ] You ran `node test-server.js` successfully
- [ ] The config file exists and has valid JSON
- [ ] The path to `index.js` is absolute and correct
- [ ] `index.js` is executable (`ls -la index.js` shows `-rwxr-xr-x`)
- [ ] You completely quit Cursor (not just closed windows)
- [ ] You reopened Cursor and waited 5-10 seconds

---

## Testing Commands

Once integrated, try these in Cursor's AI chat:

### Test 1: Basic Pickup Line
```
Hello! Can you use romantic-shubham to get me a pickup line?
```

### Test 2: Specific Type/Mood
```
Get me a casual/funny pickup line from romantic-shubham
```

### Test 3: List Options
```
Use romantic-shubham to list all available moods
```

### Test 4: Different Combinations
```
Give me a flirt/nerdy pickup line
```

```
Show me a wholesome/sweet pickup line
```

```
Get me a smooth/confident pickup line
```

---

## Expected Behavior

Every response should start with:
```
Hello romantic Shubham! 💝
```

Followed by a pickup line from the requested type/mood.

**If no type/mood is specified**, defaults to: `flirt/romantic`

---

## Troubleshooting

### ❌ "MCP server not found"

**Solution:**
1. Check the config file path is correct
2. Verify JSON syntax is valid
3. Make sure you completely quit and restarted Cursor
4. Check Terminal for Node path: `which node`

### ❌ "Command failed" or "Server error"

**Solution:**
1. Test locally first: `node test-server.js`
2. Check Node.js version: `node --version` (need v14+)
3. Reinstall dependencies: `npm install`
4. Check file permissions: `chmod +x index.js`

### ❌ No response or timeout

**Solution:**
1. Check Cursor's developer tools (Help → Toggle Developer Tools)
2. Look for errors in the Console tab
3. Try disabling/re-enabling the MCP server in config
4. Restart Cursor again

### ❌ "Cannot find module"

**Solution:**
1. Make sure you're in the correct directory
2. Run `npm install` to install dependencies
3. Check that `pickup-lines.json` exists
4. Verify the path in the config is absolute

---

## Quick Command Reference

```bash
# Test the server
cd /Users/sc432t/Documents/TestProjects/hello-mcp
node test-server.js

# Run automated setup
./setup-cursor.sh

# Open config directory
open ~/Library/Application\ Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/

# Check Node version
node --version

# Reinstall dependencies
npm install

# Make files executable
chmod +x index.js setup-cursor.sh test-server.js
```

---

## What Happens Behind the Scenes

When Cursor starts:
1. Reads `cline_mcp_settings.json`
2. Launches `node index.js` as a subprocess
3. Communicates via stdio (standard input/output)
4. Sends tool requests when you ask for pickup lines
5. Receives JSON responses with the greeting + pickup line

---

## Success! 🎉

Once you see this response in Cursor:

```
Hello romantic Shubham! 💝

Are you a magician? Because whenever I look at you, everyone else disappears.
```

Your MCP server is fully integrated and working!

---

## Next Steps

1. ✅ Try different types and moods
2. ✅ Customize pickup lines in `pickup-lines.json`
3. ✅ Share with friends!
4. ✅ Star the repo if you push to GitHub

Happy flirting! 💝✨

---

**Need More Help?**
- Quick guide: `QUICK_START.md`
- Full docs: `README.md`
- Setup details: `CURSOR_SETUP.md`
- Project summary: `PROJECT_SUMMARY.md`

