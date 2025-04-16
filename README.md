'''markdown
# Lista de compras

## **Descrição**
Este projeto é uma aplicação simples de uma Lista de Compras onde o usuário pode adicionar, editar e remover itens, informando a quantidade e o preço de cada produto. A interface é dividida em duas colunas: a primeira permite adicionar itens à lista e a segunda exibe a tabela de compras com o total atualizado.

## **Funcionalidades:**
1. Adicionar Item: O usuário pode preencher o nome do item, a quantidade e o preço unitário, e o item é adicionado à tabela.

2. Editar Item: O usuário pode editar a quantidade ou o preço de um item na tabela.

3. Remover Item: O usuário pode remover um item da lista e o total será atualizado.

4. Total Geral: O valor total dos itens na lista é calculado automaticamente e atualizado.

5. Responsividade: O layout é adaptável para diferentes tamanhos de tela (para dispositivos móveis e desktops).

### **Tecnologias Utilizadas**
- HTML: Estrutura da página web.

- CSS: Estilização da página para um layout responsivo e visualmente agradável.

- JavaScript: Funcionalidades interativas, como adicionar, editar, remover itens e atualizar o total.

## **Como Usar**
1. Abrir o arquivo HTML: Basta abrir o arquivo index.html no navegador para visualizar a aplicação.

2. Adicionar Itens: Preencha o formulário na coluna da esquerda com o nome, quantidade e preço do produto. Clique no botão Adicionar para incluir o item na lista.

3. Editar Itens: Clique no botão ✏️ ao lado de um item para editar sua quantidade e/ou preço.

4. Remover Itens: Clique no botão 🗑️ ao lado de um item para removê-lo da lista.

5. Atualizar Página: O botão Atualizar Página serve apenas como uma simulação, alertando que o sistema foi "atualizado".

## **Desafios enfrentados**
Durante o desenvolvimento do projeto, um dos principais desafios foi separar corretamente as duas colunas (formulário à esquerda e tabela à direita), garantindo que cada div ficasse na sua posição correta sem ocupar toda a altura da tela. Foi necessário ajustar propriedades do CSS, como align-items, height e flex, para garantir que o layout se comportasse como esperado, especialmente em resoluções diferentes.

## **Testes e Validação**
A validação do sistema foi feita de forma prática:

- Utilizei a extensão Live Server no VS Code para executar o projeto em tempo real no navegador e acompanhar as mudanças à medida que o código era atualizado.

- Para verificar a responsividade, acessei a aplicação diretamente pelo navegador do meu celular, simulando a experiência de um usuário em dispositivos móveis.

Esses testes ajudaram a garantir que o layout estivesse bem estruturado tanto em telas grandes quanto pequenas.

### **Link Glitch**
[Lista de Compras(https://lista-de-compras-julia.glitch.me/)
