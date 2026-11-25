---
title: Using the exports
description: Read levels and perks, and add EXP, from your own scripts.
sidebar:
  order: 3
---

Most read functions take a `skillData` table: get it once, then check as many skills as you need.
The full list, with parameters and return values, is in [Exports](../exports/).

## Client

```lua
local skillData = exports.pmm_skill_system:GetSkillDataClient()            -- all skills of the player
exports.pmm_skill_system:AddExpClient("hunting", 5)                         -- add EXP
```

## Server

```lua
local skillData = exports.pmm_skill_system:GetSkillDataServer(source)       -- all skills of a player
exports.pmm_skill_system:AddExpServer(source, "hunting", 5)                 -- add EXP (with "+XP" notification)
exports.pmm_skill_system:AddExpServerSilent(source, "hunting", 5)           -- add EXP without notification
exports.pmm_skill_system:GetSkillLevelByCharId(charId, "hunting")           -- level from the DB, works offline
exports.pmm_skill_system:HasGainedExpRecently(source, 600)                  -- gained EXP in the last N seconds?
```

## Client and server

```lua
exports.pmm_skill_system:GetSkillLevel(skillData, "hunting")                -- level (0 if never trained)
exports.pmm_skill_system:GetSkillExp(skillData, "hunting")                  -- current EXP in the skill
exports.pmm_skill_system:CheckSkillLevel(skillData, "hunting", 3)           -- level >= 3?
exports.pmm_skill_system:CheckSkillPerk(skillData, "hunting", 5)            -- perk 5 unlocked?
exports.pmm_skill_system:GetSkillPerkChoice(skillData, "hunting", 3)        -- key chosen for a perk with choices
```

Example, a script that skins faster from hunting level 2:

```lua
local skillData = exports.pmm_skill_system:GetSkillDataClient()
local speed = exports.pmm_skill_system:CheckSkillLevel(skillData, "hunting", 2) and 1.25 or 1.0
```

## Jobs (requires bcc-society)

```lua
exports.pmm_skill_system:GetCombinedSkillsForJob("blacksmith")              -- best level per skill among the job's members
exports.pmm_skill_system:CheckJobSkillLock("blacksmith", { blacksmithing = 3 })
```

## Editor typings

The resource ships `types/types.lua`: add that folder to the library of your Lua language server
(sumneko / LuaLS) to get autocomplete and type checks on every export above.
