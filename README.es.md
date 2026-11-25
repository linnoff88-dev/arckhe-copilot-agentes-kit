# copilot-agentes-kit

**ê°Å¸â¡Â§ê°Å¸â¡Â· [PortuguêÂªs](README.md) êÂ· ê°Å¸â¡Âºê°Å¸â¡Â¸ [English](README.en.md) êÂ· ê°Å¸â¡Âªê°Å¸â¡Â¸ [EspaêÂ±ol](README.es.md)**

Kit prêÂ¡ctico de **Copilot + Agentes para Empresas**: los modelos que las personas copian y usan en el
trabajo (canvas, prompts, instrucciones para agentes, flujos, listas de verificaciêÂ³n de incorporaciêÂ³n y gobernanza,
fichas de indicadores, plan de tres fases) y dos **herramientas de verificaciêÂ³n** para cursos ARCKHê
en formato v5 (verificador por lecciêÂ³n y prueba headless del motor).

NaciêÂ³ del curso [Copilot + Agentes para Empresas](https://linnoff88-dev.github.io/
(ARCKHê AI PRO, 9 lecciones, formato v5). El curso enseêÂ±a; este repo entrega lo que se lleva al
lunes.

- GuêÂ­a de uso (pêÂ¡gina): https://linnoff88-dev.github.io/
- Curso de origen: https://linnoff88-dev.github.io/

---

## 1. El kit (`kit/`) ê¢â¬â modelos para el trabajo

Todos en Markdown, en portuguêÂ©s, sin cêÂ³digo. Copia el bloque y reemplaza lo que estêÂ¡ entre `< >`.

| Archivo | QuêÂ© es | CuêÂ¡ndo usarlo |
|---|---|---|
| [10-os-cinco-degraus.md](kit/10-os-cinco-degraus.md) | los cinco escalones (usuario ê¢â â automatizador), el modelo mental Persona ê¢â â Agente ê¢â â Sistemas, la cadena que se automatiza, el filtro de las tres primeras tareas | al comienzo, para situar el propio trabajo |
| [02-prompts-copilot-dia-a-dia.md](kit/02-prompts-copilot-dia-a-dia.md) | prompts para Microsoft 365 Copilot: bêÂºsqueda que cruza fuentes, correo largo ê¢â â decidido/pendiente/quiêÂ©n no respondiêÂ³, reuniêÂ³n ê¢â â decisiones/responsables/plazos, documento y presentaciêÂ³n con pêÂºblico y tiempo; lista de verificaciêÂ³n posterior a la reuniêÂ³n | todos los dêÂ­as, en Teams/Outlook/Word/PowerPoint |
| [03-prompts-dados-que-explicam.md](kit/03-prompts-dados-que-explicam.md) | prompts para Excel, Analyst y Researcher: variaciêÂ³n y factores, hipêÂ³tesis comprobable entre archivos, investigaciêÂ³n que combina fuentes internas y externas; las tres comprobaciones de 2 minutos | antes de llevar un nêÂºmero a la reuniêÂ³n |
| [01-canvas-automacao-com-agentes.md](kit/01-canvas-automacao-com-agentes.md) | el canvas de nueve campos (proceso, objetivo, entradas, conocimiento, decisiones ê¢ÅÂ±, acciones, integraciêÂ³n, validaciêÂ³n, indicadores) con ejemplo completado y la distribuciêÂ³n agente/flujo/pantalla/indicador | antes de construir cualquier automatizaciêÂ³n |
| [04-instrucoes-de-agente-copilot-studio.md](kit/04-instrucoes-de-agente-copilot-studio.md) | modelo de instrucciones (rol, alcance, reglas, tono), lista de verificaciêÂ³n de creaciêÂ³n en 6 pasos, mantenimiento semanal | al crear un agente en Copilot Studio |
| [05-fluxos-power-automate.md](kit/05-fluxos-power-automate.md) | anatomêÂ­a de tres flujos: aprobaciêÂ³n, documento por vencer, incidencia invocada por el agente; divisiêÂ³n del trabajo agente/flujo/datos/indicador | al montar la capa que ejecuta |
| [06-quatro-escolhas-e-checklist-de-tela.md](kit/06-quatro-escolhas-e-checklist-de-tela.md) | la regla de las cuatro opciones (conector ê¢â â flujo ê¢â â automatizaciêÂ³n de pantalla ê¢â â Computer Use), el registro de proveedores de principio a fin, lista de verificaciêÂ³n antes de automatizar una pantalla, caso con respuestas | cuando el sistema no tiene una interfaz de servicio |
| [07-governanca-e-lista-de-riscos.md](kit/07-governanca-e-lista-de-riscos.md) | las siete comprobaciones antes de publicar, la lista de riesgos en los que la persona es obligatoria, el argumento para la direcciêÂ³n, minicaso del uso compartido excesivo | antes de sacar cualquier agente del borrador |
| [08-indicadores-meta-desvio-acao.md](kit/08-indicadores-meta-desvio-acao.md) | ficha de indicador (quêÂ© mide, fuente, meta, responsable), solicitud a Copilot para explicar una desviaciêÂ³n, panel mêÂ­nimo en 5 pasos, banco de indicadores por êÂ¡rea, preguntas que un gerente debe poder hacer | al crear o simplificar un panel |
| [09-plano-de-tres-fases-e-roadmap.md](kit/09-plano-de-tres-fases-e-roadmap.md) | plan prototipo ê¢â â ejecuciêÂ³n ê¢â â escala con criterio de finalizaciêÂ³n, ejemplo de 14 semanas, los cuatro laboratorios, casos por departamento, hoja de ruta de nueve fases de la empresa | para presentar el primer proyecto a quienes toman decisiones |

**Orden sugerido para un primer proyecto:** 10 ê¢â â 01 ê¢â â 04 ê¢â â 05 ê¢â â 06 ê¢â â 08 ê¢â â 07 ê¢â â 09. Los prompts
(02 y 03) se incorporan al dêÂ­a a dêÂ­a desde el primer dêÂ­a.

### Herramientas Microsoft cubiertas

Microsoft 365 Copilot (Chat, Outlook, Teams, Word, Excel, PowerPoint) êÂ· Analyst êÂ· Researcher êÂ·
Copilot Studio êÂ· Power Automate (flujos de nube y de agente) êÂ· Power Automate Desktop êÂ·
Computer Use êÂ· SharePoint êÂ· Dataverse êÂ· Power BI con Copilot. Fecha de referencia: sept/2026 ê¢â¬â los nombres de los botones y
la disponibilidad varêÂ­an segêÂºn la licencia y la empresa; la lêÂ³gica, no.

---

## 2. Las herramientas (`tools/`) ê¢â¬â verificaciêÂ³n de cursos ARCKHê v5

Dos herramientas que surgieron durante la producciêÂ³n del curso y sirven para cualquier curso en formato v5
(y la prueba del motor tambiêÂ©n sirve para v4).

### `tools/check-v5.py` ê¢â¬â verificador por lecciêÂ³n

Lee un `curso.html` (o, mejor, una parte por lecciêÂ³n) e imprime lo que exige el control del formato v5:

- **tiempo estimado** (palabras/200 + minutos de prêÂ¡ctica + 30 s por cuestionario, redondeado hacia arriba) frente al `data-tempo` declarado;
- **jerga centinela** (JSON, terminal, Git, commit, pipeline, instalar, script, servidor, API, deploy, CLI, directorio, plugin, encodingê¢â¬Â¦) con el contexto alrededor, para comprobar si hay una definiciêÂ³n con analogêÂ­a;
- **cobertura de figuras**: `data-fig` de los steps ê¢â â `.fig` de la rail;
- **recuentos**: promise, why, practice, psafe, recap-autor, next-action, cards, gterm, qerr, qbefore-after, qsteps, qapply, qanchor, data-kind, manifiesto de completitud, `[AUSENTE]`;
- **tarjetas**: JSON vêÂ¡lido, **anti duplicaciêÂ³n recap ê¢â â tarjeta** (secuencia de 6 palabras en comêÂºn), tarjeta cuyo frente no es una pregunta;
- **regla del clêÂ­max**: emoji y doble signo de exclamaciêÂ³n;
- frases muy largas en la prosa.

```bash
python3 tools/check-v5.py curso.html
python3 tools/check-v5.py parts/01-aula.html parts/02-aula.html   # una parte por aula (recomendado)
```

Solo Python 3 estêÂ¡ndar. No modifica nada; solo imprime.

Sugerencia de flujo: escribe cada lecciêÂ³n en un archivo (`parts/NN-aula.html`), ejecuta el verificador en cada
una al terminar, y solo entonces concatêÂ©nalas (`cat parts/*.html > curso.html`). AsêÂ­ la bêÂºsqueda de jerga y la
prueba de duplicaciêÂ³n recapê¢â âtarjeta se ejecutan sobre 300 lêÂ­neas, no sobre 2.500.

### `tools/browser-test.cjs` ê¢â¬â prueba headless del motor

Abre `curso.html` y `landing.html` en `file://` en un Chromium sin ventana y comprueba que el motor
(`curso.js`) estêÂ© activo:

cierra la incorporaciêÂ³n êÂ· enrutador por hash (`#trilha`, `#aula-N`) êÂ· statcards con tiempo total êÂ·
`tempo-badge` despuêÂ©s de la promesa êÂ· clon de las figuras para el celular (`.mobfig`) êÂ· figura activa y leyenda
de la rail êÂ· badge de fundamento/herramienta êÂ· cuestionario con comentarios êÂ· casilla de verificaciêÂ³n de la prêÂ¡ctica êÂ· êÂ«marcar como leêÂ­doêÂ»
ê¢â â progreso êÂ· recapitulaciêÂ³n y reflexiêÂ³n insertadas êÂ· prêÂ¡ctica en modo anêÂ¡lisis con `<details>` êÂ· panel de trayectoria êÂ·
panel de ejercicios êÂ· cambio de tema êÂ· persistencia despuêÂ©s de recargar êÂ· celular sin desplazamiento horizontal êÂ·
landing con las tarjetas. Toma capturas de pantalla y enumera los errores de consola.

```bash
npm i -D playwright && npx playwright install chromium
node tools/browser-test.cjs /caminho/do/curso [pasta-de-screenshots]
# ou apontando um playwright jêÂ¡ instalado em outro lugar:
PLAYWRIGHT_DIR=/caminho/node_modules/playwright node tools/browser-test.cjs /caminho/do/curso
```

La salida esperada termina en `ERROS: nenhum`. Si algêÂºn elemento aparece como `AUSENTE`, `false` o `0`, el
markup de la lecciêÂ³n no cumple el contrato (ver `formato-curso-v5/SKILL.md`).

---

## 3. CêÂ³mo usarlo en un curso nuevo (resumen del flujo que generêÂ³ el curso de origen)

1. Escribe `parts/00-head.html` (encabezado + vista de la ruta) y un archivo `parts/NN-aula.html` por lecciêÂ³n.
2. Al terminar cada lecciêÂ³n: `python3 tools/check-v5.py parts/NN-aula.html` ê¢â â corrige hasta que no haya avisos, ajusta el `data-tempo` al tiempo estimado (o mêÂ¡s) y sincroniza la tarjeta de la ruta.
3. Concatena en `curso.html`, escribe `landing.html`, `index.html` (redirecciêÂ³n) y `.nojekyll`.
4. `node tools/browser-test.cjs .` ê¢â â `ERROS: nenhum`.
5. Portada con `capa-ARCKHê`, `git push`, GitHub Pages, catêÂ¡logo con `atualiza-portal`.

---

## 4. Estructura

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

## 5. Origen y licencia

Contenido derivado de la formaciêÂ³n êÂ«Copilot + Agentes para Empresas ê¢â¬â Del trabajo con IA a la automatizaciêÂ³n
de los procesos corporativosêÂ» (ARCKHê, sept/2026). Material de investigaciêÂ³n y enseêÂ±anza; los casos (têÂ©cnica de
seguridad laboral, analista de compras, gerente de RR. HH., coordinador financiero) son ficticios.
Referencias oficiales: [Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365-copilot/) êÂ·
[Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/) êÂ·
[Power Automate](https://learn.microsoft.com/power-automate/) êÂ·
[Power Automate Desktop](https://learn.microsoft.com/power-automate/desktop-flows/) êÂ·
[Power BI Copilot](https://learn.microsoft.com/power-bi/create-reports/copilot-introduction).
