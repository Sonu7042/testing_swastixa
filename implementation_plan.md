# Implementation Plan - eGrowth Community Portal Migration

Migrate the legacy standalone community portal from `client/public/portal/` into the main React-Vite application structure under `client/src/`, upgrading to React 19, refactoring styling to responsive Tailwind CSS v4, and modularizing the code.

## User Review Required

> [!IMPORTANT]
> - React 19 has dropped UMD support. Thus, Babel-standalone browser parsing will be completely removed. All portal files will compile through Vite's bundler.
> - Current global variables shared across browser scripts will be refactored into ES module `import`/`export` files.
> - Universal styling rules (such as body background, font family imports, custom scrollbar styling, and custom theme variables) will remain in `client/src/styles/globals.css` rather than being converted to inline Tailwind classes.
> - **Modularization & Component Decomposition**: Each page file in the legacy portal (e.g., `admin.jsx`, `lms.jsx`, `quiz.jsx`, `details.jsx`, `disclaimers.jsx`, `engagement.jsx`, `extras.jsx`, `feed.jsx`, `moderation.jsx`, `onboarding_mobile.jsx`, `games_safety.jsx`, `home_engagement.jsx`, `home.jsx`, `profile.jsx`, `reels_posters.jsx`, `resume.jsx`, `tier_c.jsx`, `tweaks-panel.jsx`) contains multiple inline UI helper components. These must be extracted into modular, focused components under `client/src/components/portal/` (e.g., `src/components/portal/admin/`, `src/components/portal/lms/`, etc.) to clean up the file structure.
> - **No Component Deletion / Strict Layout Identity**: Every single sub-component must be preserved; no functionality or layout block should be omitted. Visual look, alignments, responsive behavior, logic, state, and elements ordering must remain exactly identical to the mockup layout.

## Proposed Changes

### Milestone 1: Dependency Upgrade & Environment Setup (Completed)
- [x] Upgrade React dependencies to `^19.0.0` in `client/package.json`.
- [x] Run `npm install` in the `client` folder to resolve dependency graph.
- [x] Configure `vite.config.js` to ensure the `@tailwindcss/vite` plugin parses the newly added directories.

### Milestone 2: Data & Global State Migration (Completed)
- [x] Move mockup datasets from `client/public/portal/data.js`, `data_demo.js`, and `data30.js` to a consolidated ES module file at `client/src/data/portal/index.js`.
- [x] Migrate store, API, interactions, and economy logic functions to ESM files under `client/src/store/portal/`.

### Milestone 3: Core Component Migration & Modularization
- [NEW] Port common UI primitive blocks (`primitives.jsx`, `economy_ui.jsx`, `nav.jsx`, `side_rail.jsx`) into dedicated reusable components inside `client/src/components/portal/`.
- [NEW] Decompose massive layouts into isolated, modular sub-components. For example:
  - Extract `AdminSidebar`, `AdminDashboardStats`, `AuditLogsTable`, and `UserModerationList` from `admin.jsx` into components inside `src/components/portal/admin/`.
  - Extract `CourseCard`, `LessonViewer`, `ProgressTracker`, and `EnrolmentModal` from `lms.jsx` into components inside `src/components/portal/lms/`.
  - Extract `QuizCard`, `QuestionSlide`, and `ScoreSummary` from `quiz.jsx` into components inside `src/components/portal/quiz/`.
  - Repeat this modular separation for all pages to ensure no file contains monolithic code blocks.
- [NEW] Refactor all inline CSS styles (`style={{ ... }}`) into utility-first Tailwind CSS classes.

### Milestone 4: Page Modules & Layout Integration
- [NEW] Move final page templates (`home.jsx`, `profile.jsx`, `lms.jsx`, `quiz.jsx`, `admin.jsx`, `extras.jsx`, `disclaimers.jsx`, `details.jsx`, `onboarding_mobile.jsx`, etc.) into clean pages under `client/src/pages/portal/` that import the newly modularized sub-components.
- [MODIFY] Integrate the `/portal` dashboard layout route inside `client/src/App.jsx` router.

### Milestone 5: Layout Responsiveness & Cleanup
- [MODIFY] Implement responsive utility classes (`sm:`, `md:`, `lg:`) to ensure sidebar drawer toggle and right-rail collapse behaviors align perfectly across screen viewports.
- [DELETE] Safely remove the legacy static folder `client/public/portal/` after verification.

---

## Verification Plan

### Automated Tests
- Run `npm run build` in the `client/` folder to check for clean JSX compilation and resource bundling.

### Manual Verification
- Deploy local dev server via `npm run dev`.
- Verify pages navigate smoothly, Merit points increment, quizzes run correctly, and styles display natively on both desktop and mobile viewports.
- Cross-check that all extracted sub-components render identically with no omitted parts.
