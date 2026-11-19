# Quando o sistema não tem porta — a regra das quatro escolhas

Todo sistema tem a porta da frente (a tela). Só alguns têm **porta de serviço** (API: entrada por
onde outros programas entram sem passar pela tela) ou **conector** (porta de serviço já pronta,
escolhida numa lista). A automação entra pela melhor porta que existir. **Uma escolha por
sistema, não uma por empresa.**

| Escolha | Quando | Ferramenta | Robustez / custo |
|---|---|---|---|
| **1ª — conector / porta de serviço** | existe na lista de conectores ou o TI confirma API | Power Automate / Copilot Studio | mais robusta; não quebra quando a tela muda |
| **2ª — fluxo estruturado** | integração já existe pronta | Power Automate | robusta |
| **3ª — automação de tela (RPA)** | só tem tela, e a tela é estável e previsível | Power Automate Desktop | repete uma coreografia gravada; quebra se um botão mudar de lugar |
| **4ª — Computer Use** | tela muda com frequência, sem conector, exige interpretar o que aparece | agente com Computer Use | mais flexível e mais cara; sempre confirma com uma pessoa antes do irreversível |

Sobe-se de baixo para cima, só o degrau necessário. Ninguém usa automação de tela num sistema que
tem conector; ninguém usa Computer Use para apertar o mesmo botão oitenta vezes.

## Cadastro de fornecedor de ponta a ponta (exemplo integrador)

```
"cadastre este fornecedor"
→ agente extrai razão social, identificação, endereço, contatos; pergunta o que falta
→ fluxo valida regras da política e pede aprovação do gerente de compras ✱
→ automação de tela abre o ERP antigo, preenche, anexa, salva
→ fluxo registra na lista de cadastros, atualiza o indicador, avisa quem pediu
← "cadastrado, código 4471"
```

## Antes de automatizar uma tela — checklist

1. **Subiu a escada?** — confirmou que não há conector nem porta de serviço.
2. **Conta própria** — a automação tem a sua conta, com o mínimo de acesso; nunca a sua senha.
3. **Registro** — cada tela preenchida deixa uma linha: quando, o quê, resultado.
4. **Aprovação antes do irreversível** — gravar cadastro, enviar a órgão externo, pagar.
5. **Plano para a mudança de tela** — para e avisa; responsável nomeado para consertar.

## Caso para decidir (com gabarito)

Renata, analista de compras, precisa automatizar o cadastro de fornecedores. Os documentos chegam
pelo portal de fornecedores, novo, presente na lista de conectores. O cadastro final é feito no ERP
de doze anos, tela igual desde 2019, sem porta de serviço conhecida. Antes de cadastrar, ela
consulta a situação do fornecedor no site de um órgão público, que mudou o layout três vezes em
dois anos.

1. Qual das quatro escolhas para cada sistema?
2. Em que ponto entra a aprovação humana, e de quem?
3. Que registro precisa existir para responder "o fornecedor X foi cadastrado?" sem abrir o ERP?

<details><summary>Gabarito</summary>

1. Portal: conector (1ª). ERP: automação de tela (3ª) — tela estável, sem porta. Site do órgão:
   Computer Use (4ª) — muda com frequência.
2. Aprovação do gerente de compras depois da validação e antes de gravar no ERP (passo
   irreversível; homologar fornecedor está na lista de riscos).
3. Lista de cadastros realizados alimentada pelo fluxo: fornecedor, data, quem aprovou, código
   gerado, resultado. O indicador de tempo pedido→cadastro sai dessa lista.
</details>

## Erro comum

Usar Computer Use para um sistema que tem conector (custo alto sem necessidade), ou automação de
tela para um site que muda toda semana (quebra a cada atualização).
