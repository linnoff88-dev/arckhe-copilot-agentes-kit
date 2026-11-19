# Indicadores — dados → indicador → meta → desvio → explicação → ação

Um indicador só vira gestão com os seis elos. A maioria dos painéis para no segundo. Sem meta, é só
um número; sem explicação, é só um susto.

## Ficha de indicador (uma por indicador; três a sete por área)

```
Indicador   <nome: ex. prazo médio de correção de ocorrências>
O que mede  <uma frase: e por que importa>
Fonte       <lista ou planilha, com a coluna que mede — de preferência a que o fluxo já alimenta>
Meta        <valor combinado: ex. 7 dias>
Dono        <nome de quem explica o desvio e propõe a ação>
```

Regras: **poucos** (acima de sete ninguém olha), **com dono**, **com fonte automática** (indicador
digitado à mão morre em um mês).

## Pedido ao Copilot (Power BI, Excel ou conversa com o arquivo)

```
Nesta <lista/planilha>, calcule <o indicador> para <último mês> e para os três meses
anteriores. Compare com a meta de <valor>. Se estiver fora da meta, liste os fatores que
mais contribuíram (por <setor / fornecedor / tipo>), do maior para o menor, e sugira uma
ação para o maior fator, com um prazo.
```

Reescreva a ação com o nome do dono e um prazo real antes de enviar.

## O painel mínimo, em cinco passos

1. **Fonte** — a lista que o fluxo já alimenta (ocorrências, fornecedores, pagamentos).
2. **Três indicadores** — cada um com a frase "o que mede e por que importa".
3. **Meta e dono** — o valor combinado e o nome de quem explica o desvio.
4. **Gráfico com a meta marcada** — um por indicador, comparando períodos.
5. **Pergunta pronta** — o pedido "o que mudou e por quê" salvo para reutilizar toda semana.

## Indicadores por área (banco para escolher)

| Área | Candidatos |
|---|---|
| Segurança do trabalho | acidentes, quase acidentes, inspeções, ações corretivas no prazo, treinamentos vencidos, EPIs, prazo médio de correção, reincidência por setor |
| Fornecedores | entregas no prazo, não conformidades, tempo de resposta, documentos vencidos, tempo de homologação, concentração, custo, reincidência |
| Compras | prazo de aquisição, economia, variação de preço, fornecedores ativos, compras emergenciais |
| Operações | produtividade, retrabalho, paradas, perdas, tempo de ciclo, eficiência |
| A própria automação | horas economizadas, tempo de processo antes/depois, erros e retrabalho, tarefas automatizadas, agentes em uso, satisfação — **medir desde o primeiro dia** |

## Perguntas que um gestor deve poder fazer sem chamar ninguém

- Quais ocorrências críticas estão abertas hoje?
- Quais ações corretivas estão atrasadas?
- Qual setor tem maior reincidência?
- Por que o indicador caiu este mês?
- Quais fornecedores tiveram pior desempenho? Quais têm documentos vencendo?
- Quais indicadores mais pioraram nos últimos 90 dias?

Se o painel e o Copilot respondem essas, o sistema está pronto. O passo seguinte é um **agente de
indicadores** no Teams, com o painel como conhecimento.

## Fechar o ciclo com alerta

Um fluxo lê o indicador toda manhã; quando sai da meta, avisa o dono no Teams com a explicação e
cria a tarefa de ação. O painel passa a chamar o gestor.

## Erro comum

Painel com trinta gráficos, nenhuma meta e nenhum dono: elogiado, não aberto. Comece com três.
