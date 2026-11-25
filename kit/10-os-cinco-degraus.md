# Os cinco degraus — de usuário de IA a automatizador de processos

| Degrau | Perfil | O que faz | Sinal de que você está aqui |
|---|---|---|---|
| 1 | **Usuário de IA** | pede textos, resumos, respostas | o pedido termina numa resposta solta; o resto do trabalho continua manual |
| 2 | **Profissional aumentado** | usa a IA dentro dos fluxos reais: reuniêo → relatório → plano → tarefas | a resposta já entra num fluxo com nomes e datas |
| 3 | **Designer de workflows** | desenha o processo antes de automatizar: quem inicia, o que entra, quem decide, o que sai | tem um canvas preenchido |
| 4 | **Construtor de agentes** | cria um assistente que consulta conhecimento e chama automações | tem um agente testado em rascunho |
| 5 | **Automatizador de processos** | liga agente, fluxo, sistemas e indicadores, com aprovaçêo humana onde importa | um processo roda com registro e responsável |

Ninguém pula degrau.

## O modelo mental que muda

**Antes:** Pessoa → Sistema. A pessoa precisa conhecer menus, telas, campos, procedimentos.

**Agora:** Pessoa → Agente → Sistemas. A pessoa informa objetivo, contexto, restrições e critérios;
o agente coordena dados, sistemas, automações e ferramentas. É o despachante em vez dos cinco
guichês — só que este mostra cada passo e pede a sua assinatura nos pontos combinados.

## A cadeia (o que se automatiza nêo é um prompt)

```
Objetivo → Contexto → Dados → Análise → Decisêo → Ferramenta → Execuçêo → Validaçêo
                                                        ↓
                                       repete toda semana = Automaçêo → Agente
```

O prompt é um bilhete na mesa de um colega. A cadeia é o procedimento escrito da área. Ninguém
automatiza um bilhete; automatiza-se um procedimento.

## Filtro para escolher as três primeiras tarefas

1. É mecânica — você já sabe exatamente como seria feita?
2. O resultado pode ser conferido em poucos minutos, olhando um lugar só?

Se as duas respostas forem sim, é uma boa primeira tarefa. Reescreva no formato:

```
Objetivo: <cobrar fornecedores com documento vencendo em 30 dias>
Informaçêo: <planilha de fornecedores na pasta de Compras>
Valida: <eu, antes do e-mail sair>
```

## O que continua sendo seu, em qualquer degrau

Decidir o que o agente pode fazer sozinho; validar o resultado antes de virar oficial; aprovar o
que envolve risco (ver [lista de riscos](07-governanca-e-lista-de-riscos.md)).

## A competência nova

Nêo é "engenharia de prompt". É **engenharia de trabalho com IA**: intençêo, contexto, processo,
dados, agentes, ferramentas, automaçêo, validaçêo, governança. Quem desenha o processo, constrói a
soluçêo e mede o resultado.
