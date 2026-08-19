# AmitabhC — Instagram Launch Kit

Instagram is not X. On X the thread carries the argument; on Instagram **Reels carry everything** —
static posts get almost no cold reach in 2026. Your two audiences here are bigger than on X:
Bollywood fan pages / meme culture, and India's huge dev-creator scene (#codingindia).
The plan: 5 Reels + 1 carousel over launch week, everything cut for 9:16 vertical.

**Asset gap:** the three launch cards are 1200×675 (16:9, made for X). For Instagram you need
1080×1350 (4:5) for feed posts and 1080×1920 (9:16) for Reels/Stories. Recreate them in the same
style, or better — let the Reels replace them entirely.

---

## ACCOUNT SETUP (before anything)

- Handle: `@amitabhc.lang` (or `@amitabhc_lang` if taken). Creator account, category "Software".
- Bio (line breaks matter):
  ```
  The Bollywood programming language 🎬
  Every keyword = an Amitabh Bachchan film
  Errors speak in dialogues. Really.
  ⬇️ Write code in your browser
  ```
- Link: `https://jay123anta.github.io/amitabhc` (the IDE is the conversion, always link it, never the repo).
- Profile picture: the language logo/icon on the saffron background (reuse icon-512.png).

---

## THE REELS (post one per day, launch week)

General rules for every Reel:
- **1080×1920, 15–30 seconds, hook inside the first 1.5s** — the first frame must contain the
  premise as burned-in text. ~85% watch muted: subtitle everything.
- Record the Pro IDE with a phone-shaped browser window (use responsive mode in DevTools,
  ~430×930, then screen-record) so code fills the vertical frame and text is readable.
- Do NOT use actual film/KBC audio clips — copyright flags kill reach. Use trending
  instrumental audio at low volume + text overlays doing the talking.
- End every Reel with the same closing frame: "Write your own → link in bio 🎬"

**Reel 1 — the premise (launch day)**
Hook text: "A programming language where every keyword is an Amitabh Bachchan film"
Shot list: typing `LIGHTS` ⏎ `CAMERA` ⏎ → cut → `BOLO "Namaste, Duniya!"` → cut → `ACTION` →
run → output appears. Overlay labels as each keyword lands: "programs literally start with
LIGHTS CAMERA… and end with ACTION."
Caption: "It's real. It's Turing complete. And it runs in your browser. 🎬 #AmitabhBachchan #coding"

**Reel 2 — the errors (day 2, strongest viral candidate)**
Hook text: "This programming language's error messages are Amitabh Bachchan dialogues"
Shot list: use an undefined variable → error slams in: "Don ko pakadna mushkil hi nahi,
naamumkin hai!" → divide by zero → "Zero se divide kaise kar sakte hain?" → reassign a DON
constant → "Main aaj bhi phenke hue paise nahin uthata!" Three errors, three beats, done.
Caption: "Debugging has never been this dramatic. Which dialogue should be the next error message? 👇"

**Reel 3 — KBC (day 3; if KBC is airing, post at broadcast time)**
Hook text: "I turned Kaun Banega Crorepati into a programming language feature"
Shot list: the switch-case typed out — `KBC_SAWAAL answer` / `OPTION "Delhi"` /
`COMPUTER_JI_LOCK_KIYA_JAYE` → run → lifelines fire: `AUDIENCE_POLL`, `PHONE_A_FRIEND "Computer Ji"`.
Overlay: "yes, LIFELINE_FIFTY_FIFTY is a real statement."
Caption: "Computer ji, lock kiya jaye 💻💰 #KBC"

**Reel 4 — booleans meme (day 4, lowest effort)**
Static-ish Reel (3 text cards, 12s):
"true = SHAKTI / false = KAALIA / null = LAAWARIS" → beat → "naming booleans after
Amitabh Bachchan films is the most 1970s thing a programming language has ever done."
Caption: poll bait — "What should `undefined` be called? Wrong answers only 👇"

**Reel 5 — the bridge audience (day 5)**
Hook text: "Teaching my parents what I do, using Amitabh Bachchan"
Shot list: split premise — "they don't get `print()`… but they get BOLO. They don't get
`if/else`… but they get AGAR / NAHI TOH." End on a full tiny program running.
This one is engineered for shares outside tech circles — the caption invites tagging:
"Tag someone who'd finally understand your job 😄"

---

## THE CAROUSEL (day 6 — carousels still work for saves)

10 slides, 1080×1350, "Learn the Bollywood programming language in 60 seconds":
1. Cover: "Every keyword is an Amitabh Bachchan film 🎬"
2. Program structure: LIGHTS / CAMERA / ACTION
3. BOLO = print, SUNO = input
4. VIJAY = variable, DON = constant (with the DON error dialogue)
5. AGAR / NAHI TOH = if / else
6. The four loops (BAAR BAAR, JAB TAK, HAR EK, ZANJEER_LOOP)
7. try/catch = AGNEEPATH / MRITYU 🔥
8. The KBC switch-case
9. The six film-title libraries (SHAHENSHAH strings, COOLIE math…)
10. "Free, open source, runs in your browser → link in bio"

Slides 2–9 are literally your cheatsheet.md content restyled — one concept per slide,
code in big type, film reference underneath. Saves + shares on this compound for months;
this is the post to pin.

---

## HASHTAGS & TIMING

- 4–6 per post, mixed reach tiers, e.g.:
  `#AmitabhBachchan #Bollywood #coding #programminghumor #developersofindia #techindia`
- Reel 3 adds `#KBC`; Hindi-caption variants add `#देसी`.
- Post 6–9pm IST (Instagram India prime time). Reels keep earning for ~48h — don't post two on the same day.
- Stories daily during launch week: reshare the Reel + a poll sticker ("Which film should be
  the next keyword?") — polls train the algorithm that your audience engages.

## GROWTH MECHANICS

- **Collab posts are Instagram's superpower**: invite a dev-meme or Bollywood-meme page as
  co-author on Reel 2 — one accepted collab puts you in front of their entire audience.
  Work the DMs: meme pages accept funny, finished content constantly.
- Reply to every comment with a comment (not a like) for the first 2 hours.
- Cross-post every Reel unchanged to **YouTube Shorts** and **Facebook Reels** — free distribution,
  same file. Post the X version as native video too.
- The share-to-X button in the IDE has no Instagram equivalent (IG has no web post intent) —
  instead, end Reels with "screenshot your program and tag @amitabhc.lang, best one gets
  featured in Stories." User-generated content is the Instagram viral loop.
- **October 11 — Bachchan's birthday**: your Super Bowl. #HappyBirthdayAmitabhBachchan trends
  every year. Prepare a dedicated Reel ("I built him a programming language for his birthday")
  and post it in the morning IST as the hashtag starts trending.

## WHAT NOT TO DO

- Don't post the 16:9 X cards as-is — cropped, low reach, looks like a repost.
- Don't use film audio/clips — copyright strike or muted Reel.
- Don't put the URL in captions (not clickable) — always "link in bio".
- Don't tag @amitabhbachchan on the launch posts — same rule as X: one respectful
  dedicated post later, only if traction is real.
