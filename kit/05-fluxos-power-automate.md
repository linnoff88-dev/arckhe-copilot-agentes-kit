# Fluxos no Power Automate — a camada que executa

Um fluxo é a regra "quando isto acontecer, faça aquilo", montada em blocos e executada sozinha.
Blocos: **gatilho** (evento, agenda ou chamada do agente) · **ações** · **condição** (pergunta com
dois caminhos) · **repetição** (para cada item) · **conectores** (peças prontas para Outlook,
Teams, SharePoint, Excel, Dataverse…).

Dois itens separam um fluxo de brinquedo de um fluxo de empresa: **registro** de cada execução e
**aviso de falha** para um responsável. Sem eles, o fluxo para em silêncio e ninguém percebe.

## Fluxo 1 — Aprovação (o mais importante para empresas)

```
Gatilho    formulário preenchido / item criado na lista <nome>
Ação       validar campos obrigatórios
Condição   valor > <limite>?  não → aprovação de <coordenador> · sim → aprovação de <diretor>
Aprovado   registrar na lista <aprovados>, atualizar indicador, avisar quem pediu
Recusado   avisar quem pediu com o motivo, registrar
Se falhar  mensagem no Teams para <responsável pelo fluxo>
```

Como montar em teste (12 min): crie uma lista "Teste de aprovação" (Título, Valor, Status); no
Power Automate use o modelo pronto "quando um item é criado → iniciar aprovação"; você mesmo como
aprovador; no caminho aprovado, atualize Status = "Aprovado"; crie um item, aprove no Teams, confira
a coluna Status.

## Fluxo 2 — Documento vencendo (fornecedores, treinamentos, certidões)

1. **Gatilho por agenda** — toda segunda-feira, 8h.
2. **Buscar** — os itens da lista com validade nos próximos 30 dias.
3. **Para cada item** — avisar o fornecedor e o responsável interno; criar a tarefa de acompanhamento.
4. **Registrar** — uma linha na lista de avisos enviados, com data.
5. **Atualizar** — o status do documento para "em renovação".
6. **Se falhar** — enviar mensagem no Teams para o responsável pelo fluxo.

## Fluxo 3 — Ocorrência de segurança (chamado pelo agente)

```
Gatilho    chamada do agente (fluxo de agente) com setor, gravidade, foto
Ações      registrar na lista de ocorrências → avisar responsável do setor →
           criar tarefa com prazo de 5 dias → pedir avaliação da técnica de segurança
Retorno    número da ocorrência para o agente responder ao operador
Humano ✱   prioridade e liberação da máquina ficam com a técnica
```

## Divisão de trabalho que vale para quase todo agente de empresa

| Peça | Faz | Onde |
|---|---|---|
| agente | conversa, pergunta o que falta, decide dentro de regras | Copilot Studio |
| fluxo | executa, pede aprovação, registra, avisa | Power Automate |
| dados | listas e tabelas | SharePoint / Dataverse |
| indicador | meta, desvio, explicação | Power BI |

## Erro comum

Montar um fluxo que funciona no teste e "morre em silêncio" um mês depois (pasta renomeada, lista
apagada, e-mail não enviado). Todo fluxo termina com "se falhar, me avise".
