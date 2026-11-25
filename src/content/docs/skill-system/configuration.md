---
title: Configuration
description: Every option of config.lua, how to add a skill, hooks and languages.
sidebar:
  order: 2
---

Everything is in `config.lua`, which the asset escrow leaves open.

## Options

| Option | What it does |
|---|---|
| `Config.Locale` | language of every text, a file in `locales/` (`"en"`, `"it"`) |
| `Config.Command` / `Config.Item` | command and usable item that open the skill book (`nil` disables) |
| `Config.DailyExpCap` | max EXP per day in each skill |
| `Config.PerkLock` | perks with id >= this value cannot be unlocked yet (`nil` = no lock) |
| `Config.LevelLock` | characters stop gaining EXP in a skill at this level (`nil` = no lock) |
| `Config.Webhooks` | Discord webhooks for level ups, EXP reports and alerts |
| `Config.WebhookConvar` | send webhooks only when this convar is `1` (e.g. only on the live server) |
| `Config.SkillInstructors` | instructors: NPC model, position, scenario, or `noNPC = true` for a marker |
| `Config.Skills` | the skills, their levels and perks |
| `Config.ExpItems` | usable items that give EXP |
| `Config.LevelsParameters` / `Config.ExpFunction` | EXP curve |

## Adding a skill

```lua
Config.Skills.lumberjack = {
    name = "Lumberjack",
    points = {
        [1] = { title = "Sharp Axe", description = "Chopping wood tires me less." },
        [2] = { title = "Good Timber", description = "I can tell good wood from bad." },
        [3] = { perk = 3, title = "Woodsman", description = "A perk: unlocked at the instructor." },
        [4] = { title = "Clean Cuts", description = "Less waste." },
        [5] = { perk = 5, title = "Master Lumberjack", description = "Another perk." },
    }
}
```

- One entry in `points` per level. The built-in EXP curve is tuned for 5 and 10 levels (see
  `Config.LevelsParameters`); write `levels = { ... }` to set the EXP of each level by hand.
- `perk = <level>` makes that level a perk: the player unlocks it at the skill instructor.
- `choices = { key = "Button label", ... }` turns a perk into a choice. The chosen key is saved and can be read
  with [`GetSkillPerkChoice`](../exports/#getskillperkchoice).
- `hidden = true` hides the skill until level 1, `reveal = { title, description }` is the notification shown then.
- Perk images: `ui/assets/images/perks/<skill>_<perk>.png` (e.g. `lumberjack_3.png`).
- Add an instructor for the skill in `Config.SkillInstructors`, or players cannot unlock its perks.

What a level or a perk *does* is up to your scripts: read it with the [exports](../usage/).
The fields of a skill are listed in [Types](../types/#pmmskilldefinition).

## Hooks

```lua
-- client: return false to stop a player from gaining EXP in a skill
Config.CanGainExp = function(skillID)
    return true
end

-- server: max perks a character can unlock across all skills (nil = no limit)
Config.MaxPerks = function(source)
    return nil
end
```

## Languages

Texts are in `locales/en.lua` and `locales/it.lua`. To add a language, copy `locales/en.lua` to
`locales/<code>.lua`, change `Locales.en` to `Locales.<code>`, translate the values (keep every `%s` in the same
order) and set `Config.Locale = "<code>"`. Missing keys fall back to English. Skill names and descriptions are in
`config.lua`.
