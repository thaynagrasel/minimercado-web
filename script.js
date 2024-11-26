document.querySelector("form").addEventListener("submit", function (event) {
    const nome = document.getElementById("nome").value.trim();
    if (nome === "") {
      alert("Por favor, preencha seu nome.");
      event.preventDefault();
    }
  });
  function toggleEnderecoField() {
    const servico = document.getElementById('servico').value;
    const enderecoGroup = document.getElementById('endereco-group');

    if (servico === 'entrega') {
        enderecoGroup.style.display = 'block';
    } else {
        enderecoGroup.style.display = 'none';
    }
}  