# CelestialForge Docs

Documentation of the CelestialForge RedM resources. Built with [Astro Starlight](https://starlight.astro.build/)
and published on GitHub Pages: https://celedev97.github.io/celestialforge-docs/

```
npm install
npm run dev      # http://localhost:4321/celestialforge-docs/
npm run build
```

## Generated pages

`exports.md` and `types.md` of each resource are generated from its Lua typings (LuaLS annotations in the
resource's `types/types.lua`, plus the `---@class` blocks of `config.lua`). Do not edit them by hand:

```
python scripts/lua_types_to_starlight.py --resource pmm_skill_system \
    --types <path to pmm_skill_system>/types/types.lua \
    --classes <path to pmm_skill_system>/config.lua \
    --out src/content/docs/skill-system
```

Run it again whenever the typings change, then commit the result.
