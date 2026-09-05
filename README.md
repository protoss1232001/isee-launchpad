# ISEE Launchpad

A single-file, fully offline study program for the **ISEE Lower Level** (grades 4–5 applying to grades 5–6).

**Live app:** https://protoss1232001.github.io/isee-launchpad/

## What it covers
All four scored sections, plus the essay.
- **Verbal Reasoning** — a 244-word vocabulary bank (5 new words every session), synonym questions, sentence completions, and prefixes, roots and suffixes.
- **Quantitative Reasoning & Mathematics Achievement** — numbers and operations, fractions, decimals/percents/ratios, algebraic concepts, geometry, measurement, data analysis, probability, and quantitative-reasoning strategy. 36 math topics, each with a lesson and an endless randomized question generator with worked explanations.
- **Reading Comprehension** — 18 original passages (science, history, biography and fiction) with 90 questions covering main idea, supporting detail, vocabulary in context, inference, author's purpose, tone and organization, plus four reading-strategy lessons.
- **The Essay** — a timed 30-minute writing workspace with a planning organizer, live word count, a self-check rubric, and 18 prompts in the style of the real test. Drafts are kept on the device.

## Writing feedback
The app runs offline with no AI, so it cannot grade an essay. Instead it gives two things a person can work from:
- **Model essays** — five full answers, one for each shape of prompt (a person, a narrative, a place, an opinion, a reflection), each paragraph annotated with why it works. Reachable from the Practice tab, and offered right after she finishes writing.
- **A parent review page** — Progress → *Review with a grown-up* opens one essay beside the five things schools actually notice, three questions to ask her, and guidance on how to give the feedback. It prints cleanly.

## How it works
- **12 weeks × 5 sessions = 60 sessions**, each 30–45 minutes: word warm-up → lesson → practice with instant feedback → verbal drill → wrap-up review of every miss.
- Four sessions a week cover verbal and math. The fifth is reading — or, every fourth week, a timed essay.
- Weeks 10–12 add timed mini-tests, mixed reviews, an automatic weak-spot session, and a test-day game plan.
- The **Practice** tab gives 10-question drills on any topic, reading passages on demand, a 30-minute essay, and timed sections matching the real test lengths (Verbal 34 Q / 20 min, Quantitative Reasoning 38 Q / 35 min, Math Achievement 30 Q / 30 min).
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

## Independence
This is independent practice material. It is not affiliated with, endorsed by, or connected to ERB, the makers of the ISEE. Questions are written for practice and may occasionally contain mistakes.
