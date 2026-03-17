---
name: archive-current
description: Archive the current root version to /archive/{year} without creating new structure. Use before manual migrations.
disable-model-invocation: true
argument-hint: "[year]"
---

# Archive Current Version

Archive the current portfolio version at root to `/archive/$ARGUMENTS/`.

## Steps

1. Verify `/archive/$ARGUMENTS/` doesn't already exist
2. Create directory structure `/archive/$ARGUMENTS/`
3. Move all files except:
   - `.git/`
   - `.claude/`
   - `archive/`
   - `node_modules/`
   - `.env*` (unless template)
4. Create `archive/$ARGUMENTS/README.md`:
   - Title: "Portfolio Version $ARGUMENTS"
   - Date archived
   - Original stack info
   - Link to live deployment if available
5. Create minimal `package.json` in archive if needed for reference
6. Update root README to indicate active development moved to new year