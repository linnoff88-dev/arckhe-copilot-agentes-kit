# Canvas de Automação com Agentes

Uma página, nove campos. Preenchido uma vez, vira o roteiro de tudo o que se constrói depois:
agente, fluxo, integração, indicador. **O canvas não é burocracia antes da automação. É a
automação, ainda em papel.**

Copie e preencha com nomes reais (a pasta, a lista, o sistema). "Não sei ainda" é resposta
válida no campo Integração.

```
CANVAS — <nome do processo>          dono: <seu nome>     substituto: <nome>

Objetivo      que resultado o processo precisa produzir?
Entradas      o que inicia e alimenta (e-mail, formulário, documento, evento)?
Conhecimento  onde está a informação a consultar (pasta, lista, sistema)?
Decisões      quais existem? Quais são HUMANAS (marcar com ✱)?
Ações         consultar / gerar / enviar / registrar / preencher / atualizar / notificar
Integração    como chegar a cada sistema? (conector · fluxo · automação de tela · Computer Use · não sei ainda)
Validação     quem confere o resultado?
Indicadores   como medir que funcionou? (meta + dono + fonte)
```

## Como preencher em 12 minutos

1. Escolha o processo mais **repetitivo e conferível** da sua área, não o mais importante.
2. Preencha Objetivo, Entradas e Conhecimento sem nenhum "o sistema" genérico — só nomes.
3. Liste as Decisões e marque com ✱ as que passam pela [lista de riscos](07-governanca-e-lista-de-riscos.md).
4. Ações, Integração (pode ficar "não sei ainda"), Validação e **um** indicador que você já consegue medir hoje.
5. Leia em voz alta em um minuto. Se não couber, o processo está grande demais: corte.

## Exemplo preenchido — conciliação de pagamentos (financeiro)

| Campo | Resposta |
|---|---|
| Objetivo | conciliar extrato bancário com contas a pagar sem digitação manual |
| Entradas | extrato do banco (arquivo diário) + relatório do sistema de contas a pagar |
| Conhecimento | política de alçadas na pasta `Financeiro/Políticas` |
| Decisões | lançamento bate ou não bate; divergência acima de R$ 500 ✱ vai para o coordenador |
| Ações | comparar, registrar divergências na lista, notificar |
| Integração | extrato: conector do banco; contas a pagar: automação de tela (sistema antigo) |
| Validação | coordenador financeiro, só nas divergências |
| Indicadores | horas gastas na conciliação por mês (meta: 4 h; hoje: 16 h) |

## Distribuição das ferramentas (o que o canvas revela)

| Passo do canvas | Ferramenta | Por quê |
|---|---|---|
| receber pedido, consultar conhecimento, conversar | **agente** (Copilot Studio) | conversa e decisão dentro de regras |
| executar sequência fixa, condições, aprovação, registro | **fluxo** (Power Automate) | executa sozinho e deixa registro |
| entrar em sistema sem porta de serviço | **automação de tela** ou **Computer Use** | ver [regra das quatro escolhas](06-quatro-escolhas-e-checklist-de-tela.md) |
| medir | **indicador** (Power BI) | meta, desvio, explicação, ação |
