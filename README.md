# ISEE Launchpad

A single-file, fully offline study program for the **ISEE Lower Level** (grades 4–5 applying to grades 5–6).

**Live app:** https://protoss1232001.github.io/isee-launchpad/

## What it covers
All four scored sections, plus the essay.
- **Verbal Reasoning** — a 421-word vocabulary bank: 244 core words plus 177 harder words for a top score, about 7 new words every session. Synonym questions, sentence completions, and prefixes, roots and suffixes. Wrong choices include the classic ISEE trap, the exact opposite of the answer, and sentence-completion explanations name the signal word (*although*, *because*) that decides the blank.
- **Quantitative Reasoning & Mathematics Achievement** — numbers and operations, fractions, decimals/percents/ratios, algebraic concepts, geometry, measurement, data analysis, probability, and quantitative-reasoning strategy. 36 math topics, each with a lesson and an endless randomized question generator with worked explanations.
- **Challenge tier (harder Quantitative Reasoning)** — seven sets of multi-step questions modeled on the hardest ISEE items: number sense and logic (including odd/even reasoning), proportional reasoning, patterns, multi-step word problems, composite figures and angles, tables/graphs/Venn logic, and multi-step probability. Every wrong answer comes from one specific, common mistake, and each explanation names the trap. See *Challenge tier* below.
- **Reading Comprehension** — 34 original passages (science, history, biography, fiction and a persuasive essay) with 204 questions. The 16 newer passages each have six questions, one of each kind the real section asks (main idea, supporting detail, vocabulary in context, inference, purpose or tone, and organization or figurative language); each of the 18 original passages gained a sixth question, mostly on organization. Plus four reading-strategy lessons. The timed Reading section uses five questions per passage, like the real test.
- **The Essay** — a timed 30-minute writing workspace with a planning organizer, live word count, a self-check rubric, and 18 prompts in the style of the real test. Drafts are kept on the device.

## Writing feedback
The app runs offline with no AI, so it cannot grade an essay. Instead it gives two things a person can work from:
- **Model essays** — five full answers that show what the best essays look like, one for each shape of prompt (a person, a narrative, a place, an opinion, a reflection), plus one plain, reachable answer at the level a solid fifth grader writes in 30 minutes. Each paragraph is annotated with why it works. Reachable from the Practice tab, and both kinds are offered right after she finishes writing.
- **A parent review page** — Progress → *Review with a grown-up* opens one essay beside the five things schools actually notice, three questions to ask her, and guidance on how to give the feedback. It prints cleanly.

## Challenge tier
- **Unlocked by mastery.** Each set opens once every one of its groundwork topics has been practiced and, taken together, they reach 80% accuracy over at least 10 answers. Once open, a set stays open. The Practice tab shows what each locked set still needs. A grown-up can open every set at once under Progress → Settings.
- **Where the questions appear:** as their own sets on the Practice tab (a short strategy lesson, then 8 questions); as two stretch questions at the end of a related math lesson once the matching set is open (reported separately and not counted in the session score); as three of the twelve questions in each review session; and as one third of the timed Quantitative Reasoning section.
- Expect lower accuracy here than elsewhere in the app. That is the point.

## Pacing and the focus list
- **Time per question.** Every practice and timed question is timed (only while the app is on screen). The results screen shows the average time against the real test's pace, marks each miss with its time, and lists right answers that were slow. The first question on a reading passage is never called slow, since its time includes reading the passage.
- **Why was it missed?** Each wrong answer gets a suggested reason: didn't know it, fell for a trap, misread the question, or rushed. The student confirms or changes it with one tap. Progress → *Why you miss questions* shows which reason comes up most in the last 30 days, with advice for it.
- **Focus list.** Wrong answers go on a focus list (the same word, the same passage question, or a fresh question on the same topic). *Practice 8 from my list* re-asks them; an item leaves the list after two right answers in later sessions. Questions left blank on a timed test are not added.

## Official practice-test scores
Progress → *Official practice tests* is a log for results from ERB's official practice test (in the free guide *What to Expect on the ISEE*), other publishers' tests, or a real score report. Enter the number correct for each section, and add a scaled score, percentile or stanine only when the source provides one. The app shows percent correct per section and any reported scores; the change and trend line compare only results from the same source, since publishers' tests differ in difficulty.

The app **never converts raw scores into scaled scores, percentiles or stanines.** ERB does not publish that conversion, each test form is scaled separately, and stanines are normed against other applicants for the same grade, so any conversion the app made up could mislead.

## How it works
- **12 weeks × 5 sessions = 60 sessions**, each 30–45 minutes: word warm-up → lesson → practice with instant feedback → verbal drill → wrap-up review of every miss. The synonym and sentence-completion strategy lessons are shown once each, before the first two verbal drills, so the drills are never unexplained.
- Four sessions a week cover verbal and math. The fifth is reading — or, every fourth week, a timed essay. Week 11 closes with a full-length timed Reading section.
- Weeks 10–12 add timed mini-tests, mixed reviews, an automatic weak-spot session, and a test-day game plan.
- The **Practice** tab gives 10-question drills on any topic, reading passages on demand, a 30-minute essay, model essays, and timed sections matching the real test lengths (Verbal 34 Q / 20 min, Reading 25 Q / 25 min, Quantitative Reasoning 38 Q / 35 min, Math Achievement 30 Q / 30 min). The Quantitative Reasoning section draws a third of its questions from the challenge tier.
- Progress (sessions, per-topic accuracy, word mastery, study streak) is stored in the browser. **Progress → Settings** has a backup box to copy progress to another device. If saved progress ever cannot be read, it is kept aside rather than erased, and Settings offers it for recovery. Leaving a Practice-tab essay part-way through keeps the draft in Progress, marked unfinished.

## Install it on an iPad or phone
Tapping the `.html` file in the Files app only shows a preview, and previews do not run the app. Do this instead:

1. Open **https://protoss1232001.github.io/isee-launchpad/** in Safari.
2. Tap **Share → Add to Home Screen**.

It then behaves like an installed app: a service worker caches everything on the first visit, so it works with no internet, and home-screen apps are exempt from Safari's storage cleanup, so progress is kept.

**Updates.** When online, the app loads the newest version each time it opens and falls back to the saved copy when offline or on a slow connection. Progress is stored separately from the app itself, so updates never erase it.

On a laptop, downloading `index.html` and opening it directly also works — the file is entirely self-contained.

## Repository layout
| File | Purpose |
| --- | --- |
| `index.html` | The whole app: lessons, question generators, vocabulary, styles and logic |
| `sw.js` | Service worker: loads the newest page when online, the cached copy when offline |
| `manifest.webmanifest` | Web app manifest for home-screen install |
| `icon-*.png` | App icons |

There is no build step. Edit `index.html` directly; its content sections are marked with `// ===== ... =====` inside the script.

## Independence
This is independent practice material. It is not affiliated with, endorsed by, or connected to ERB, the makers of the ISEE. Questions are written for practice and may occasionally contain mistakes.
