# Dados que explicam — Excel, Analyst e Researcher

A pergunta que gera decisão tem sempre a mesma forma: **o que mudou, em relação a quê, e quais
fatores mais contribuíram.** "Faça um gráfico" devolve uma figura muda.

Pré-requisito para todas as ferramentas: a planilha em formato de **lista arrumada** — uma linha de
cabeçalho, uma coluna por informação, sem títulos mesclados nem subtotais no meio. Trabalhe numa
cópia.

## 1. Variação e fatores (Copilot no Excel ou conversa com o arquivo anexado)

```
Nesta planilha, a coluna <nome da coluna> mede <o que ela mede>.
1. Compare <último mês> com os três meses anteriores: o valor subiu ou caiu,
   e quanto (em % e em valor)?
2. Liste os fatores que mais contribuíram para a mudança, do maior para o menor,
   usando as colunas <setor / categoria / fornecedor>.
3. Para o maior fator, mostre de quais linhas veio o cálculo.
4. Diga em uma frase o que um gestor deveria fazer com essa informação.
```

## 2. Hipótese testável entre arquivos (Analyst)

```
Aqui estão <planilha A: entregas> e <planilha B: não conformidades> do <período>.
Hipótese: os fornecedores que mais atrasam são também os que têm mais não conformidades.
Mostre os cinco piores de cada lista e diga se coincidem.
Mostre o caminho do cálculo.
```

Arquivos + hipótese, nunca "analise esses dados".

## 3. Pesquisa profunda que junta dentro e fora (Researcher)

```
Objetivo: <que decisão o relatório vai apoiar>.
Fontes internas: <pastas, contratos, atas, pesquisas a considerar>.
Fontes externas: <mercado, legislação, concorrentes, notícias>.
Formato: <tamanho, seções, para quem é>.
Para cada afirmação vinda de fonte externa, indique a fonte.
```

### Como pedir uma pesquisa que volta útil

1. **Objetivo** — que decisão o relatório vai apoiar.
2. **Fontes internas** — quais pastas, contratos ou reuniões considerar.
3. **Fontes externas** — o que procurar fora.
4. **Formato** — tamanho, seções, para quem é.
5. **O que conferir** — peça as fontes de cada afirmação externa; é isso que você vai checar.

## 4. Conferência antes de circular (2 minutos)

Todo número chega com a mesma confiança, certo ou errado. Você não confere tudo, confere o que
vai circular e o que muda uma decisão:

| Conferência | Pergunta ao Copilot | Quando usar |
|---|---|---|
| caminho do cálculo | "de quais linhas veio esse total?" / "mostre a fórmula" | número que vai para relatório |
| amostra conhecida | pegue um valor que você sabe de cabeça e veja se bate | qualquer tabela nova |
| fonte | abra o link indicado para a afirmação | afirmações externas (Researcher) |

## Erro comum

Pedir "faça um gráfico dessas vendas" e receber algo bonito que não responde nada. Comece pela
pergunta e só depois peça o gráfico que ilustra a resposta.
