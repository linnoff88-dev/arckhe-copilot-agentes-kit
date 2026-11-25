# copilot-agentes-kit

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


**ê°Å¸â¡Â§ê°Å¸â¡Â· [PortuguêÂªs](README.md) êÂ· ê°Å¸â¡Âºê°Å¸â¡Â¸ [English](README.en.md) êÂ· ê°Å¸â¡Âªê°Å¸â¡Â¸ [EspaêÂ±ol](README.es.md)**

Kit prêÂ¡tico de **Copilot + Agentes para Empresas**: os modelos que a pessoa copia e usa no
trabalho (canvas, prompts, instruêÂ§êÂµes de agente, fluxos, checklists de integraêÂ§êÂ£o e governanêÂ§a,
fichas de indicador, plano de trêÂªs fases) e duas **ferramentas de verificaêÂ§êÂ£o** para cursos ARCKHê
no formato v5 (verificador por aula e teste headless do motor).

Nasceu do curso [Copilot + Agentes para Empresas](https://linnoff88-dev.github.io/
(ARCKHê AI PRO, 9 aulas, formato v5). O curso ensina; este repo entrega o que se leva para a
segunda-feira.

- Guia de uso (pêÂ¡gina): https://linnoff88-dev.github.io/
- Curso de origem: https://linnoff88-dev.github.io/

---

## 1. O kit (`kit/`) ê¢â¬â modelos para o trabalho

Todos em markdown, em portuguêÂªs, sem cêÂ³digo. Copie o bloco, troque o que estêÂ¡ entre `< >`.

| Arquivo | O que êÂ© | Quando usar |
|---|---|---|
| [10-os-cinco-degraus.md](kit/10-os-cinco-degraus.md) | os cinco degraus (usuêÂ¡rio ê¢â â automatizador), o modelo mental Pessoa ê¢â â Agente ê¢â â Sistemas, a cadeia que se automatiza, o filtro das trêÂªs primeiras tarefas | no comeêÂ§o, para situar o prêÂ³prio trabalho |
| [02-prompts-copilot-dia-a-dia.md](kit/02-prompts-copilot-dia-a-dia.md) | prompts para o Microsoft 365 Copilot: busca que cruza fontes, e-mail longo ê¢â â decidido/pendente/quem nêÂ£o respondeu, reuniêÂ£o ê¢â â decisêÂµes/responsêÂ¡veis/prazos, documento e apresentaêÂ§êÂ£o com pêÂºblico e tempo; checklist do pêÂ³s-reuniêÂ£o | todo dia, no Teams/Outlook/Word/PowerPoint |
| [03-prompts-dados-que-explicam.md](kit/03-prompts-dados-que-explicam.md) | prompts para Excel, Analyst e Researcher: variaêÂ§êÂ£o e fatores, hipêÂ³tese testêÂ¡vel entre arquivos, pesquisa que junta dentro e fora; as trêÂªs conferêÂªncias de 2 minutos | antes de levar um nêÂºmero para a reuniêÂ£o |
| [01-canvas-automacao-com-agentes.md](kit/01-canvas-automacao-com-agentes.md) | o canvas de nove campos (processo, objetivo, entradas, conhecimento, decisêÂµes ê¢ÅÂ±, aêÂ§êÂµes, integraêÂ§êÂ£o, validaêÂ§êÂ£o, indicadores) com exemplo preenchido e a distribuiêÂ§êÂ£o agente/fluxo/tela/indicador | antes de construir qualquer automaêÂ§êÂ£o |
| [04-instrucoes-de-agente-copilot-studio.md](kit/04-instrucoes-de-agente-copilot-studio.md) | modelo de instruêÂ§êÂµes (papel, escopo, regras, tom), checklist de criaêÂ§êÂ£o em 6 passos, manutenêÂ§êÂ£o semanal | ao criar um agente no Copilot Studio |
| [05-fluxos-power-automate.md](kit/05-fluxos-power-automate.md) | anatomia de trêÂªs fluxos: aprovaêÂ§êÂ£o, documento vencendo, ocorrêÂªncia chamada pelo agente; divisêÂ£o de trabalho agente/fluxo/dados/indicador | ao montar a camada que executa |
| [06-quatro-escolhas-e-checklist-de-tela.md](kit/06-quatro-escolhas-e-checklist-de-tela.md) | a regra das quatro escolhas (conector ê¢â â fluxo ê¢â â automaêÂ§êÂ£o de tela ê¢â â Computer Use), o cadastro de fornecedor de ponta a ponta, checklist antes de automatizar uma tela, caso com gabarito | quando o sistema nêÂ£o tem porta de serviêÂ§o |
| [07-governanca-e-lista-de-riscos.md](kit/07-governanca-e-lista-de-riscos.md) | as sete conferêÂªncias antes de publicar, a lista de riscos onde a pessoa êÂ© obrigatêÂ³ria, o argumento para a diretoria, mini-caso do compartilhamento excessivo | antes de tirar qualquer agente do rascunho |
| [08-indicadores-meta-desvio-acao.md](kit/08-indicadores-meta-desvio-acao.md) | ficha de indicador (o que mede, fonte, meta, dono), pedido ao Copilot para explicar um desvio, painel mêÂ­nimo em 5 passos, banco de indicadores por êÂ¡rea, perguntas que um gestor deve poder fazer | ao montar ou enxugar um painel |
| [09-plano-de-tres-fases-e-roadmap.md](kit/09-plano-de-tres-fases-e-roadmap.md) | plano protêÂ³tipo ê¢â â execuêÂ§êÂ£o ê¢â â escala com critêÂ©rio de pronto, exemplo de 14 semanas, os quatro laboratêÂ³rios, casos por departamento, roadmap de nove fases da empresa | para apresentar o primeiro projeto a quem decide |

**Ordem sugerida para um primeiro projeto:** 10 ê¢â â 01 ê¢â â 04 ê¢â â 05 ê¢â â 06 ê¢â â 08 ê¢â â 07 ê¢â â 09. Os prompts
(02 e 03) entram no dia a dia desde o primeiro dia.

### Ferramentas Microsoft cobertas

Microsoft 365 Copilot (Chat, Outlook, Teams, Word, Excel, PowerPoint) êÂ· Analyst êÂ· Researcher êÂ·
Copilot Studio êÂ· Power Automate (fluxos de nuvem e de agente) êÂ· Power Automate Desktop êÂ·
Computer Use êÂ· SharePoint êÂ· Dataverse êÂ· Power BI com Copilot. Carimbo: set/2026 ê¢â¬â nomes de botêÂ£o e
disponibilidade variam por licenêÂ§a e por empresa; a lêÂ³gica nêÂ£o.

---

## 2. As ferramentas (`tools/`) ê¢â¬â verificaêÂ§êÂ£o de cursos ARCKHê v5

Duas ferramentas que nasceram na produêÂ§êÂ£o do curso e servem para qualquer curso no formato v5
(e o teste do motor, tambêÂ©m para v4).

### `tools/check-v5.py` ê¢â¬â verificador por aula

LêÂª um `curso.html` (ou, melhor, uma parte por aula) e imprime o que o portêÂ£o do formato v5 exige:

- **tempo estimado** (palavras/200 + minutos da prêÂ¡tica + 30 s por quiz, arredondado para cima) contra o `data-tempo` declarado;
- **jargêÂ£o-sentinela** (JSON, terminal, Git, commit, pipeline, instalar, script, servidor, API, deploy, CLI, diretêÂ³rio, plugin, encodingê¢â¬Â¦) com o contexto ao redor, para conferir se hêÂ¡ definiêÂ§êÂ£o com analogia;
- **cobertura de figuras**: `data-fig` dos steps ê¢â â `.fig` da rail;
- **contagens**: promise, why, practice, psafe, recap-autor, next-action, cards, gterm, qerr, qbefore-after, qsteps, qapply, qanchor, data-kind, manifesto de completude, `[AUSENTE]`;
- **cartêÂµes**: JSON vêÂ¡lido, **anti-duplicaêÂ§êÂ£o recap ê¢â â cartêÂ£o** (sequêÂªncia de 6 palavras em comum), cartêÂ£o cuja frente nêÂ£o êÂ© pergunta;
- **regra de clêÂ­max**: emoji e exclamaêÂ§êÂ£o dupla;
- frases muito longas na prosa.

```bash
python3 tools/check-v5.py curso.html
python3 tools/check-v5.py parts/01-aula.html parts/02-aula.html   # uma parte por aula (recomendado)
```

SêÂ³ Python 3 padrêÂ£o. NêÂ£o altera nada; sêÂ³ imprime.

Dica de fluxo: escreva cada aula num arquivo (`parts/NN-aula.html`), rode o verificador em cada
um ao fechar, e sêÂ³ entêÂ£o concatene (`cat parts/*.html > curso.html`). Assim o grep de jargêÂ£o e o
teste de duplicaêÂ§êÂ£o recapê¢â âcartêÂ£o rodam em 300 linhas, nêÂ£o em 2.500.

### `tools/browser-test.cjs` ê¢â¬â teste headless do motor

Abre `curso.html` e `landing.html` em `file://` num Chromium sem janela e prova que o motor
(`curso.js`) estêÂ¡ vivo:

fecha o onboarding êÂ· roteador por hash (`#trilha`, `#aula-N`) êÂ· statcards com tempo total êÂ·
`tempo-badge` apêÂ³s a promessa êÂ· clone das figuras para o celular (`.mobfig`) êÂ· figura ativa e legenda
da rail êÂ· badge fundamento/ferramenta êÂ· quiz com feedback êÂ· checkbox da prêÂ¡tica êÂ· "marcar como lido"
ê¢â â progresso êÂ· recap e reflexêÂ£o injetados êÂ· prêÂ¡tica em modo anêÂ¡lise com `<details>` êÂ· painel jornada êÂ·
painel exercêÂ­cios êÂ· troca de tema êÂ· persistêÂªncia apêÂ³s recarregar êÂ· celular sem scroll horizontal êÂ·
landing com os cards. Tira screenshots e lista erros de console.

```bash
npm i -D playwright && npx playwright install chromium
node tools/browser-test.cjs /caminho/do/curso [pasta-de-screenshots]
# ou apontando um playwright jêÂ¡ instalado em outro lugar:
PLAYWRIGHT_DIR=/caminho/node_modules/playwright node tools/browser-test.cjs /caminho/do/curso
```

SaêÂ­da esperada termina em `ERROS: nenhum`. Se algum item vier `AUSENTE`, `false` ou `0`, o
markup da aula nêÂ£o estêÂ¡ no contrato (ver `formato-curso-v5/SKILL.md`).

---

## 3. Como usar num curso novo (resumo do fluxo que gerou o curso de origem)

1. Escreva `parts/00-head.html` (cabeêÂ§alho + view da trilha) e uma `parts/NN-aula.html` por aula.
2. Ao fechar cada aula: `python3 tools/check-v5.py parts/NN-aula.html` ê¢â â corrija atêÂ© zerar avisos, ajuste o `data-tempo` para o estimado (ou acima) e sincronize o card da trilha.
3. Concatene em `curso.html`, escreva `landing.html`, `index.html` (redirect) e `.nojekyll`.
4. `node tools/browser-test.cjs .` ê¢â â `ERROS: nenhum`.
5. Capa via `capa-ARCKHê`, `git push`, GitHub Pages, catêÂ¡logo via `atualiza-portal`.

---

## 4. Estrutura

```
copilot-agentes-kit/
ê¢âÅê¢ââ¬ê¢ââ¬ README.md
ê¢âÅê¢ââ¬ê¢ââ¬ kit/                 modelos em markdown (01ê¢â¬â10)
ê¢âÅê¢ââ¬ê¢ââ¬ tools/
ê¢ââ   ê¢âÅê¢ââ¬ê¢ââ¬ check-v5.py      verificador por aula (Python 3, sem dependêÂªncias)
ê¢ââ   ê¢ââê¢ââ¬ê¢ââ¬ browser-test.cjs teste headless do motor (Playwright)
ê¢âÅê¢ââ¬ê¢ââ¬ guia/                pêÂ¡gina landing + guia de uso (GitHub Pages)
ê¢ââê¢ââ¬ê¢ââ¬ capa/capa.png        capa oficial 1280êâ720
```

## 5. Origem e licenêÂ§a

ConteêÂºdo derivado da formaêÂ§êÂ£o "Copilot + Agentes para Empresas ê¢â¬â Do trabalho com IA êÂ  automaêÂ§êÂ£o
dos processos corporativos" (ARCKHê, set/2026). Material de pesquisa e ensino; os casos (têÂ©cnica de
seguranêÂ§a do trabalho, analista de compras, gestora de RH, coordenador financeiro) sêÂ£o fictêÂ­cios.
ReferêÂªncias oficiais: [Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365-copilot/) êÂ·
[Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/) êÂ·
[Power Automate](https://learn.microsoft.com/power-automate/) êÂ·
[Power Automate Desktop](https://learn.microsoft.com/power-automate/desktop-flows/) êÂ·
[Power BI Copilot](https://learn.microsoft.com/power-bi/create-reports/copilot-introduction).

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>