---
name: archive-version
description: Archive the current portfolio version from root to /archive/{year}. Moves all files except .git, .claude, archive/, node_modules. Creates README documenting the frozen version.
allowed-tools: Bash, Read, Write, Glob
---

# Archive Portfolio Version

Archive the current root portfolio to `/archive/{year}/` as a frozen snapshot.

## When to Use
- Before creating a new annual version
- When finalizing a year's portfolio iteration
- To preserve history before major migrations

## Steps

1. **Validate** target archive doesn't exist: `ls archive/$ARGUMENTS 2>/dev/null` → error if exists
2. **Create** archive directory: `mkdir -p archive/$ARGUMENTS`
3. **Move** all root files except exclusions:
   - Excluded: `.git/`, `.claude/`, `archive/`, `node_modules/`, `.env.local`
   - Use `find . -maxdepth 1 -not -path "./.git*" -not -path "./.claude*" -not -path "./archive*" -not -path "./node_modules*" -not -path "." -exec mv {} archive/$ARGUMENTS/ \;`
4. **Create** `archive/$ARGUMENTS/README.md`:
   ```markdown
   # Portfolio Version $ARGUMENTS
   
   **Status:** Frozen Archive  
   **Original Stack:** [Next.js/Vite/Other]  
   **Date Archived:** $(date +%Y-%m-%d)
   
   This is the preserved $ARGUMENTS version of the portfolio.
   No modifications should be made to this archive.
   
   ## Deployment
   Original deployment: [vercel-url]
   
   ## Restoration
   To restore: Copy contents back to root and run `npm install`


5. **Verify** move succeeded, report any errors:

- NEVER move `.claude/` (contains project configuration)
- NEVER move `.git/` (preserve history)
- NEVER overwrite existing archives
