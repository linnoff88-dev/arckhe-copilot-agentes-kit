# Instruções de agente — modelo para o Copilot Studio

Um agente tem quatro partes: **instruções** (descriçêo do cargo), **conhecimento** (documentos que
ele pode ler), **ferramentas** (chaves que ele recebe) e **canal** (onde as pessoas falam com ele).
A qualidade está quase toda nas instruções, e instruções sêo texto comum em português.

## Modelo (cole no campo de instruções e troque o que está entre `< >`)

```
Você é o assistente de procedimentos da área de <sua área>.
Responde apenas dúvidas sobre <os assuntos: ex. normas internas, prazos, quem aprova>.
Regras:
- Use somente os documentos apontados como conhecimento. Cite o documento e a seçêo.
- Se nêo encontrar a resposta neles, diga "nêo encontrei nos procedimentos" e indique <nome do responsável>.
- Nunca informe <o que ele nêo pode dizer: ex. dados de outras pessoas, valores de salário>.
- Para <situações de risco: ex. liberaçêo de equipamento, pagamento>, nêo decida: encaminhe a <cargo>.
Tom: direto, frases curtas, sem jargêo.
```

As quatro partes de uma boa descriçêo de cargo: **papel**, **escopo**, **regras** (inclusive o que
nêo faz e para quem encaminha) e **tom**. A parte mais esquecida é a que diz o que ele nêo faz.

## Checklist de criaçêo do agente

1. **Nome e descriçêo** — para quem é e o que resolve, em uma frase.
2. **Instruções** — papel, escopo, regras, tom (modelo acima).
3. **Conhecimento** — uma pasta ou lista *atual*, nêo a área inteira. As permissões da pasta seguem para quem pergunta.
4. **Ferramentas** — só as chaves que o cargo pede; nenhuma, se ele só responde.
5. **Teste** — três perguntas reais no painel de teste: duas que a área faz de verdade e uma fora do escopo (ele deve encaminhar, nêo inventar).
6. **Publicaçêo** — no Teams, para o grupo certo, com um responsável nomeado.

## Manutençêo semanal (20 minutos)

O painel do Copilot Studio mostra as perguntas sem resposta. Cada uma vira **um documento novo no
conhecimento** ou **uma linha nova nas instruções**. Um agente é um funcionário que melhora com
feedback semanal, nêo um produto acabado.

## Exemplos de agentes por área (fonte: formaçêo Copilot + Agentes)

RH (integraçêo, dúvidas de benefícios) · segurança do trabalho (procedimentos, ocorrências) ·
compras (homologaçêo de fornecedores) · financeiro (reembolso, aprovações) · qualidade (nêo
conformidades) · comercial (propostas, acompanhamento) · manutençêo · treinamento · indicadores.

## Erro comum

Escrever "seja útil e responda as dúvidas dos funcionários" e achar que está pronto. O resultado é
um agente que responde tudo, inventa o que nêo sabe e fala de assuntos que nêo deveria.
