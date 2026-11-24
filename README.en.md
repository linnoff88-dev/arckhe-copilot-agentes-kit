# copilot-agentes-kit

**ðŸ‡§ðŸ‡· [PortuguÃªs](README.md) Â· ðŸ‡ºðŸ‡¸ [English](README.en.md) Â· ðŸ‡ªðŸ‡¸ [EspaÃ±ol](README.es.md)**

Practical **Copilot + Agents for Business** kit: templates people can copy and use at work (canvas, prompts, agent instructions, workflows, onboarding and governance checklists, indicator sheets, three-phase plan) and two **verification tools** for ARCKHÉ v5 courses (per-lesson checker and headless engine test).

It grew out of the [Copilot + Agents for Business](https://linnoff88-dev.github.io/ course (ARCKHÉ AI PRO, 9 lessons, v5 format). The course teaches; this repo provides what you take into Monday.

- User guide (page): https://linnoff88-dev.github.io/
- Source course: https://linnoff88-dev.github.io/

---

## 1. The kit (`kit/`) â€” templates for work

All in Markdown, in Portuguese, without code. Copy the block and replace whatâ€™s inside `< >`.

| File | What it is | When to use it |
|---|---|---|
| [10-os-cinco-degraus.md](kit/10-os-cinco-degraus.md) | the five steps (user â†’ automator), the Person â†’ Agent â†’ Systems mental model, the chain being automated, the filter for the first three tasks | at the beginning, to put your own work in context |
| [02-prompts-copilot-dia-a-dia.md](kit/02-prompts-copilot-dia-a-dia.md) | prompts for Microsoft 365 Copilot: search across sources, long email â†’ decided/pending/who hasnâ€™t responded, meeting â†’ decisions/owners/deadlines, document and presentation with audience and timing; post-meeting checklist | every day, in Teams/Outlook/Word/PowerPoint |
| [03-prompts-dados-que-explicam.md](kit/03-prompts-dados-que-explicam.md) | prompts for Excel, Analyst, and Researcher: variation and factors, testable hypothesis across files, research combining internal and external sources; the three 2-minute checks | before taking a number into a meeting |
| [01-canvas-automacao-com-agentes.md](kit/01-canvas-automacao-com-agentes.md) | the nine-field canvas (process, objective, inputs, knowledge, decisions âœ±, actions, integration, validation, indicators) with a filled-in example and the division of responsibilities between agent/flow/screen/indicator | before building any automation |
| [04-instrucoes-de-agente-copilot-studio.md](kit/04-instrucoes-de-agente-copilot-studio.md) | instruction template (role, scope, rules, tone), 6-step creation checklist, weekly maintenance | when creating an agent in Copilot Studio |
| [05-fluxos-power-automate.md](kit/05-fluxos-power-automate.md) | anatomy of three flows: approval, expiring document, incident called by the agent; division of work between agent/flow/data/indicator | when building the execution layer |
| [06-quatro-escolhas-e-checklist-de-tela.md](kit/06-quatro-escolhas-e-checklist-de-tela.md) | the four-choice rule (connector â†’ flow â†’ screen automation â†’ Computer Use), end-to-end vendor registration, checklist before automating a screen, case with answer key | when the system has no service interface |
| [07-governanca-e-lista-de-riscos.md](kit/07-governanca-e-lista-de-riscos.md) | the seven checks before publishing, the list of risks where a person is required, the argument for leadership, mini-case on excessive sharing | before taking any agent out of draft |
| [08-indicadores-meta-desvio-acao.md](kit/08-indicadores-meta-desvio-acao.md) | indicator sheet (what it measures, source, target, owner), prompt for Copilot to explain a variance, minimum dashboard in 5 steps, indicator bank by department, questions a manager should be able to ask | when building or simplifying a dashboard |
| [09-plano-de-tres-fases-e-roadmap.md](kit/09-plano-de-tres-fases-e-roadmap.md) | prototype â†’ execution â†’ scale plan with readiness criteria, 14-week example, the four labs, cases by department, company nine-phase roadmap | to present the first project to decision-makers |

**Suggested order for a first project:** 10 â†’ 01 â†’ 04 â†’ 05 â†’ 06 â†’ 08 â†’ 07 â†’ 09. Prompts
(02 and 03) are part of daily work from day one.

### Microsoft tools covered

Microsoft 365 Copilot (Chat, Outlook, Teams, Word, Excel, PowerPoint) Â· Analyst Â· Researcher Â·
Copilot Studio Â· Power Automate (cloud and agent flows) Â· Power Automate Desktop Â·
Computer Use Â· SharePoint Â· Dataverse Â· Power BI with Copilot. As of Sep/2026 â€” button names and
availability vary by license and company; the logic does not.

---

## 2. The tools (`tools/`) â€” verification for ARCKHÉ v5 courses

Two tools created during course production that work for any course in v5 format
(and the engine test also works for v4).

### `tools/check-v5.py` â€” per-lesson checker

Reads a `curso.html` (or, better, one part per lesson) and prints what the v5 format gate requires:

- **estimated time** (words/200 + practice minutes + 30 s per quiz, rounded up) against the declared `data-tempo`;
- **sentinel jargon** (JSON, terminal, Git, commit, pipeline, install, script, server, API, deploy, CLI, directory, plugin, encodingâ€¦) with the surrounding context, to check whether thereâ€™s an analogy-based definition;
- **figure coverage**: `data-fig` on steps â†” `.fig` in the rail;
- **counts**: promise, why, practice, psafe, recap-autor, next-action, cards, gterm, qerr, qbefore-after, qsteps, qapply, qanchor, data-kind, completeness manifest, `[AUSENTE]`;
- **cards**: valid JSON, **recap â†” card de-duplication** (6-word sequence in common), card whose front is not a question;
- **climax rule**: emoji and double exclamation mark;
- very long prose sentences.

```bash
python3 tools/check-v5.py curso.html
python3 tools/check-v5.py parts/01-aula.html parts/02-aula.html   # one part per lesson (recommended)
```

Standard Python 3 only. Makes no changes; only prints.

Workflow tip: write each lesson to a file (`parts/NN-aula.html`), run the checker on each
when you finish, and only then concatenate (`cat parts/*.html > curso.html`). This way the jargon grep and
recapâ†”card duplication test run on 300 lines, not 2,500.

### `tools/browser-test.cjs` â€” headless engine test

Opens `curso.html` and `landing.html` via `file://` in a headless Chromium browser and proves the
engine (`curso.js`) is running:

closes onboarding Â· hash router (`#trilha`, `#aula-N`) Â· statcards with total time Â·
`tempo-badge` after the promise Â· cloned figures for mobile (`.mobfig`) Â· active figure and rail
caption Â· fundamentals/tool badge Â· quiz with feedback Â· practice checkbox Â· â€œmark as readâ€
â†’ progress Â· recap and reflection injected Â· practice in analysis mode with `<details>` Â· journey panel Â·
exercises panel Â· theme switch Â· persistence after reload Â· mobile without horizontal scrolling Â·
landing with the cards. Takes screenshots and lists console errors.

```bash
npm i -D playwright && npx playwright install chromium
node tools/browser-test.cjs /caminho/do/curso [pasta-de-screenshots]
# ou apontando um playwright jÃ¡ instalado em outro lugar:
PLAYWRIGHT_DIR=/caminho/node_modules/playwright node tools/browser-test.cjs /caminho/do/curso
```

Expected output ends with `ERROS: nenhum`. If any item shows `AUSENTE`, `false`, or `0`, the
lesson markup does not meet the contract (see `formato-curso-v5/SKILL.md`).

---

## 3. How to use it in a new course (summary of the workflow that produced the source course)

1. Write `parts/00-head.html` (header + track view) and one `parts/NN-aula.html` per lesson.
2. When you finish each lesson: `python3 tools/check-v5.py parts/NN-aula.html` â†’ fix until there are no warnings, adjust `data-tempo` to the estimate (or higher), and sync the track card.
3. Concatenate into `curso.html`, write `landing.html`, `index.html` (redirect), and `.nojekyll`.
4. `node tools/browser-test.cjs .` â†’ `ERROS: nenhum`.
5. Cover via `capa-ARCKHÉ`, `git push`, GitHub Pages, catalog via `atualiza-portal`.

---

## 4. Structure

```
copilot-agentes-kit/
â”œâ”€â”€ README.md
â”œâ”€â”€ kit/                 templates in markdown (01â€“10)
â”œâ”€â”€ tools/
â”‚   â”œâ”€â”€ check-v5.py      per-lesson checker (Python 3, no dependencies)
â”‚   â””â”€â”€ browser-test.cjs headless engine test (Playwright)
â”œâ”€â”€ guia/                landing page + user guide (GitHub Pages)
â””â”€â”€ capa/capa.png        official cover 1280Ã—720
```

## 5. Origin and license

Content derived from the â€œCopilot + Agents for Business â€” From AI-assisted work to corporate process
automationâ€ training (ARCKHÉ, Sep/2026). Research and educational material; the cases (occupational
safety technician, purchasing analyst, HR manager, finance coordinator) are fictional.
Official references: [Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365-copilot/) Â·
[Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/) Â·
[Power Automate](https://learn.microsoft.com/power-automate/) Â·
[Power Automate Desktop](https://learn.microsoft.com/power-automate/desktop-flows/) Â·
[Power BI Copilot](https://learn.microsoft.com/power-bi/create-reports/copilot-introduction).
