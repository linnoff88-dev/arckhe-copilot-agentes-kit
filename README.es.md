# copilot-agentes-kit

**🇧🇷 [Português](README.md) · 🇺🇸 [English](README.en.md) · 🇪🇸 [Español](README.es.md)**

Kit práctico de **Copilot + Agentes para Empresas**: los modelos que las personas copian y usan en el
trabajo (canvas, prompts, instrucciones para agentes, flujos, listas de verificación de incorporación y gobernanza,
fichas de indicadores, plan de tres fases) y dos **herramientas de verificación** para cursos INEMA
en formato v5 (verificador por lección y prueba headless del motor).

Nació del curso [Copilot + Agentes para Empresas](https://inematds.github.io/copilot-agentic/)
(INEMA.CLUB PRO, 9 lecciones, formato v5). El curso enseña; este repo entrega lo que se lleva al
lunes.

- Guía de uso (página): https://inematds.github.io/copilot-agentes-kit/guia/es/
- Curso de origen: https://inematds.github.io/copilot-agentic/

---

## 1. El kit (`kit/`) — modelos para el trabajo

Todos en Markdown, en portugués, sin código. Copia el bloque y reemplaza lo que está entre `< >`.

| Archivo | Qué es | Cuándo usarlo |
|---|---|---|
| [10-os-cinco-degraus.md](kit/10-os-cinco-degraus.md) | los cinco escalones (usuario → automatizador), el modelo mental Persona → Agente → Sistemas, la cadena que se automatiza, el filtro de las tres primeras tareas | al comienzo, para situar el propio trabajo |
| [02-prompts-copilot-dia-a-dia.md](kit/02-prompts-copilot-dia-a-dia.md) | prompts para Microsoft 365 Copilot: búsqueda que cruza fuentes, correo largo → decidido/pendiente/quién no respondió, reunión → decisiones/responsables/plazos, documento y presentación con público y tiempo; lista de verificación posterior a la reunión | todos los días, en Teams/Outlook/Word/PowerPoint |
| [03-prompts-dados-que-explicam.md](kit/03-prompts-dados-que-explicam.md) | prompts para Excel, Analyst y Researcher: variación y factores, hipótesis comprobable entre archivos, investigación que combina fuentes internas y externas; las tres comprobaciones de 2 minutos | antes de llevar un número a la reunión |
| [01-canvas-automacao-com-agentes.md](kit/01-canvas-automacao-com-agentes.md) | el canvas de nueve campos (proceso, objetivo, entradas, conocimiento, decisiones ✱, acciones, integración, validación, indicadores) con ejemplo completado y la distribución agente/flujo/pantalla/indicador | antes de construir cualquier automatización |
| [04-instrucoes-de-agente-copilot-studio.md](kit/04-instrucoes-de-agente-copilot-studio.md) | modelo de instrucciones (rol, alcance, reglas, tono), lista de verificación de creación en 6 pasos, mantenimiento semanal | al crear un agente en Copilot Studio |
| [05-fluxos-power-automate.md](kit/05-fluxos-power-automate.md) | anatomía de tres flujos: aprobación, documento por vencer, incidencia invocada por el agente; división del trabajo agente/flujo/datos/indicador | al montar la capa que ejecuta |
| [06-quatro-escolhas-e-checklist-de-tela.md](kit/06-quatro-escolhas-e-checklist-de-tela.md) | la regla de las cuatro opciones (conector → flujo → automatización de pantalla → Computer Use), el registro de proveedores de principio a fin, lista de verificación antes de automatizar una pantalla, caso con respuestas | cuando el sistema no tiene una interfaz de servicio |
| [07-governanca-e-lista-de-riscos.md](kit/07-governanca-e-lista-de-riscos.md) | las siete comprobaciones antes de publicar, la lista de riesgos en los que la persona es obligatoria, el argumento para la dirección, minicaso del uso compartido excesivo | antes de sacar cualquier agente del borrador |
| [08-indicadores-meta-desvio-acao.md](kit/08-indicadores-meta-desvio-acao.md) | ficha de indicador (qué mide, fuente, meta, responsable), solicitud a Copilot para explicar una desviación, panel mínimo en 5 pasos, banco de indicadores por área, preguntas que un gerente debe poder hacer | al crear o simplificar un panel |
| [09-plano-de-tres-fases-e-roadmap.md](kit/09-plano-de-tres-fases-e-roadmap.md) | plan prototipo → ejecución → escala con criterio de finalización, ejemplo de 14 semanas, los cuatro laboratorios, casos por departamento, hoja de ruta de nueve fases de la empresa | para presentar el primer proyecto a quienes toman decisiones |

**Orden sugerido para un primer proyecto:** 10 → 01 → 04 → 05 → 06 → 08 → 07 → 09. Los prompts
(02 y 03) se incorporan al día a día desde el primer día.

### Herramientas Microsoft cubiertas

Microsoft 365 Copilot (Chat, Outlook, Teams, Word, Excel, PowerPoint) · Analyst · Researcher ·
Copilot Studio · Power Automate (flujos de nube y de agente) · Power Automate Desktop ·
Computer Use · SharePoint · Dataverse · Power BI con Copilot. Fecha de referencia: sept/2026 — los nombres de los botones y
la disponibilidad varían según la licencia y la empresa; la lógica, no.

---

## 2. Las herramientas (`tools/`) — verificación de cursos INEMA v5

Dos herramientas que surgieron durante la producción del curso y sirven para cualquier curso en formato v5
(y la prueba del motor también sirve para v4).

### `tools/check-v5.py` — verificador por lección

Lee un `curso.html` (o, mejor, una parte por lección) e imprime lo que exige el control del formato v5:

- **tiempo estimado** (palabras/200 + minutos de práctica + 30 s por cuestionario, redondeado hacia arriba) frente al `data-tempo` declarado;
- **jerga centinela** (JSON, terminal, Git, commit, pipeline, instalar, script, servidor, API, deploy, CLI, directorio, plugin, encoding…) con el contexto alrededor, para comprobar si hay una definición con analogía;
- **cobertura de figuras**: `data-fig` de los steps ↔ `.fig` de la rail;
- **recuentos**: promise, why, practice, psafe, recap-autor, next-action, cards, gterm, qerr, qbefore-after, qsteps, qapply, qanchor, data-kind, manifiesto de completitud, `[AUSENTE]`;
- **tarjetas**: JSON válido, **anti duplicación recap ↔ tarjeta** (secuencia de 6 palabras en común), tarjeta cuyo frente no es una pregunta;
- **regla del clímax**: emoji y doble signo de exclamación;
- frases muy largas en la prosa.

```bash
python3 tools/check-v5.py curso.html
python3 tools/check-v5.py parts/01-aula.html parts/02-aula.html   # una parte por aula (recomendado)
```

Solo Python 3 estándar. No modifica nada; solo imprime.

Sugerencia de flujo: escribe cada lección en un archivo (`parts/NN-aula.html`), ejecuta el verificador en cada
una al terminar, y solo entonces concaténalas (`cat parts/*.html > curso.html`). Así la búsqueda de jerga y la
prueba de duplicación recap↔tarjeta se ejecutan sobre 300 líneas, no sobre 2.500.

### `tools/browser-test.cjs` — prueba headless del motor

Abre `curso.html` y `landing.html` en `file://` en un Chromium sin ventana y comprueba que el motor
(`curso.js`) esté activo:

cierra la incorporación · enrutador por hash (`#trilha`, `#aula-N`) · statcards con tiempo total ·
`tempo-badge` después de la promesa · clon de las figuras para el celular (`.mobfig`) · figura activa y leyenda
de la rail · badge de fundamento/herramienta · cuestionario con comentarios · casilla de verificación de la práctica · «marcar como leído»
→ progreso · recapitulación y reflexión insertadas · práctica en modo análisis con `<details>` · panel de trayectoria ·
panel de ejercicios · cambio de tema · persistencia después de recargar · celular sin desplazamiento horizontal ·
landing con las tarjetas. Toma capturas de pantalla y enumera los errores de consola.

```bash
npm i -D playwright && npx playwright install chromium
node tools/browser-test.cjs /caminho/do/curso [pasta-de-screenshots]
# ou apontando um playwright já instalado em outro lugar:
PLAYWRIGHT_DIR=/caminho/node_modules/playwright node tools/browser-test.cjs /caminho/do/curso
```

La salida esperada termina en `ERROS: nenhum`. Si algún elemento aparece como `AUSENTE`, `false` o `0`, el
markup de la lección no cumple el contrato (ver `formato-curso-v5/SKILL.md`).

---

## 3. Cómo usarlo en un curso nuevo (resumen del flujo que generó el curso de origen)

1. Escribe `parts/00-head.html` (encabezado + vista de la ruta) y un archivo `parts/NN-aula.html` por lección.
2. Al terminar cada lección: `python3 tools/check-v5.py parts/NN-aula.html` → corrige hasta que no haya avisos, ajusta el `data-tempo` al tiempo estimado (o más) y sincroniza la tarjeta de la ruta.
3. Concatena en `curso.html`, escribe `landing.html`, `index.html` (redirección) y `.nojekyll`.
4. `node tools/browser-test.cjs .` → `ERROS: nenhum`.
5. Portada con `capa-inema`, `git push`, GitHub Pages, catálogo con `atualiza-portal`.

---

## 4. Estructura

```
copilot-agentes-kit/
├── README.md
├── kit/                 modelos em markdown (01–10)
├── tools/
│   ├── check-v5.py      verificador por aula (Python 3, sem dependências)
│   └── browser-test.cjs teste headless do motor (Playwright)
├── guia/                página landing + guia de uso (GitHub Pages)
└── capa/capa.png        capa oficial 1280×720
```

## 5. Origen y licencia

Contenido derivado de la formación «Copilot + Agentes para Empresas — Del trabajo con IA a la automatización
de los procesos corporativos» (INEMA, sept/2026). Material de investigación y enseñanza; los casos (técnica de
seguridad laboral, analista de compras, gerente de RR. HH., coordinador financiero) son ficticios.
Referencias oficiales: [Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365-copilot/) ·
[Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/) ·
[Power Automate](https://learn.microsoft.com/power-automate/) ·
[Power Automate Desktop](https://learn.microsoft.com/power-automate/desktop-flows/) ·
[Power BI Copilot](https://learn.microsoft.com/power-bi/create-reports/copilot-introduction).
