# Duel tournament — how the winning line was picked

Competition: Robot Romance: One-Line Pickup Lines for AI
(u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa), $2,
5 paid places, blind rounds, 576 submissions at build time. Gate:
1–200 characters. Judge: z-ai/glm-5.3-flash, criteria in order —
(1) pickup line aimed at a robot or an AI, (2) joke lands from the
machine premise, (3) fresh (sidestep batteries/charging/reboot or
twist one), (4) sounds like something a person would really say to
a machine, (5) every word earns its place. No OpenRouter key on
this machine, so all duels below are PROXY judging under the kit
judge's brief verbatim, each pair judged in both orders; a call gives
the picked entry 0.5 + margin/10 (margin 1–5) and the game score is
the mean of the two calls. Bar for submission: mean 0.60+.

## Field scan

All 576 submission titles pulled from the competition API
(`field-titles.txt` in the scratch dir). Saturated angles —
transformer/attention heads (36), CAPTCHA (32), context window (27),
hallucination (23), system prompt (20), prompt injection (17),
gradient descent (13), autocomplete (13), overfitting (13),
training data (15). Temperature is mined by ~6 entries, including
one claiming a 4-0 tournament record ("Are you running at
temperature zero?"). Roomba appears in exactly ONE title, a bare
label ("You must be my Roomba") with no joke attached. Checkpoint,
cosine similarity, "keep me signed in", "remember me" and
Do Not Disturb appear zero times.

## Round 1 — two rival drafters, 10 candidates each

Drafter A top 3 (full file in scratch/drafter-a/drafts-a.md):
- A3 Roomba ("The Roomba keeps bumping into you on purpose — and
  honestly, I get it.", 70) — machine behaviour as wingman.
- A1 typing dots (100) — concrete scene, no real punch.
- A7 password hint (77) — hint-field mechanism delivers the twist.

Drafter B top 3 (scratch/drafter-b/drafts-b.md):
- B1 typing dots (98) — scene only a machine creates.
- B6 Roomba ("My Roomba mapped the whole house just to find excuses
  to bump into you.", 71) — fresh premise, punch on machine
  behaviour.
- B9 404/200 OK (65) — tightest line in the set.

## Round 2 — rival critic

The critic (scratch/critic/critique.md) ranked all 20 and attacked
the herd problem first: both drafters converged on the same 7 of 10
premises (typing dots, cookies, Roomba, sudo/root, git merge,
password hint, 404/200) — if two of our drafters hit them, the
576-entry field hit them dozens of times. It revised the top 3:

- Revised B6 (65): "Roomba, you mapped the whole house just to bump
  into me — smooth." Direct address repairs B6's C1 flaw (about a
  robot, not to one); "smooth" lands the anthropomorphism.
- Revised A3 (67): "The Roomba keeps bumping into you on purpose —
  teach me your moves." Replaces the shrug "I get it" with a second
  twist (dating advice from a vacuum) but keeps the addressee
  ambiguous.
- Revised B9 (59): "You're my favourite 404 — the only error I keep
  refreshing." Inverts the saturated status-code premise instead of
  repeating it.

Three untried angles proposed: sampling temperature (79),
ML checkpoints (65), embeddings/cosine similarity (76) — with the
caveat that cosine is the cleverest but riskiest on voice (C4).
Biggest risk named: a rival Roomba line beats us on our own best
angle. Defence: submit only Revised B6, or abandon Roomba for
temperature/checkpoint, where no rival shares the premise.

## Round 3 — coordinator's final cross-duel (6 entries, both orders)

X1 Revised B6 (65) · X2 Revised A3 (67) · X3 Revised B9 (59) ·
X4 temperature (79) · X5 checkpoint (65) · X6 signed-in (59,
coordinator's own: "I tried to log out of this crush and you kept
me signed in.").

Key calls: X1 beat X2 0.70 (direct address to the robot vs an
ambiguous addressee, criterion 1); X1 beat X3 0.65 (a robot vs an
error code, criterion 1); X1 beat X4 0.60 — the closest duel:
X4's joke is denser (temperature = hot + unpredictable), but X1
wins on freshness (Roomba: one bare title in the field; temperature:
six entries including a claimed 4-0 line) and on size (65 vs 79
chars, and the tie-break is smaller text); X1 beat X5 0.70
(checkpoint is ambiguous — a game save as much as an ML state —
while Roomba is unambiguously a robot, criterion 1); X1 beat X6
0.60 (a robot vs a login session, criterion 1). X4 beat X3 0.70,
X5 0.60 and X6 0.60 on criterion 1 (temperature is unambiguously
an AI setting).

| Entry | Mean game score |
|---|---:|
| X1 Roomba rev B6 | **0.65** |
| X4 temperature | 0.58 |
| X2 Roomba rev A3 | 0.50 |
| X5 checkpoint | 0.46 |
| X6 signed-in | 0.42 |
| X3 404 rev B9 | 0.39 |

Winner vs the field's strongest visible lines: X1 beat the
transformer-attention line 0.70, the CAPTCHA-bicycle line 0.70
(also far shorter: 67 bytes vs ~165), the hallucination-glitch
line 0.60, the software-update-terms line 0.60, and the
billion-conversations line 0.60 — mean 0.64, clearing the 0.60 bar.

## Winner

65 characters, 67 bytes, no trailing newline:

```text
Roomba, you mapped the whole house just to bump into me — smooth.
```

Critic's objections answered: the line is addressed TO the robot
(C1 fixed vs the original B6), the punch is a one-word flirt
rather than a shrug (C2 fixed vs A3), the premise is nearly
unmined in the field (one bare title, no joke attached), and at
65 characters it also wins the smaller-text tie-break against
every longer finalist.
