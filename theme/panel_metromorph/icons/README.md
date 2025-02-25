# How to add a new icon

1. Go to [https://icomoon.io/app/#/projects](https://icomoon.io/app/#/projects).
2. Import the icons project file (`selection.json`) and click on the "Load" button.
3. Search for the desired icon using the search bar at the top.
   * Select the icon.
   * Click on the plus icon in the search bar to import the selected icon into the project.
4. Click on the "Generate Font" button at the bottom and download the font files.
5. Replace the contents of `<root>/theme/panel_metromorph/icons/` with the newly generated files.
6. Copy only the new generated icon styles into `<root>/theme/panel_metromorph/icons/iconMoon.scss`, and add the class names to line 13 of `<root>/theme/panel_metromorph/icons/iconMoon.scss`.
7. Build the theme:
    ```bash
    grunt sass
    ```
