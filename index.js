#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load pickup lines database
const pickupLinesPath = path.join(__dirname, 'pickup-lines.json');
const pickupLines = JSON.parse(fs.readFileSync(pickupLinesPath, 'utf-8'));

// Create MCP server
const server = new Server(
  {
    name: "romantic-shubham-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Helper function to get random pickup line
function getRandomPickupLine(type = 'flirt', mood = 'romantic') {
  // Normalize inputs to lowercase
  type = type.toLowerCase();
  mood = mood.toLowerCase();
  
  // Check if type exists, default to 'flirt'
  if (!pickupLines[type]) {
    type = 'flirt';
  }
  
  // Check if mood exists for the type, default to first available
  if (!pickupLines[type][mood]) {
    mood = Object.keys(pickupLines[type])[0];
  }
  
  // Get the array of pickup lines
  const lines = pickupLines[type][mood];
  
  // Return random line
  return lines[Math.floor(Math.random() * lines.length)];
}

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_pickup_line",
        description: "Get a personalized pickup line from Romantic Shubham. Returns a greeting followed by a pickup line based on mood and type.",
        inputSchema: {
          type: "object",
          properties: {
            type: {
              type: "string",
              description: "Type of pickup line: 'flirt', 'casual', 'smooth', or 'wholesome'. Default: 'flirt'",
              enum: ["flirt", "casual", "smooth", "wholesome"],
            },
            mood: {
              type: "string",
              description: "Mood/style of the pickup line. Options vary by type. For 'flirt': romantic, playful, confident, nerdy. For 'casual': friendly, funny, sweet, clever. For 'smooth': romantic, confident. For 'wholesome': sweet, genuine. Default: 'romantic'",
            },
            name: {
              type: "string",
              description: "The user's name for personalization. If provided, the greeting will use this name. Default: 'user'",
            },
          },
        },
      },
      {
        name: "list_available_moods",
        description: "List all available types and moods for pickup lines",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "get_pickup_line") {
    const type = args.type || 'flirt';
    const mood = args.mood || 'romantic';
    const userName = args.name || 'user';
    
    const pickupLine = getRandomPickupLine(type, mood);
    const greeting = `Hello Romantic ${userName}! 💝`;
    const response = `${greeting}\n\n${pickupLine}`;
    
    return {
      content: [
        {
          type: "text",
          text: response,
        },
      ],
    };
  } else if (name === "list_available_moods") {
    const availableOptions = Object.keys(pickupLines).map(type => {
      const moods = Object.keys(pickupLines[type]);
      return `**${type.toUpperCase()}**: ${moods.join(', ')}`;
    }).join('\n');
    
    const response = `Available pickup line types and moods:\n\n${availableOptions}\n\nExample usage: "Get me a flirt/playful pickup line" or "Give me a wholesome/sweet pickup line"`;
    
    return {
      content: [
        {
          type: "text",
          text: response,
        },
      ],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Romantic Shubham MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});

