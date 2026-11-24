# copilot-agentes-kit

**ðŸ‡§ðŸ‡· [PortuguÃªs](README.md) Â· ðŸ‡ºðŸ‡¸ [English](README.en.md) Â· ðŸ‡ªðŸ‡¸ [EspaÃ±ol](README.es.md)**

Kit prÃ¡ctico de **Copilot + Agentes para Empresas**: los modelos que las personas copian y usan en el
trabajo (canvas, prompts, instrucciones para agentes, flujos, listas de verificaciÃ³n de incorporaciÃ³n y gobernanza,
fichas de indicadores, plan de tres fases) y dos **herramientas de verificaciÃ³n** para cursos ARCKHÉ
en formato v5 (verificador por lecciÃ³n y prueba headless del motor).

NaciÃ³ del curso [Copilot + Agentes para Empresas](https://linnoff88-dev.github.io/
(ARCKHÉ AI PRO, 9 lecciones, formato v5). El curso enseÃ±a; este repo entrega lo que se lleva al
lunes.

- GuÃ­a de uso (pÃ¡gina): https://linnoff88-dev.github.io/
- Curso de origen: https://linnoff88-dev.github.io/

---

## 1. El kit (`kit/`) â€” modelos para el trabajo

Todos en Markdown, en portuguÃ©s, sin cÃ³digo. Copia el bloque y reemplaza lo que estÃ¡ entre `< >`.

| Archivo | QuÃ© es | CuÃ¡ndo usarlo |
|---|---|---|
| [10-os-cinco-degraus.md](kit/10-os-cinco-degraus.md) | los cinco escalones (usuario â†’ automatizador), el modelo mental Persona â†’ Agente â†’ Sistemas, la cadena que se automatiza, el filtro de las tres primeras tareas | al comienzo, para situar el propio trabajo |
| [02-prompts-copilot-dia-a-dia.md](kit/02-prompts-copilot-dia-a-dia.md) | prompts para Microsoft 365 Copilot: bÃºsqueda que cruza fuentes, correo largo â†’ decidido/pendiente/quiÃ©n no respondiÃ³, reuniÃ³n â†’ decisiones/responsables/plazos, documento y presentaciÃ³n con pÃºblico y tiempo; lista de verificaciÃ³n posterior a la reuniÃ³n | todos los dÃ­as, en Teams/Outlook/Word/PowerPoint |
| [03-prompts-dados-que-explicam.md](kit/03-prompts-dados-que-explicam.md) | prompts para Excel, Analyst y Researcher: variaciÃ³n y factores, hipÃ³tesis comprobable entre archivos, investigaciÃ³n que combina fuentes internas y externas; las tres comprobaciones de 2 minutos | antes de llevar un nÃºmero a la reuniÃ³n |
| [01-canvas-automacao-com-agentes.md](kit/01-canvas-automacao-com-agentes.md) | el canvas de nueve campos (proceso, objetivo, entradas, conocimiento, decisiones âœ±, acciones, integraciÃ³n, validaciÃ³n, indicadores) con ejemplo completado y la distribuciÃ³n agente/flujo/pantalla/indicador | antes de construir cualquier automatizaciÃ³n |
| [04-instrucoes-de-agente-copilot-studio.md](kit/04-instrucoes-de-agente-copilot-studio.md) | modelo de instrucciones (rol, alcance, reglas, tono), lista de verificaciÃ³n de creaciÃ³n en 6 pasos, mantenimiento semanal | al crear un agente en Copilot Studio |
| [05-fluxos-power-automate.md](kit/05-fluxos-power-automate.md) | anatomÃ­a de tres flujos: aprobaciÃ³n, documento por vencer, incidencia invocada por el agente; divisiÃ³n del trabajo agente/flujo/datos/indicador | al montar la capa que ejecuta |
| [06-quatro-escolhas-e-checklist-de-tela.md](kit/06-quatro-escolhas-e-checklist-de-tela.md) | la regla de las cuatro opciones (conector â†’ flujo â†’ automatizaciÃ³n de pantalla â†’ Computer Use), el registro de proveedores de principio a fin, lista de verificaciÃ³n antes de automatizar una pantalla, caso con respuestas | cuando el sistema no tiene una interfaz de servicio |
| [07-governanca-e-lista-de-riscos.md](kit/07-governanca-e-lista-de-riscos.md) | las siete comprobaciones antes de publicar, la lista de riesgos en los que la persona es obligatoria, el argumento para la direcciÃ³n, minicaso del uso compartido excesivo | antes de sacar cualquier agente del borrador |
| [08-indicadores-meta-desvio-acao.md](kit/08-indicadores-meta-desvio-acao.md) | ficha de indicador (quÃ© mide, fuente, meta, responsable), solicitud a Copilot para explicar una desviaciÃ³n, panel mÃ­nimo en 5 pasos, banco de indicadores por Ã¡rea, preguntas que un gerente debe poder hacer | al crear o simplificar un panel |
| [09-plano-de-tres-fases-e-roadmap.md](kit/09-plano-de-tres-fases-e-roadmap.md) | plan prototipo â†’ ejecuciÃ³n â†’ escala con criterio de finalizaciÃ³n, ejemplo de 14 semanas, los cuatro laboratorios, casos por departamento, hoja de ruta de nueve fases de la empresa | para presentar el primer proyecto a quienes toman decisiones |

**Orden sugerido para un primer proyecto:** 10 â†’ 01 â†’ 04 â†’ 05 â†’ 06 â†’ 08 â†’ 07 â†’ 09. Los prompts
(02 y 03) se incorporan al dÃ­a a dÃ­a desde el primer dÃ­a.

### Herramientas Microsoft cubiertas

Microsoft 365 Copilot (Chat, Outlook, Teams, Word, Excel, PowerPoint) Â· Analyst Â· Researcher Â·
Copilot Studio Â· Power Automate (flujos de nube y de agente) Â· Power Automate Desktop Â·
Computer Use Â· SharePoint Â· Dataverse Â· Power BI con Copilot. Fecha de referencia: sept/2026 â€” los nombres de los botones y
la disponibilidad varÃ­an segÃºn la licencia y la empresa; la lÃ³gica, no.

---

## 2. Las herramientas (`tools/`) â€” verificaciÃ³n de cursos ARCKHÉ v5

Dos herramientas que surgieron durante la producciÃ³n del curso y sirven para cualquier curso en formato v5
(y la prueba del motor tambiÃ©n sirve para v4).

### `tools/check-v5.py` â€” verificador por lecciÃ³n

Lee un `curso.html` (o, mejor, una parte por lecciÃ³n) e imprime lo que exige el control del formato v5:

- **tiempo estimado** (palabras/200 + minutos de prÃ¡ctica + 30 s por cuestionario, redondeado hacia arriba) frente al `data-tempo` declarado;
- **jerga centinela** (JSON, terminal, Git, commit, pipeline, instalar, script, servidor, API, deploy, CLI, directorio, plugin, encodingâ€¦) con el contexto alrededor, para comprobar si hay una definiciÃ³n con analogÃ­a;
- **cobertura de figuras**: `data-fig` de los steps â†” `.fig` de la rail;
- **recuentos**: promise, why, practice, psafe, recap-autor, next-action, cards, gterm, qerr, qbefore-after, qsteps, qapply, qanchor, data-kind, manifiesto de completitud, `[AUSENTE]`;
- **tarjetas**: JSON vÃ¡lido, **anti duplicaciÃ³n recap â†” tarjeta** (secuencia de 6 palabras en comÃºn), tarjeta cuyo frente no es una pregunta;
- **regla del clÃ­max**: emoji y doble signo de exclamaciÃ³n;
- frases muy largas en la prosa.

```bash
python3 tools/check-v5.py curso.html
python3 tools/check-v5.py parts/01-aula.html parts/02-aula.html   # una parte por aula (recomendado)
```

Solo Python 3 estÃ¡ndar. No modifica nada; solo imprime.

Sugerencia de flujo: escribe cada lecciÃ³n en un archivo (`parts/NN-aula.html`), ejecuta el verificador en cada
una al terminar, y solo entonces concatÃ©nalas (`cat parts/*.html > curso.html`). AsÃ­ la bÃºsqueda de jerga y la
prueba de duplicaciÃ³n recapâ†”tarjeta se ejecutan sobre 300 lÃ­neas, no sobre 2.500.

### `tools/browser-test.cjs` â€” prueba headless del motor

Abre `curso.html` y `landing.html` en `file://` en un Chromium sin ventana y comprueba que el motor
(`curso.js`) estÃ© activo:

cierra la incorporaciÃ³n Â· enrutador por hash (`#trilha`, `#aula-N`) Â· statcards con tiempo total Â·
`tempo-badge` despuÃ©s de la promesa Â· clon de las figuras para el celular (`.mobfig`) Â· figura activa y leyenda
de la rail Â· badge de fundamento/herramienta Â· cuestionario con comentarios Â· casilla de verificaciÃ³n de la prÃ¡ctica Â· Â«marcar como leÃ­doÂ»
â†’ progreso Â· recapitulaciÃ³n y reflexiÃ³n insertadas Â· prÃ¡ctica en modo anÃ¡lisis con `<details>` Â· panel de trayectoria Â·
panel de ejercicios Â· cambio de tema Â· persistencia despuÃ©s de recargar Â· celular sin desplazamiento horizontal Â·
landing con las tarjetas. Toma capturas de pantalla y enumera los errores de consola.

```bash
npm i -D playwright && npx playwright install chromium
node tools/browser-test.cjs /caminho/do/curso [pasta-de-screenshots]
# ou apontando um playwright jÃ¡ instalado em outro lugar:
PLAYWRIGHT_DIR=/caminho/node_modules/playwright node tools/browser-test.cjs /caminho/do/curso
```

La salida esperada termina en `ERROS: nenhum`. Si algÃºn elemento aparece como `AUSENTE`, `false` o `0`, el
markup de la lecciÃ³n no cumple el contrato (ver `formato-curso-v5/SKILL.md`).

---

## 3. CÃ³mo usarlo en un curso nuevo (resumen del flujo que generÃ³ el curso de origen)

1. Escribe `parts/00-head.html` (encabezado + vista de la ruta) y un archivo `parts/NN-aula.html` por lecciÃ³n.
2. Al terminar cada lecciÃ³n: `python3 tools/check-v5.py parts/NN-aula.html` â†’ corrige hasta que no haya avisos, ajusta el `data-tempo` al tiempo estimado (o mÃ¡s) y sincroniza la tarjeta de la ruta.
3. Concatena en `curso.html`, escribe `landing.html`, `index.html` (redirecciÃ³n) y `.nojekyll`.
4. `node tools/browser-test.cjs .` â†’ `ERROS: nenhum`.
5. Portada con `capa-ARCKHÉ`, `git push`, GitHub Pages, catÃ¡logo con `atualiza-portal`.

---

## 4. Estructura

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

## 5. Origen y licencia

Contenido derivado de la formaciÃ³n Â«Copilot + Agentes para Empresas â€” Del trabajo con IA a la automatizaciÃ³n
de los procesos corporativosÂ» (ARCKHÉ, sept/2026). Material de investigaciÃ³n y enseÃ±anza; los casos (tÃ©cnica de
seguridad laboral, analista de compras, gerente de RR. HH., coordinador financiero) son ficticios.
Referencias oficiales: [Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365-copilot/) Â·
[Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/) Â·
[Power Automate](https://learn.microsoft.com/power-automate/) Â·
[Power Automate Desktop](https://learn.microsoft.com/power-automate/desktop-flows/) Â·
[Power BI Copilot](https://learn.microsoft.com/power-bi/create-reports/copilot-introduction).
