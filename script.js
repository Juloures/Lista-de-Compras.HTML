const form = document.getElementById('form-item');
const tabela = document.querySelector('#tabela-itens tbody');
const totalSpan = document.getElementById('valor-total');
const atualizarBtn = document.getElementById('atualizar-api');

let totalGeral = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const preco = parseFloat(document.getElementById('preco').value);

  if (!nome || quantidade <= 0 || preco < 0) {
    alert("Preencha os campos corretamente.");
    return;
  }

  adicionarLinha(quantidade, nome, preco);

  form.reset();
});

function adicionarLinha(quantidade, nome, preco) {
  const subtotal = quantidade * preco;
  totalGeral += subtotal;

  const tr = document.createElement('tr');

tr.innerHTML = `
  <td>${quantidade}</td>
  <td>${nome}</td>
  <td>R$ ${preco.toFixed(2)}</td>
  <td>R$ ${subtotal.toFixed(2)}</td>
  <td>
    <button class="editar">✏️</button>
    <button class="remover">🗑️</button>
  </td>
`;




  // Remover item
  tr.querySelector(".remover").addEventListener("click", function () {
    totalGeral -= subtotal;
    totalSpan.textContent = totalGeral.toFixed(2);
    tr.remove();
  });

  // Editar item
  tr.querySelector(".editar").addEventListener("click", function () {
    const novaQtd = prompt("Nova quantidade:", quantidade);
    const novoPreco = prompt("Novo preço unitário:", preco.toFixed(2));


    const qtdNum = parseInt(novaQtd);
    const precoNum = parseFloat(novoPreco);

    if (isNaN(qtdNum) || isNaN(precoNum) || qtdNum <= 0 || precoNum < 0) {
      alert("Valores inválidos.");
      return;
    }

    totalGeral -= subtotal; // Remove o subtotal antigo

    const novoSubtotal = qtdNum * precoNum;
    totalGeral += novoSubtotal;

    tr.children[0].textContent = qtdNum;
    tr.children[2].textContent = `R$ ${precoNum.toFixed(2)}`;
    tr.children[3].textContent = `R$ ${novoSubtotal.toFixed(2)}`;

    totalSpan.textContent = totalGeral.toFixed(2);
  });

  tabela.appendChild(tr);
  totalSpan.textContent = totalGeral.toFixed(2);
}

atualizarBtn.addEventListener('click', function () {
  alert("Simulação: sistema atualizado com sucesso!");
});
