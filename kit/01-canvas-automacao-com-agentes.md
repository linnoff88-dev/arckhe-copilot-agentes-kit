# Canvas de Automaçêo com Agentes

Uma página, nove campos. Preenchido uma vez, vira o roteiro de tudo o que se constrói depois:
agente, fluxo, integraçêo, indicador. **O canvas nêo é burocracia antes da automaçêo. É a
automaçêo, ainda em papel.**

Copie e preencha com nomes reais (a pasta, a lista, o sistema). "Nêo sei ainda" é resposta
válida no campo Integraçêo.

```
CANVAS — <nome do processo>          dono: <seu nome>     substituto: <nome>

Objetivo      que resultado o processo precisa produzir?
Entradas      o que inicia e alimenta (e-mail, formulário, documento, evento)?
Conhecimento  onde está a informaçêo a consultar (pasta, lista, sistema)?
Decisões      quais existem? Quais sêo HUMANAS (marcar com ✱)?
Ações         consultar / gerar / enviar / registrar / preencher / atualizar / notificar
Integraçêo    como chegar a cada sistema? (conector · fluxo · automaçêo de tela · Computer Use · nêo sei ainda)
Validaçêo     quem confere o resultado?
Indicadores   como medir que funcionou? (meta + dono + fonte)
```

## Como preencher em 12 minutos

1. Escolha o processo mais **repetitivo e conferível** da sua área, nêo o mais importante.
2. Preencha Objetivo, Entradas e Conhecimento sem nenhum "o sistema" genérico — só nomes.
3. Liste as Decisões e marque com ✱ as que passam pela [lista de riscos](07-governanca-e-lista-de-riscos.md).
4. Ações, Integraçêo (pode ficar "nêo sei ainda"), Validaçêo e **um** indicador que você já consegue medir hoje.
5. Leia em voz alta em um minuto. Se nêo couber, o processo está grande demais: corte.

## Exemplo preenchido — conciliaçêo de pagamentos (financeiro)

| Campo | Resposta |
|---|---|
| Objetivo | conciliar extrato bancário com contas a pagar sem digitaçêo manual |
| Entradas | extrato do banco (arquivo diário) + relatório do sistema de contas a pagar |
| Conhecimento | política de alçadas na pasta `Financeiro/Políticas` |
| Decisões | lançamento bate ou nêo bate; divergência acima de R$ 500 ✱ vai para o coordenador |
| Ações | comparar, registrar divergências na lista, notificar |
| Integraçêo | extrato: conector do banco; contas a pagar: automaçêo de tela (sistema antigo) |
| Validaçêo | coordenador financeiro, só nas divergências |
| Indicadores | horas gastas na conciliaçêo por mês (meta: 4 h; hoje: 16 h) |

## Distribuiçêo das ferramentas (o que o canvas revela)

| Passo do canvas | Ferramenta | Por quê |
|---|---|---|
| receber pedido, consultar conhecimento, conversar | **agente** (Copilot Studio) | conversa e decisêo dentro de regras |
| executar sequência fixa, condições, aprovaçêo, registro | **fluxo** (Power Automate) | executa sozinho e deixa registro |
| entrar em sistema sem porta de serviço | **automaçêo de tela** ou **Computer Use** | ver [regra das quatro escolhas](06-quatro-escolhas-e-checklist-de-tela.md) |
| medir | **indicador** (Power BI) | meta, desvio, explicaçêo, açêo |
