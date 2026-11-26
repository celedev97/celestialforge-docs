---
title: Overview
description: Skills, levels and perks for RedM (VORP or RSG), with a skill book UI.
sidebar:
  order: 1
---

Skills, levels and perks for RedM (VORP or RSG). Players gain EXP from your other scripts, level up, and unlock perks at
instructor NPCs. Everything they have learned is collected in a skill book with an animated page-turning UI.

- Any number of skills, 5 or 10 levels each, with a perk every few levels
- Perks unlocked at instructors (NPC or marker), optionally with a choice (e.g. a specialization)
- Skill book UI (`/skills` or a usable item)
- Daily EXP cap, perk lock and level lock to pace progression on a new server
- Usable items that give EXP
- Hooks to plug in your own rules (factions, jobs, VIP...)
- Discord logs: level ups, EXP reports, suspicious EXP/hour alerts
- English and Italian included, add any language in `locales/`
- Exports to read levels and perks from any other script

## Requirements

| Resource | Required | Notes |
|---|---|---|
| `vorp_core`, `vorp_character`, `vorp_inventory` | one of the two frameworks | VORP framework |
| `vorp_inputs` | with VORP | confirmation box when unlocking a perk (part of VORP) |
| `rsg-core`, `rsg-inventory` | one of the two frameworks | RSG framework (confirmation uses buttons) |
| `oxmysql` | yes | database |
| `feather-menu` | yes | instructor menus |
| `bln_notify` | no | nicer level up notifications; without it the framework notification is used |

## Installation

1. Put `pmm_skill_system` in your resources folder.
2. Add `ensure pmm_skill_system` to your `server.cfg`, after your framework (VORP or RSG), `oxmysql` and `feather-menu`.
3. Start the server: the tables `pmm_skills` and `pmm_skills_perks` are created automatically.
4. Edit `config.lua`, then `restart pmm_skill_system`.

:::caution
Do not list `pmm_skill_system` in the `dependencies` of your other resources: a restart of the skill system
would stop all of them too. Just use the exports, and check
`GetResourceState('pmm_skill_system') == 'started'` if the skill system is optional for that script.
:::

## Next steps

- [Configuration](../configuration/): options, adding a skill, hooks, languages
- [Using the exports](../usage/): read levels and perks from your scripts
- [Exports](../exports/) and [Types](../types/): the full reference
