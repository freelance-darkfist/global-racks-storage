# Homepage hero carousel — QA

Verified against the production build (`pnpm build`, `PORT=3119 node .output/server/index.mjs`)
driven over CDP by a throwaway harness (`/tmp/verify3.mjs`, not committed).

## What was checked

**62/62 checks passed** — structure, semantics, autoplay timing, keyboard, hover hold,
touch swipe, reduced motion, and layout geometry.

### Structure & semantics
- 4 slides render, exactly one `aria-hidden="false"` at a time.
- Inactive slides keep no focusable children.
- The caption row links the active product (`/products/<slug>`), and its label follows the slide.
- Counter reads `01 / 04` … `04 / 04`.
- **No buttons anywhere inside the carousel** — no prev/next, no play/pause, no rail buttons.
  Asserted at every viewport in the sweep (`region.querySelectorAll('button').length === 0`).
- `aria-live` summary region present for AT users.

### Behaviour
| Check | Result |
| --- | --- |
| Autoplay advances with no controls | PASS (0 → 1 → 2) |
| Dwell per slide | PASS — 6509 ms (target 6500 ms) |
| Counter tracks the active slide | PASS (`02 / 04`) |
| ArrowRight / ArrowLeft with caption focused | PASS |
| Hovering the hero holds the slideshow | PASS (no change after 7.4 s) |
| Leaving the hero restarts autoplay | PASS |
| Touch swipe advances, no navigation | PASS |
| `prefers-reduced-motion: reduce` stops autoplay | PASS |

## Layout

### Desktop 1440 × 900 (fits above the fold)
| Metric | Value |
| --- | --- |
| Hero width | 1440 px (edge to edge) |
| Hero box | top 101, bottom 897, height **796 px** |
| Copy column | 157 → 784 |
| Caption + counter row | 824 → 865 |
| Horizontal overflow | 0 px |

![Desktop hero at 1440x900](hero-desktop-1440x900.jpg)

### Phone / tablet sweep
| Viewport | Hero height | Hero bottom | Caption row bottom | Fits viewport |
| --- | --- | --- | --- | --- |
| 390 × 844 | 850 px | 923 | 891 | No — 47 px below the fold |
| 390 × 667 | 850 px | 923 | 891 | No |
| 360 × 640 | 886 px | 959 | 927 | No |
| 768 × 1024 | 705 px | 806 | 774 | Yes |

![Phone hero, 390x844 fold](hero-mobile-390x844-fold.jpg)

![Full phone hero, 390x844 viewport](hero-mobile-390x844-full.jpg)

Width sweep at 320 / 390 / 640 / 768 / 1024 / 1280 px: hero stays edge-to-edge
(within 8 px), copy stays inside the viewport, caption row never overflows, counter
is visible at every width, and no buttons are rendered.

## Accepted trade-offs

- **Hero is taller than a phone viewport** (390 × 844 → 850 px hero). The product
  caption and the `01 / 04` counter sit just below the fold on phones. This is
  intentional — approved rather than compressed.
- **No pause/play button.** Autoplay stops while the hero is hovered, while anything
  inside it has focus, while the tab is hidden, and entirely under
  `prefers-reduced-motion`. Keyboard arrows and touch swipes remain as manual controls;
  the thin progress rails were removed along with the buttons.