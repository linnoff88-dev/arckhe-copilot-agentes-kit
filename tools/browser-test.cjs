// browser-test.cjs — teste headless do motor de um curso ARCKHÉ v4/v5 (curso.html + landing.html).
// Uso: node tools/browser-test.cjs <pasta-do-curso> [pasta-de-screenshots]
// Precisa do Playwright: npm i -D playwright && npx playwright install chromium
// (ou um node_modules com playwright em ../ ou no caminho indicado por PLAYWRIGHT_DIR).
function resolvePlaywright() {
  const cands = [process.env.PLAYWRIGHT_DIR, require('path').join(__dirname, '..', 'node_modules', 'playwright'), 'playwright'].filter(Boolean);
  for (const c of cands) { try { return require.resolve(c); } catch (e) {} }
  throw new Error('playwright não encontrado: npm i -D playwright && npx playwright install chromium');
}
const { chromium } = require(resolvePlaywright());
(async () => {
  const P = require('path').resolve(process.argv[2] || '.');
  const S = require('path').resolve(process.argv[3] || 'shots'); require('fs').mkdirSync(S, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  const out = [];
  await page.goto('file://' + P + '/curso.html#trilha');
  await page.waitForTimeout(800);
  out.push('welcome aberto na 1ª visita: ' + await page.$eval('#welcome', e => e.classList.contains('on')).catch(()=> 'sem #welcome'));
  out.push('welcome menciona Anki? ' + await page.$eval('#welcome', e => /anki/i.test(e.textContent)).catch(()=>'n/a'));
  await page.evaluate(() => { const b=document.querySelector('#welcome [data-close]'); if(b) b.click(); });
  await page.waitForTimeout(300);
  out.push('trilha active: ' + await page.$eval('#v-trilha', e => e.classList.contains('active')));
  out.push('statcards: ' + (await page.$eval('#v-trilha .statcards', e => e.innerText.replace(/\s+/g, ' '))));
  out.push('card meta aula1: ' + await page.$eval('.au[data-aula="1"] .meta', e => e.textContent));
  await page.screenshot({ path: S + '/shot-trilha.png' });
  await page.goto('file://' + P + '/curso.html#aula-1');
  await page.waitForTimeout(800);
  out.push('aula1 active: ' + await page.$eval('#v-aula-1', e => e.classList.contains('active')));
  out.push('tempo-badge: ' + await page.$eval('#v-aula-1 .tempo-badge', e => e.textContent).catch(() => 'AUSENTE'));
  out.push('mobfig svg clonado: ' + await page.$$eval('#v-aula-1 .mobfig svg', a => a.length));
  out.push('fig on: ' + await page.$eval('#v-aula-1 .fig.on', e => e.getAttribute('data-fig')));
  out.push('railcap: ' + (await page.$eval('#v-aula-1 .railcap', e => e.textContent.slice(0, 60))));
  out.push('kind badge css: ' + await page.$eval('#v-aula-1 .step[data-kind="fundamento"] h2', e => getComputedStyle(e, '::after').content));
  await page.screenshot({ path: S + '/shot-aula1-top.png' });
  // quiz
  await page.click('#v-aula-1 .quiz .opt[data-k="b"]');
  await page.waitForTimeout(300);
  out.push('quiz fb: ' + (await page.$eval('#v-aula-1 .quiz .qfb', e => e.textContent.slice(0, 50))));
  // practice checkbox
  await page.click('#v-aula-1 .practice input[data-ptask="1"]');
  await page.waitForTimeout(300);
  out.push('pcount: ' + await page.$eval('#v-aula-1 .practice .pcount', e => e.textContent));
  // readbtn -> progress
  await page.click('#v-aula-1 .step[data-fig="1"] .readbtn');
  await page.waitForTimeout(300);
  out.push('pill: ' + await page.$eval('#pill', e => e.textContent));
  // recap injected by motor?
  out.push('recap motor injetado: ' + await page.$$eval('#v-aula-1 .recap', a => a.length));
  out.push('reflexão injetada: ' + await page.$$eval('#v-aula-1 textarea', a => a.length));
  // scroll to practice and screenshot fecho
  await page.$eval('#v-aula-1 .fecho-wrap', e => e.scrollIntoView());
  await page.waitForTimeout(400);
  await page.screenshot({ path: S + '/shot-aula1-fecho.png' });
  // aula 7 analise details
  await page.goto('file://' + P + '/curso.html#aula-7');
  await page.waitForTimeout(600);
  out.push('aula7 details: ' + await page.$$eval('#v-aula-7 .practice details', a => a.length));
  out.push('aula7 mode icon: ' + await page.$eval('#v-aula-7 .practice .pk', e => getComputedStyle(e, '::before').content));
  out.push('aula7 termdemo (deve ser 0): ' + await page.$$eval('#v-aula-7 .termdemo', a => a.length));
  out.push('qapply: ' + await page.$$eval('#v-aula-7 .qapply li b', a => a.map(x => x.textContent).join(' | ')));
  await page.$eval('#v-aula-7 .qapply', e => e.scrollIntoView());
  await page.waitForTimeout(400);
  await page.screenshot({ path: S + '/shot-aula7-qapply.png' });
  // panels
  await page.click('#jorbtn'); await page.waitForTimeout(400);
  out.push('jornada aberta: ' + await page.$eval('#jornada', e => e.classList.contains('on')));
  out.push('jornada texto: ' + (await page.$eval('#jornada', e => e.innerText.replace(/\s+/g, ' ').slice(0, 220))));
  await page.screenshot({ path: S + '/shot-jornada.png' });
  await page.keyboard.press('Escape'); await page.waitForTimeout(200);
  await page.click('#exbtn'); await page.waitForTimeout(400);
  out.push('exercicios itens: ' + await page.$$eval('#exercicios .exlist li, #exercicios li', a => a.length));
  await page.keyboard.press('Escape'); await page.waitForTimeout(200);
  // theme toggle
  await page.click('#themebtn'); await page.waitForTimeout(300);
  out.push('tema após toggle: ' + await page.$eval('html', e => e.getAttribute('data-theme')));
  await page.goto('file://' + P + '/curso.html#aula-4'); await page.waitForTimeout(500);
  await page.screenshot({ path: S + '/shot-aula4-papel.png' });
  // reload persists state
  await page.goto('file://' + P + '/curso.html#trilha'); await page.waitForTimeout(600);
  out.push('statcards após progresso: ' + (await page.$eval('#v-trilha .statcards', e => e.innerText.replace(/\s+/g, ' '))));
  out.push('card meta aula1 após: ' + await page.$eval('.au[data-aula="1"] .meta', e => e.textContent));
  // mobile
  const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await m.goto('file://' + P + '/curso.html#aula-2'); await m.waitForTimeout(600);
  out.push('mobile body scrollWidth ok: ' + await m.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  await m.screenshot({ path: S + '/shot-mobile-aula2.png' });
  // landing
  await page.goto('file://' + P + '/landing.html'); await page.waitForTimeout(500);
  out.push('landing h1: ' + await page.$eval('h1', e => e.textContent.slice(0, 60)));
  out.push('landing cards: ' + await page.$$eval('.au', a => a.length));
  await page.screenshot({ path: S + '/shot-landing.png', fullPage: false });
  console.log(out.join('\n'));
  console.log('ERROS: ' + (errors.length ? errors.join('\n') : 'nenhum'));
  await browser.close();
})();
