---
name: shadcn-vite-init
description: Initialize a fresh Vite + React + TypeScript project with Shadcn UI. Sets up Tailwind v4, path aliases, and installs shadcn/ui base configuration. Use for new portfolio years or fresh starts.
allowed-tools: Bash, Read, Write, Glob
---

# Initialize Shadcn UI with Vite

Scaffold a new Vite + React + TypeScript + Shadcn UI project at root.

## When to Use
- Creating new annual portfolio version (2025, 2026, etc.)
- Fresh start after archiving previous version
- Migrating from Next.js to Vite + Shadcn stack

## Prerequisites
- Node.js 18+
- Previous version archived (if migrating)

## Steps

### 1. Initialize Vite Project
```bash
npm create vite@latest . -- --template react-ts
npm install