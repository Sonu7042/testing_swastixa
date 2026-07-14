# VideoPlayer Component Documentation

## Overview
The `VideoPlayer.jsx` component is a highly optimized, responsive video wrapper designed for auto-playing continuous feed layouts (like a TikTok/Reel feed). It is specifically engineered to handle complex performance behaviors, network data savings, and cross-browser (importantly Mac/iOS) autoplay policies.

## How It Works Under The Hood

The component resolves 4 major challenges of modern web video playback:

### 1. "Pre-Fetching" Lazy Load Strategy (Network Optimization)
Instead of asking the server for 20 heavy videos immediately on page load, the `<video>` element isn't allowed to load anything until the user scrolls near it. 
* **Mechanism:** It uses a React `IntersectionObserver` with a massive `rootMargin` of `"800px"`.
* **Result:** As the user scrolls down, videos that are within 800 pixels of entering the screen boundaries are flipped to `shouldLoad = true`. This gives the browser enough time to discreetly silently fetch the video without clogging up the website's initial loading speed.

### 2. Strict Viewport Auto-Play/Pause (Performance Optimization)
You never want 5 hidden videos playing on top of each other eating up the user's CPU, GPU, and battery.
* **Mechanism:** A second `IntersectionObserver` watches the container very strictly (with `threshold: 0.2` and `-10%` margins).
* **Result:** The exact moment the video crosses into visibility, `isVisible` becomes `true` and the video triggers `.play()`. The instant it gets scrolled past and hidden, it triggers `.pause()`. 

### 3. The Mac / iOS Safari "Catch-22" Fix
Safari (both Mac and iOS) has extremely aggressive battery-saving and auto-play prevention algorithms. Even if a video has `autoPlay`, `muted`, and `playsInline` in React, Safari will often refuse to load or play it programmatically.
* **Mechanism:** 
  1. We completely bypass React's virtual DOM muting and directly force the HTML wrapper to mute using `video.muted = true` and `video.defaultMuted = true` within the `useEffect`.
  2. We listen to the `onLoadedData` event (which triggers immediately when the first frame exists) instead of `onCanPlay`. 
  3. We execute `.play()` regardless of whether the video says it's ready, because in Safari, the video won't even *try* to get ready unless you command it to play first!

### 4. Seamless Skeleton UI Transition
While the video is being fetched natively:
* **Mechanism:** The component immediately renders a blurred `poster` image coupled with a minimal CSS spinning loader.
* **Result:** Once Safari successfully fetches that first frame (and fires `setIsReady(true)`), the placeholder image and loader gracefully fade out via `opacity-0` while the video fades in, ensuring the user sees zero visual pop-ins or unstyled black frames.

## Component Props

| Prop | Type | Description |
| :--- | :--- | :--- |
| `src` | `string` | The absolute or relative URL string to the video file. |
| `poster` | `string` | The URL to the placeholder thumbnail image to show before the video loads. |

## Dependencies utilized:
- `react`: `useRef`, `useState`, `useEffect` natively avoiding heavy third-party scrolling libraries.
- `TailwindCSS`: Controls all dimensional breakpoints, opacities, relative bounding, and spinners natively.
