const form = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const campoA = parseFloat(document.getElementById('campoA').value);
  const campoB = parseFloat(document.getElementById('campoB').value);
  const mensagemSucesso = `o valor de B= ${campoB}, é maior do que o valor de A= ${campoA}`;
  const mensagemErro = `o valor de B= ${campoB}, NÃO é maior do que o valor de A= ${campoA}`;

  if (campoB > campoA) {
    mensagem.textContent = mensagemSucesso;
    mensagem.style.background = 'green';
    mensagem.style.color = 'white';


  }
  else {
    mensagem.textContent = mensagemErro;
    mensagem.style.background = 'red';
    mensagem.style.color = 'white';
  }

})
