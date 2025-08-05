🎮 **RPG Game-Alike (WIP)**

This is a simple browser-based RPG prototype built with HTML, CSS, and JavaScript.
It started as a mini-project to practice JS basics (variables, events, functions, DOM manipulation) and has grown into a fun little game experiment.

🚀 **Features (so far)**

**Login system**

-Enter your name (max 10 characters) to start the game.
**EXP System**

-EXP points are calculated based on username length (+5 bonus).
-EXP can be increased, decreased, reset, or randomized.
**Health Bars (HP)**

-Both Player and Enemy have max HP of 12.
-HP bars update visually with green / orange / red colors depending on remaining % HP.
**Combat System**

-Attack button deals random damage (2–5).
-Enemy counterattacks automatically.
**Healing**

-Heal button restores random HP (2–5).
-Enemy can heal too, making battles less predictable.
**Power Up**

-Multiplies player EXP (currently using Math.pow).
-Planned: will affect attack damage instead of EXP.
🎨 **Planned Features**

1.Random events (e.g., buffs/debuffs applied each turn).
2.Balanced Power Up that increases damage output instead of EXP.
3.More polished reset function for player/enemy stats.
4.Visual feedback (animations, better HP bar design, maybe pixel art).

Eventually: saving progress with localStorage.

🛠️ **Built With**

HTML5 (structure)
CSS3 (styling, HP bar)
JavaScript (ES6) (logic, interactivity)

📚 **Lessons Learned**

-Using event listeners (click, input) to trigger game actions.
-Updating DOM with textContent and style.
-Calculating percentages for dynamic HP bars.
-Applying Math methods (pow, floor, random) for gameplay mechanics.
-Reusing core concepts (increase/decrease, reset buttons) inside a bigger project.

🎯 **Next Steps**

-Refactor code to separate logic into cleaner functions.
-Expand combat system (special abilities, enemy types).
-Polish UI with better CSS and animations.
-Add difficulty scaling (stronger enemies as player levels up).

💡 **Notes**

This project is still in progress. The main goal is to master JavaScript basics by reusing them in a bigger, game-like project, think of it as “Leveling Up” my coding skills.

⚔️ Work in progress but already feeling like a little RPG battle ehe
