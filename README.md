# copilot-agentes-kit

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


**ðŸ‡§ðŸ‡· [PortuguÃªs](README.md) Â· ðŸ‡ºðŸ‡¸ [English](README.en.md) Â· ðŸ‡ªðŸ‡¸ [EspaÃ±ol](README.es.md)**

Kit prÃ¡tico de **Copilot + Agentes para Empresas**: os modelos que a pessoa copia e usa no
trabalho (canvas, prompts, instruÃ§Ãµes de agente, fluxos, checklists de integraÃ§Ã£o e governanÃ§a,
fichas de indicador, plano de trÃªs fases) e duas **ferramentas de verificaÃ§Ã£o** para cursos ARCKHÉ
no formato v5 (verificador por aula e teste headless do motor).

Nasceu do curso [Copilot + Agentes para Empresas](https://linnoff88-dev.github.io/
(ARCKHÉ AI PRO, 9 aulas, formato v5). O curso ensina; este repo entrega o que se leva para a
segunda-feira.

- Guia de uso (pÃ¡gina): https://linnoff88-dev.github.io/
- Curso de origem: https://linnoff88-dev.github.io/

---

## 1. O kit (`kit/`) â€” modelos para o trabalho

Todos em markdown, em portuguÃªs, sem cÃ³digo. Copie o bloco, troque o que estÃ¡ entre `< >`.

| Arquivo | O que Ã© | Quando usar |
|---|---|---|
| [10-os-cinco-degraus.md](kit/10-os-cinco-degraus.md) | os cinco degraus (usuÃ¡rio â†’ automatizador), o modelo mental Pessoa â†’ Agente â†’ Sistemas, a cadeia que se automatiza, o filtro das trÃªs primeiras tarefas | no comeÃ§o, para situar o prÃ³prio trabalho |
| [02-prompts-copilot-dia-a-dia.md](kit/02-prompts-copilot-dia-a-dia.md) | prompts para o Microsoft 365 Copilot: busca que cruza fontes, e-mail longo â†’ decidido/pendente/quem nÃ£o respondeu, reuniÃ£o â†’ decisÃµes/responsÃ¡veis/prazos, documento e apresentaÃ§Ã£o com pÃºblico e tempo; checklist do pÃ³s-reuniÃ£o | todo dia, no Teams/Outlook/Word/PowerPoint |
| [03-prompts-dados-que-explicam.md](kit/03-prompts-dados-que-explicam.md) | prompts para Excel, Analyst e Researcher: variaÃ§Ã£o e fatores, hipÃ³tese testÃ¡vel entre arquivos, pesquisa que junta dentro e fora; as trÃªs conferÃªncias de 2 minutos | antes de levar um nÃºmero para a reuniÃ£o |
| [01-canvas-automacao-com-agentes.md](kit/01-canvas-automacao-com-agentes.md) | o canvas de nove campos (processo, objetivo, entradas, conhecimento, decisÃµes âœ±, aÃ§Ãµes, integraÃ§Ã£o, validaÃ§Ã£o, indicadores) com exemplo preenchido e a distribuiÃ§Ã£o agente/fluxo/tela/indicador | antes de construir qualquer automaÃ§Ã£o |
| [04-instrucoes-de-agente-copilot-studio.md](kit/04-instrucoes-de-agente-copilot-studio.md) | modelo de instruÃ§Ãµes (papel, escopo, regras, tom), checklist de criaÃ§Ã£o em 6 passos, manutenÃ§Ã£o semanal | ao criar um agente no Copilot Studio |
| [05-fluxos-power-automate.md](kit/05-fluxos-power-automate.md) | anatomia de trÃªs fluxos: aprovaÃ§Ã£o, documento vencendo, ocorrÃªncia chamada pelo agente; divisÃ£o de trabalho agente/fluxo/dados/indicador | ao montar a camada que executa |
| [06-quatro-escolhas-e-checklist-de-tela.md](kit/06-quatro-escolhas-e-checklist-de-tela.md) | a regra das quatro escolhas (conector â†’ fluxo â†’ automaÃ§Ã£o de tela â†’ Computer Use), o cadastro de fornecedor de ponta a ponta, checklist antes de automatizar uma tela, caso com gabarito | quando o sistema nÃ£o tem porta de serviÃ§o |
| [07-governanca-e-lista-de-riscos.md](kit/07-governanca-e-lista-de-riscos.md) | as sete conferÃªncias antes de publicar, a lista de riscos onde a pessoa Ã© obrigatÃ³ria, o argumento para a diretoria, mini-caso do compartilhamento excessivo | antes de tirar qualquer agente do rascunho |
| [08-indicadores-meta-desvio-acao.md](kit/08-indicadores-meta-desvio-acao.md) | ficha de indicador (o que mede, fonte, meta, dono), pedido ao Copilot para explicar um desvio, painel mÃ­nimo em 5 passos, banco de indicadores por Ã¡rea, perguntas que um gestor deve poder fazer | ao montar ou enxugar um painel |
| [09-plano-de-tres-fases-e-roadmap.md](kit/09-plano-de-tres-fases-e-roadmap.md) | plano protÃ³tipo â†’ execuÃ§Ã£o â†’ escala com critÃ©rio de pronto, exemplo de 14 semanas, os quatro laboratÃ³rios, casos por departamento, roadmap de nove fases da empresa | para apresentar o primeiro projeto a quem decide |

**Ordem sugerida para um primeiro projeto:** 10 â†’ 01 â†’ 04 â†’ 05 â†’ 06 â†’ 08 â†’ 07 â†’ 09. Os prompts
(02 e 03) entram no dia a dia desde o primeiro dia.

### Ferramentas Microsoft cobertas

Microsoft 365 Copilot (Chat, Outlook, Teams, Word, Excel, PowerPoint) Â· Analyst Â· Researcher Â·
Copilot Studio Â· Power Automate (fluxos de nuvem e de agente) Â· Power Automate Desktop Â·
Computer Use Â· SharePoint Â· Dataverse Â· Power BI com Copilot. Carimbo: set/2026 â€” nomes de botÃ£o e
disponibilidade variam por licenÃ§a e por empresa; a lÃ³gica nÃ£o.

---

## 2. As ferramentas (`tools/`) â€” verificaÃ§Ã£o de cursos ARCKHÉ v5

Duas ferramentas que nasceram na produÃ§Ã£o do curso e servem para qualquer curso no formato v5
(e o teste do motor, tambÃ©m para v4).

### `tools/check-v5.py` â€” verificador por aula

LÃª um `curso.html` (ou, melhor, uma parte por aula) e imprime o que o portÃ£o do formato v5 exige:

- **tempo estimado** (palavras/200 + minutos da prÃ¡tica + 30 s por quiz, arredondado para cima) contra o `data-tempo` declarado;
- **jargÃ£o-sentinela** (JSON, terminal, Git, commit, pipeline, instalar, script, servidor, API, deploy, CLI, diretÃ³rio, plugin, encodingâ€¦) com o contexto ao redor, para conferir se hÃ¡ definiÃ§Ã£o com analogia;
- **cobertura de figuras**: `data-fig` dos steps â†” `.fig` da rail;
- **contagens**: promise, why, practice, psafe, recap-autor, next-action, cards, gterm, qerr, qbefore-after, qsteps, qapply, qanchor, data-kind, manifesto de completude, `[AUSENTE]`;
- **cartÃµes**: JSON vÃ¡lido, **anti-duplicaÃ§Ã£o recap â†” cartÃ£o** (sequÃªncia de 6 palavras em comum), cartÃ£o cuja frente nÃ£o Ã© pergunta;
- **regra de clÃ­max**: emoji e exclamaÃ§Ã£o dupla;
- frases muito longas na prosa.

```bash
python3 tools/check-v5.py curso.html
python3 tools/check-v5.py parts/01-aula.html parts/02-aula.html   # uma parte por aula (recomendado)
```

SÃ³ Python 3 padrÃ£o. NÃ£o altera nada; sÃ³ imprime.

Dica de fluxo: escreva cada aula num arquivo (`parts/NN-aula.html`), rode o verificador em cada
um ao fechar, e sÃ³ entÃ£o concatene (`cat parts/*.html > curso.html`). Assim o grep de jargÃ£o e o
teste de duplicaÃ§Ã£o recapâ†”cartÃ£o rodam em 300 linhas, nÃ£o em 2.500.

### `tools/browser-test.cjs` â€” teste headless do motor

Abre `curso.html` e `landing.html` em `file://` num Chromium sem janela e prova que o motor
(`curso.js`) estÃ¡ vivo:

fecha o onboarding Â· roteador por hash (`#trilha`, `#aula-N`) Â· statcards com tempo total Â·
`tempo-badge` apÃ³s a promessa Â· clone das figuras para o celular (`.mobfig`) Â· figura ativa e legenda
da rail Â· badge fundamento/ferramenta Â· quiz com feedback Â· checkbox da prÃ¡tica Â· "marcar como lido"
â†’ progresso Â· recap e reflexÃ£o injetados Â· prÃ¡tica em modo anÃ¡lise com `<details>` Â· painel jornada Â·
painel exercÃ­cios Â· troca de tema Â· persistÃªncia apÃ³s recarregar Â· celular sem scroll horizontal Â·
landing com os cards. Tira screenshots e lista erros de console.

```bash
npm i -D playwright && npx playwright install chromium
node tools/browser-test.cjs /caminho/do/curso [pasta-de-screenshots]
# ou apontando um playwright jÃ¡ instalado em outro lugar:
PLAYWRIGHT_DIR=/caminho/node_modules/playwright node tools/browser-test.cjs /caminho/do/curso
```

SaÃ­da esperada termina em `ERROS: nenhum`. Se algum item vier `AUSENTE`, `false` ou `0`, o
markup da aula nÃ£o estÃ¡ no contrato (ver `formato-curso-v5/SKILL.md`).

---

## 3. Como usar num curso novo (resumo do fluxo que gerou o curso de origem)

1. Escreva `parts/00-head.html` (cabeÃ§alho + view da trilha) e uma `parts/NN-aula.html` por aula.
2. Ao fechar cada aula: `python3 tools/check-v5.py parts/NN-aula.html` â†’ corrija atÃ© zerar avisos, ajuste o `data-tempo` para o estimado (ou acima) e sincronize o card da trilha.
3. Concatene em `curso.html`, escreva `landing.html`, `index.html` (redirect) e `.nojekyll`.
4. `node tools/browser-test.cjs .` â†’ `ERROS: nenhum`.
5. Capa via `capa-ARCKHÉ`, `git push`, GitHub Pages, catÃ¡logo via `atualiza-portal`.

---

## 4. Estrutura

```
copilot-agentes-kit/
â”œâ”€â”€ README.md
â”œâ”€â”€ kit/                 modelos em markdown (01â€“10)
â”œâ”€â”€ tools/
â”‚   â”œâ”€â”€ check-v5.py      verificador por aula (Python 3, sem dependÃªncias)
â”‚   â””â”€â”€ browser-test.cjs teste headless do motor (Playwright)
â”œâ”€â”€ guia/                pÃ¡gina landing + guia de uso (GitHub Pages)
â””â”€â”€ capa/capa.png        capa oficial 1280Ã—720
```

## 5. Origem e licenÃ§a

ConteÃºdo derivado da formaÃ§Ã£o "Copilot + Agentes para Empresas â€” Do trabalho com IA Ã  automaÃ§Ã£o
dos processos corporativos" (ARCKHÉ, set/2026). Material de pesquisa e ensino; os casos (tÃ©cnica de
seguranÃ§a do trabalho, analista de compras, gestora de RH, coordenador financeiro) sÃ£o fictÃ­cios.
ReferÃªncias oficiais: [Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365-copilot/) Â·
[Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/) Â·
[Power Automate](https://learn.microsoft.com/power-automate/) Â·
[Power Automate Desktop](https://learn.microsoft.com/power-automate/desktop-flows/) Â·
[Power BI Copilot](https://learn.microsoft.com/power-bi/create-reports/copilot-introduction).

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>