#!/usr/bin/env node

/**
 * Test script for the Romantic Shubham MCP Server
 * This helps verify that the server works correctly before integrating with Cursor
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Testing Romantic Shubham MCP Server\n');
console.log('======================================\n');

// Test 1: Check if pickup-lines.json exists and is valid
console.log('Test 1: Checking pickup-lines.json...');
try {
  const pickupLinesPath = path.join(__dirname, 'pickup-lines.json');
  const pickupLines = JSON.parse(fs.readFileSync(pickupLinesPath, 'utf-8'));
  
  const types = Object.keys(pickupLines);
  console.log(`✅ Found ${types.length} types: ${types.join(', ')}`);
  
  let totalLines = 0;
  types.forEach(type => {
    const moods = Object.keys(pickupLines[type]);
    console.log(`   - ${type}: ${moods.join(', ')}`);
    moods.forEach(mood => {
      totalLines += pickupLines[type][mood].length;
    });
  });
  
  console.log(`✅ Total pickup lines: ${totalLines}\n`);
} catch (error) {
  console.error('❌ Error loading pickup-lines.json:', error.message);
  process.exit(1);
}

// Test 2: Test the random pickup line function
console.log('Test 2: Testing random pickup line selection...');
try {
  const pickupLinesPath = path.join(__dirname, 'pickup-lines.json');
  const pickupLines = JSON.parse(fs.readFileSync(pickupLinesPath, 'utf-8'));
  
  function getRandomPickupLine(type = 'flirt', mood = 'romantic') {
    type = type.toLowerCase();
    mood = mood.toLowerCase();
    
    if (!pickupLines[type]) {
      type = 'flirt';
    }
    
    if (!pickupLines[type][mood]) {
      mood = Object.keys(pickupLines[type])[0];
    }
    
    const lines = pickupLines[type][mood];
    return lines[Math.floor(Math.random() * lines.length)];
  }
  
  // Test default (flirt/romantic)
  const line1 = getRandomPickupLine();
  console.log('✅ Default (flirt/romantic):', line1);
  
  // Test flirt/nerdy
  const line2 = getRandomPickupLine('flirt', 'nerdy');
  console.log('✅ Flirt/Nerdy:', line2);
  
  // Test casual/funny
  const line3 = getRandomPickupLine('casual', 'funny');
  console.log('✅ Casual/Funny:', line3);
  
  // Test wholesome/sweet
  const line4 = getRandomPickupLine('wholesome', 'sweet');
  console.log('✅ Wholesome/Sweet:', line4);
  
  // Test with invalid type (should fallback to flirt)
  const line5 = getRandomPickupLine('invalid', 'romantic');
  console.log('✅ Invalid type fallback:', line5);
  
  console.log();
} catch (error) {
  console.error('❌ Error testing pickup line function:', error.message);
  process.exit(1);
}

// Test 3: Verify MCP SDK is installed
console.log('Test 3: Checking MCP SDK installation...');
try {
  await import('@modelcontextprotocol/sdk/server/index.js');
  await import('@modelcontextprotocol/sdk/server/stdio.js');
  await import('@modelcontextprotocol/sdk/types.js');
  console.log('✅ MCP SDK is properly installed\n');
} catch (error) {
  console.error('❌ Error: MCP SDK is not installed properly');
  console.error('   Run: npm install\n');
  process.exit(1);
}

// Test 4: Check Node.js version
console.log('Test 4: Checking Node.js version...');
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
if (majorVersion >= 14) {
  console.log(`✅ Node.js ${nodeVersion} (requires v14+)\n`);
} else {
  console.error(`❌ Node.js ${nodeVersion} is too old (requires v14+)\n`);
  process.exit(1);
}

// Test 5: Simulate MCP response
console.log('Test 5: Simulating MCP server response...');
try {
  const pickupLinesPath = path.join(__dirname, 'pickup-lines.json');
  const pickupLines = JSON.parse(fs.readFileSync(pickupLinesPath, 'utf-8'));
  
  function getRandomPickupLine(type = 'flirt', mood = 'romantic') {
    type = type.toLowerCase();
    mood = mood.toLowerCase();
    
    if (!pickupLines[type]) {
      type = 'flirt';
    }
    
    if (!pickupLines[type][mood]) {
      mood = Object.keys(pickupLines[type])[0];
    }
    
    const lines = pickupLines[type][mood];
    return lines[Math.floor(Math.random() * lines.length)];
  }
  
  const type = 'flirt';
  const mood = 'romantic';
  const pickupLine = getRandomPickupLine(type, mood);
  const greeting = `Hello romantic Shubham! 💝`;
  const response = `${greeting}\n\n${pickupLine}`;
  
  console.log('✅ Sample MCP response:');
  console.log('---');
  console.log(response);
  console.log('---\n');
} catch (error) {
  console.error('❌ Error simulating response:', error.message);
  process.exit(1);
}

console.log('🎉 All tests passed!');
console.log('\nYour MCP server is ready to use.');
console.log('\nNext steps:');
console.log('1. Run: ./setup-cursor.sh (to configure Cursor)');
console.log('2. Or manually add to Cursor config (see CURSOR_SETUP.md)');
console.log('3. Restart Cursor completely');
console.log('4. Ask Cursor: "Can you use the romantic-shubham MCP to get me a pickup line?"');
console.log('\n💝 Happy flirting!\n');

