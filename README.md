# ISEE Launchpad

A single-file, fully offline study program for the **ISEE Lower Level** (grades 4–5 applying to grades 5–6).

**Live app:** https://protoss1232001.github.io/isee-launchpad/

## What it covers
- **Verbal Reasoning** — a 244-word vocabulary bank (5 new words every session), synonym questions, sentence completions, and prefixes, roots and suffixes.
- **Quantitative Reasoning & Mathematics Achievement** — numbers and operations, fractions, decimals/percents/ratios, algebraic concepts, geometry, measurement, data analysis, probability, and quantitative-reasoning strategy. 36 math topics, each with a lesson and an endless randomized question generator with worked explanations.

## How it works
- **12 weeks × 4 sessions = 48 sessions**, each 30–45 minutes: word warm-up → lesson → practice with instant feedback → verbal drill → wrap-up review of every miss.
- Weeks 10–12 add timed mini-tests, mixed reviews, an automatic weak-spot session, and a test-day game plan.
- The **Practice** tab gives 10-question drills on any topic plus timed sections matching the real test lengths (Verbal 34 Q / 20 min, Quantitative Reasoning 38 Q / 35 min, Math Achievement 30 Q / 30 min).
- Progress (sessions, per-topic accuracy, word mastery, study streak) is stored in the browser. **Progress → Settings** has a backup box to copy progress to another device.

## Install it on an iPad or phone
Tapping the `.html` file in the Files app only shows a preview, and previews do not run the app. Do this instead:

1. Open **https://protoss1232001.github.io/isee-launchpad/** in Safari.
2. Tap **Share → Add to Home Screen**.

It then behaves like an installed app: a service worker caches everything on the first visit, so it works with no internet, and home-screen apps are exempt from Safari's storage cleanup, so progress is kept.

On a laptop, downloading `index.html` and opening it directly also works — the file is entirely self-contained.

## Repository layout
| File | Purpose |
| --- | --- |
| `index.html` | The whole app: lessons, question generators, vocabulary, styles and logic |
| `sw.js` | Service worker that caches the app for offline use |
| `manifest.webmanifest` | Web app manifest for home-screen install |
| `icon-*.png` | App icons |

There is no build step. Edit `index.html` directly; its content sections are marked with `// ===== ... =====` inside the script.
