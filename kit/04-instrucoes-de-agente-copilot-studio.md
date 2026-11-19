# Instruções de agente — modelo para o Copilot Studio

Um agente tem quatro partes: **instruções** (descrição do cargo), **conhecimento** (documentos que
ele pode ler), **ferramentas** (chaves que ele recebe) e **canal** (onde as pessoas falam com ele).
A qualidade está quase toda nas instruções, e instruções são texto comum em português.

## Modelo (cole no campo de instruções e troque o que está entre `< >`)

```
Você é o assistente de procedimentos da área de <sua área>.
Responde apenas dúvidas sobre <os assuntos: ex. normas internas, prazos, quem aprova>.
Regras:
- Use somente os documentos apontados como conhecimento. Cite o documento e a seção.
- Se não encontrar a resposta neles, diga "não encontrei nos procedimentos" e indique <nome do responsável>.
- Nunca informe <o que ele não pode dizer: ex. dados de outras pessoas, valores de salário>.
- Para <situações de risco: ex. liberação de equipamento, pagamento>, não decida: encaminhe a <cargo>.
Tom: direto, frases curtas, sem jargão.
```

As quatro partes de uma boa descrição de cargo: **papel**, **escopo**, **regras** (inclusive o que
não faz e para quem encaminha) e **tom**. A parte mais esquecida é a que diz o que ele não faz.

## Checklist de criação do agente

1. **Nome e descrição** — para quem é e o que resolve, em uma frase.
2. **Instruções** — papel, escopo, regras, tom (modelo acima).
3. **Conhecimento** — uma pasta ou lista *atual*, não a área inteira. As permissões da pasta seguem para quem pergunta.
4. **Ferramentas** — só as chaves que o cargo pede; nenhuma, se ele só responde.
5. **Teste** — três perguntas reais no painel de teste: duas que a área faz de verdade e uma fora do escopo (ele deve encaminhar, não inventar).
6. **Publicação** — no Teams, para o grupo certo, com um responsável nomeado.

## Manutenção semanal (20 minutos)

O painel do Copilot Studio mostra as perguntas sem resposta. Cada uma vira **um documento novo no
conhecimento** ou **uma linha nova nas instruções**. Um agente é um funcionário que melhora com
feedback semanal, não um produto acabado.

## Exemplos de agentes por área (fonte: formação Copilot + Agentes)

RH (integração, dúvidas de benefícios) · segurança do trabalho (procedimentos, ocorrências) ·
compras (homologação de fornecedores) · financeiro (reembolso, aprovações) · qualidade (não
conformidades) · comercial (propostas, acompanhamento) · manutenção · treinamento · indicadores.

## Erro comum

Escrever "seja útil e responda as dúvidas dos funcionários" e achar que está pronto. O resultado é
um agente que responde tudo, inventa o que não sabe e fala de assuntos que não deveria.
