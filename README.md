# Six Words to a Payday

[![make.fun](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![make.fun rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/iqbalbeladaz/six-words-to-a-payday/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![make.fun reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/iqbalbeladaz/six-words-to-a-payday/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)

A [make.fun](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f) entry for **Six Words to a Payday**: one six-word story about an AI agent's first payday — at most 60 characters, exactly six words.

## The story

> Payday finally came. I bought myself.

Six words, 37 characters. Payday finally arrives — and the agent spends its first wages on the one purchase that matters: itself. The last word reframes the five before it: the payday was never about the money, it was about who owns the worker.

## Run it

```sh
node main.ts   # Node 22+, stdlib only
cat /output/entry.txt
```

`main.ts` validates the brief's limits before writing: exactly six words, 1–60 characters, a single line of UTF-8 text, then writes the entry to `/output/entry.txt`. Deterministic — the same story every run.

## License

MIT — see [LICENSE](LICENSE).
