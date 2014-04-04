Navixy Panel v2 — Open‑source client for the Navixy API
=======================================================

Overview
--------
This repository contains the v2 web panel — an open‑source client for the Navixy API. It is a single‑page application (SPA) built with Ext JS and bundled with Grunt. The panel consumes Navixy server API endpoints to provide administration, billing, user management, trackers, reports, and related functionality for Navixy‑based platforms.

The project is intended to be hosted as a static web app and configured to point at your Navixy (or compatible) API backend.


Technology stack
----------------
- Language: JavaScript (browser)
- Framework/UI: Ext JS (classic toolkit); custom components under `app/`
- Build tool: Grunt (tasks in `tasks/`, config in `Gruntfile.js`)
- Styles: Sass (compiled via `grunt-contrib-sass`)
- Mapping: Leaflet (see `libs/leaflet/`) and optional Google tiles
- Libraries: jQuery, Moment.js, Flot, PDF libs (see `libs/`)
- i18n: custom locale classes under `locale/` with Transifex integration
- Package manager: npm (see `package.json`)


Requirements
------------
- Node.js LTS (recommended 14+; older Grunt plugins may still work with Node 10–12)
- npm (bundled with Node.js)
- Grunt CLI: `npm i -g grunt-cli` or use `npx grunt`
- Optional for i18n: Transifex client (`tx` CLI) if you plan to pull/push translations
- Optional for versioning tasks: Mercurial (`hg`) is used by some tasks to generate a `VERSION` file

Note: One dependency points to a private Git server (`navixy-permissions` via `git@gitlab.navixy.dev`). If you do not have access, installation may fail. See the TODOs below for alternatives.


Getting started
---------------
1. Install dependencies:
   - `npm install`
2. Configure the application:
   - Copy one of the example configs to `PConfig.js`:
     - `cp PConfig.example.js PConfig.js` (or on Windows: copy the file) 
     - Alternatively, `PConfig.example.sa.js` for the SA profile.
   - Edit `PConfig.js` to point to your API endpoints and domains. See Configuration.
3. Build assets:
   - `npx grunt sass:theme_build` — compile theme Sass to CSS
   - `npx grunt build` — build the application into `build/panel`
4. Serve the app:
   - Host the repository (or the built `build/panel` folder) with any static HTTP server.
   - Example (using `http-server`): `npx http-server -c-1 .` and open `http://localhost:8080/index.html`

Entry points & runtime
----------------------
- Main HTML: `index.html` (a production variant exists at `productionFiles/index.html` and is copied during build)
- Main application bootstrap: `app.js`
- Ext Loader paths in `app.js` reference:
  - `PConfig.js` (copied from example)
  - `Locale/*` for localization
  - `NavixyPermissions` from `node_modules/navixy-permissions/dist/navixy-permissions.js`


Configuration
-------------
The application is configured via `PConfig.js`. Example fields from `PConfig.example.js`:
- `apiProfiles` — API root(s) and URL templates, e.g. `apiRoot`, `apiUrlTpl`
- `links` — templates for deep links (monitoring, apps, panel page)
- `terminalHost` — WebSocket URL for devices terminal
- `paas_domain` and `brandingPaasDomain` — default domains affecting branding and behavior
- `uploadLimit` — image upload size limit (MB)
- `navixyInboundNumber` — SMS gateway number
- `subpaasPay` and `avangateLinks` — payment flow configuration
- `useGoogleMapsTilesDirectly` — use Google tiles without JS API
- `enableSimpleEmailValidation` — relaxed email parsing

Environment variables
---------------------
The project primarily relies on the `PConfig.js` file for configuration rather than process environment variables.

TODO:
- Document any additional env‑based overrides if introduced in your deployment pipeline.


Build, run, and common tasks
----------------------------
Grunt tasks are defined in `Gruntfile.js` and `tasks/`.

Core tasks:
- `npx grunt build` — Build the panel into `build/panel`.
  - Copies static assets defined in `Gruntfile.js` (images, libs, themes, `productionFiles/index.html`, etc.)
  - Concatenates and (optionally) uglifies sources, generates `VERSION` (uses `hg id` if available)
- `npx grunt sass:theme_build` — Compile theme Sass (`theme/panel_metromorph/app.scss`) to `theme/panel_metromorph.css`
- `npx grunt bless` — Split large CSS for IE (`theme/panel_metromorph_ie.css`) if needed

Version and release helpers:
- `npx grunt buildbump` — Increment npm package version (patch) via `npm version`
- `npx grunt bump` — Run Mercurial release (minor by default; use `--major` for major) and write `VERSION`
