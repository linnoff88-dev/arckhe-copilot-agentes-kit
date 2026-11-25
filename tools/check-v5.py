#!/usr/bin/env python3
"""check-v5.py ê¢â¬â verificador do formato-curso v5 (ARCKHê), por aula ou arquivo inteiro.

Uso:
  python3 tools/check-v5.py curso.html            # arquivo inteiro (agrega)
  python3 tools/check-v5.py parts/01-aula.html ê¢â¬Â¦  # uma parte por aula (recomendado)

Checa: tempo estimado (palavras/200 + prêÂ¡tica + 30s/quiz) vs data-tempo êÂ· jargêÂ£o-sentinela êÂ·
cobertura data-fig stepê¢â ârail êÂ· contagens (promise/why/practice/psafe/recap/next/cards/gterm/quadros/
manifesto/[AUSENTE]) êÂ· JSON dos cartêÂµes êÂ· anti-duplicaêÂ§êÂ£o recapê¢â âcartêÂ£o (ê¢â°Â¥6 palavras) êÂ· cartêÂ£o sem
forma de pergunta êÂ· emoji / exclamaêÂ§êÂ£o dupla êÂ· frases muito longas. SêÂ³ imprime; nêÂ£o altera nada."""
import re, sys, json, math, html

SENT = r"\bJSON\b|\bterminal\b|\bGit\b|reposit[êÂ³o]rio|\bcommit\b|\bbranch\b|\bpipeline\b|arquivo de configura|\binstalar\b|\bscript\b|\bservidor\b|\bAPI\b|\bdeploy\b|\bCLI\b|diret[êÂ³o]rio|\bplugin\b|\bencoding\b"

def strip(s):
    s = re.sub(r"<!--.*?-->", " ", s, flags=re.S)
    s = re.sub(r"<script[^>]*>.*?</script>", " ", s, flags=re.S)
    s = re.sub(r"<svg.*?</svg>", " ", s, flags=re.S)
    s = re.sub(r"<[^>]+>", " ", s)
    return html.unescape(s)

def words(s): return re.findall(r"[\wêâ¬-êÂ¿'-]+", s)

for path in sys.argv[1:]:
    raw = open(path, encoding="utf-8").read()
    txt = strip(raw)
    n = len(words(txt))
    quizzes = len(re.findall(r'class="quiz"', raw))
    pg = re.search(r'class="pgoal">(.*?)</p>', raw, re.S)
    pmin = 0
    if pg:
        m = re.search(r"~\s*(\d+)\s*min", pg.group(1))
        pmin = int(m.group(1)) if m else 0
    est = math.ceil(n/200 + pmin + quizzes*0.5)
    dt = re.search(r'data-tempo="(\d+)min"', raw)
    print(f"== {path}")
    print(f"   palavras={n} quiz={quizzes} pratica~{pmin}min ê¢â â estimado {est}min | data-tempo={dt.group(1) if dt else 'AUSENTE'}")
    # contagens
    for k, pat in [("steps", r'class="step"'), ("figs", r'class="fig(?: on)?"'), ("mobfig", r'class="mobfig"'),
                   ("promise", r'class="promise"'), ("why", r'class="why"'), ("practice", r'class="practice"'),
                   ("psafe", r'class="psafe"'), ("recap", r'class="recap-autor"'), ("next", r'class="next-action"'),
                   ("cards", r'id="cards-\d+"'), ("gterm", r'class="gterm"'), ("qerr", r'class="qerr"'),
                   ("qba", r'class="qbefore-after"'), ("qsteps", r'class="qsteps"'), ("qapply", r'class="qapply"'),
                   ("qanchor", r'class="qanchor"'), ("data-kind", r'data-kind="'), ("manifesto", r'COMPLETUDE aula-'),
                   ("AUSENTE", r'\[AUSENTE\]')]:
        c = len(re.findall(pat, raw)); print(f"   {k}={c}", end="")
    print()
    # data-fig coverage
    sf = sorted(set(re.findall(r'<section class="step" data-fig="(\d+)"', raw)))
    ff = sorted(set(re.findall(r'class="fig(?: on)?(?: termdemo)?" data-fig="(\d+)"', raw)))
    print(f"   step figs={sf} rail figs={ff} {'OK' if sf==ff else 'DIVERGE'}")
    # sentinela
    body = re.sub(r"<!--.*?-->", " ", raw, flags=re.S)
    body = re.sub(r"<svg.*?</svg>", " ", body, flags=re.S)
    body = re.sub(r"<script[^>]*>.*?</script>", " ", body, flags=re.S)
    for m in re.finditer(SENT, body):
        s = max(0, m.start()-60); e = min(len(body), m.end()+60)
        print("   SENTINELA:", re.sub(r"\s+", " ", body[s:e]))
    # emoji
    em = re.findall(r"[\U0001F300-\U0001FAFFê¢Ëâ¬-ê¢Å¾Â¿]", txt)
    if em: print("   EMOJI:", em)
    if "!!" in txt: print("   EXCLAMAêâ¡êÆO DUPLA")
    # anti-dup recap vs cards
    rc = re.search(r'<div class="recap-autor">(.*?)</div>', raw, re.S)
    cd = re.search(r'<script type="application/json" id="cards-\d+">(.*?)</script>', raw, re.S)
    if rc and cd:
        rw = [w.lower() for w in words(strip(rc.group(1)))]
        grams = set(tuple(rw[i:i+6]) for i in range(len(rw)-5))
        try:
            cards = json.loads(cd.group(1))
        except Exception as ex:
            print("   CARDS JSON INVêÂLIDO:", ex); cards = []
        for c in cards:
            cw = [w.lower() for w in words(c["front"]+" "+c["back"])]
            hit = [g for g in (tuple(cw[i:i+6]) for i in range(len(cw)-5)) if g in grams]
            if hit: print("   DUPLICAêâ¡êÆO ê¢â°Â¥6:", " ".join(hit[0]))
            f = c["front"].strip()
            if not (f.endswith("?") or re.search(r"\?", f)):
                print("   CARTêÆO SEM PERGUNTA:", f[:60])
        print(f"   cards={len(cards)} anti-dup verificado")
    # frases longas (>25 palavras) em prosa dos steps
    long_ = 0
    for p in re.findall(r"<p>(.*?)</p>", raw, re.S):
        for s in re.split(r"(?<=[.!?])\s+", strip(p)):
            if len(words(s)) > 32: long_ += 1
    if long_: print(f"   frases >32 palavras: {long_}")
