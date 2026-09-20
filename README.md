# RoboMaze Web Portal — Club ELESA

A modern, responsive, cyber-themed web platform for the **RoboMaze** robotics tournament organized by **Club ELESA** (Electronics Engineering Students' Association).

---

## 🌟 Key Highlights

### 1. 🤖 Interactive 3D GLB Model & Arena Viewer (`ModelViewer3D.jsx`)
- Built with **Three.js** hardware-accelerated WebGL.
- **Model Presets**:
  - *Spectre Mk-IV RoboBot*: Detailed autonomous robot featuring a spinning LiDAR turret, front ToF/ultrasonic sensor eyes, gold trim chassis, and glowing LED strips.
  - *Maze Grid Arena*: 16×16 maze grid with corridors, modular walls, glowing top rims, and checkpoint pads.
  - *Bot + Arena*: Bot placed directly inside the maze navigation course.
- **Interactive Controls**:
  - 360° Orbit controls: Left-click to rotate, right-click to pan, scroll wheel to zoom.
  - Auto-spin toggle.
  - Wireframe CAD mode toggle (for engineering inspection).
  - Lighting mode toggle (Cyber Neon vs Clean Studio White).
  - Reset camera view & Fullscreen mode.
- **Custom Model Loading**:
  - Drag and drop any `.glb` or `.gltf` 3D robot model into the viewport.
  - File picker button (`Upload .GLB`).
  - Automatic model scaling, centering, and playback for models containing skeletal/morph animations.

### 2. 🏆 Real-Time Live Rankings & Leaderboard (`LiveLeaderboard.jsx`)
- **Top 3 Podium Cards**: Visual cards highlighting Gold (#1), Silver (#2), and Bronze (#3) with celebratory confetti.
- **Live Scoring Calculation**:
  $$\text{Score} = (\text{Checkpoints} \times 100) - (\text{Time} \times 2) - (\text{Penalties} \times 50)$$
- **Telemetry Indicators**:
  - Live rank trend markers (🔼 moved up, 🔽 dropped, ➖ steady).
  - Checkpoint progress bars (e.g., $8/8$).
  - Elapsed run time formatted in `MM:SS.ms`.
  - Status badges: `LIVE ON TRACK` (pulsing), `COMPLETED`, `IN QUEUE`, `DISQUALIFIED`.
- **Search & Filtering**:
  - Real-time search across team name, student members, bot specs, and college name.
  - Round filtering: *All Rounds*, *Finals: Blind Maze*, *Round 2: Dynamic Obstacle*, *Round 1: Speed Grid*.
  - Sort by Highest Score, Fastest Time, or Checkpoints.

### 3. ⏱️ Real-Time Arena Simulator (`App.jsx`)
- Toggleable live simulator in the top bar.
- Simulates live bots navigating through the arena, clearing checkpoints, accumulating time, and triggering position shifts.

### 4. 🎛️ ELESA Coordinator Control Deck (`AdminModal.jsx`)
- Accessible via the **Coordinator Panel** button.
- Modify times, checkpoints, penalties, and status of any team.
- Register new student teams and assign them to competition rounds.
- Export the official tournament standings to **CSV** or reset to initial state.

### 5. 📜 Arena Specs & ELESA Regulations (`EventDetails.jsx`)
- Clear specifications for robot weight ($\le 500\text{g}$), dimensions ($16 \times 16\text{cm}$), arena dimensions ($16 \times 16$ cells), and Club ELESA contacts.

---

## 🚀 Running the Project Locally

To run the development server:

```bash
# Navigate to the project directory
cd C:\Users\Manmohan\.gemini\antigravity\scratch\robomaze-elesa

# Start the Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

To create an optimized production build:
```bash
npm run build
```
