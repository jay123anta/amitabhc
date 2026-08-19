# Show HN — Launch Kit

## Submission

**Title** (don't editorialize, HN strips/penalizes hype words):

```
Show HN: AmitabhC – a programming language made of Amitabh Bachchan dialogues
```

**URL:** `https://jay123anta.github.io/amitabhc`

(Submit the site, not the GitHub repo — the browser IDE is the 10-second wow. The repo link goes in your first comment.)

**When:** Tuesday–Thursday, 6:30–9:00am US Eastern (4–6:30pm IST). Avoid US weekends and Mondays. Stay at the keyboard for 3–4 hours after posting — Show HN threads live or die on author replies.

**If HN says "your account isn't able to submit this site":** that's the spam filter —
`*.github.io` domains are restricted for new/low-karma accounts because spammers abuse them.
Do NOT retry repeatedly or make a second account. Instead:
1. Submit `https://github.com/jay123anta/amitabhc` as the URL (github.com is not restricted);
   put the playground link in the first line of your first comment.
2. Also email **hn@ycombinator.com** with your username and the blocked URL — mods respond fast,
   unblock legitimate Show HNs, and sometimes offer a second-chance-pool slot.
3. If the account is brand-new, comment genuinely for 2–3 days first — account age + a little
   karma calms every filter and keeps your own comments from being greyed out.

---

## First comment (post immediately after submitting)

Hi HN! Amitabh Bachchan is Indian cinema's biggest icon — five decades of films whose dialogues everyone in India can quote from memory. I built a programming language where those films and dialogues *are* the language.

Programs start with LIGHTS / CAMERA and end with ACTION. Variables are declared with VIJAY (his most frequent character name); constants with DON — try to reassign one and you get "Main aaj bhi phenke hue paise nahin uthata!" ("Even today I don't pick up money that's been thrown at me"). Every runtime error is a real dialogue: an undefined variable gives you "Don ko pakadna mushkil hi nahi, naamumkin hai!" ("Catching Don isn't just difficult, it's impossible").

My favorite part: the switch-case is literally a question from Kaun Banega Crorepati (India's "Who Wants to Be a Millionaire", which Bachchan hosts). Cases are OPTIONs, and the show's lifelines — PHONE_A_FRIEND, AUDIENCE_POLL, LIFELINE_FIFTY_FIFTY — are all executable statements.

It's a joke, but a real one: Turing complete, with arrays, dictionaries, four loop forms, recursion, try/catch/finally, string interpolation, six standard-library namespaces (all film titles — SHAHENSHAH does strings, COOLIE does math), and a 75-test suite running in CI.

Implementation is a single dependency-free JavaScript interpreter (~100KB) that runs the same in the browser and as a Node CLI (npm install -g amitabhc). No eval — it's a hand-written line-based parser/evaluator with execution limits so the playground can't be wedged by an infinite loop.

Source: https://github.com/jay123anta/amitabhc
Language spec ("the Language Bible"): https://github.com/jay123anta/amitabhc/blob/main/docs/LANGUAGE_BIBLE.md

Would love feedback — and if you know the films, I take keyword suggestions very seriously.

---

## Prepared answers for likely HN questions

**"Why line-based instead of a real AST?"**
Honest answer: it started as a toy and grew. A pre-parsed AST with a per-line cache is on the roadmap (would give ~10–50× on hot loops). The 75-test suite exists precisely so that rewrite is safe to do.

**"Is this like ArnoldC?"**
Directly inspired by it (it's in the package.json keywords). ArnoldC is one-liners from one actor's action films; AmitabhC tries to go further — a full standard library named after films, a game show as control flow, and every error message in character.

**"Why is the interpreter 10,000-iterations / 30s capped?"**
The same interpreter powers a public browser playground, so it ships with safety rails (loop cap, call-depth cap, execution timeout). The caps are configurable constants.

**"Unicode/Hindi support?"**
Strings are JS strings, so Devanagari works in string literals today. Keywords are romanized Hindi on purpose — that's how the dialogues are quoted and memed in India. Devanagari keyword aliases are a fun idea for a future version.

**"Turing complete — proof?"**
Unbounded-within-doubles integers, conditionals, while loops, and recursion; the esolangs.org page (https://esolangs.org/wiki/AmitabhC) has the computational-class writeup. The safety caps are interpreter settings, not language limits.

---

## Follow-through

- If the thread gets traction, add the top HN comment thread link to the X launch thread ("front page of Hacker News today 🙏").
- Stagger Reddit 1–2 days later so each community discovers it fresh: r/programminghumor (reach), r/developersIndia (home crowd — post in the evening IST), r/esolangs (credibility; link the Language Bible).
- A "How I built AmitabhC" dev.to/blog write-up can be posted the following week and submitted to HN separately — implementation war stories (the KHATAM nesting bug, keywords-as-prefix parsing bug) do well.
