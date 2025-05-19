document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // impede o envio real

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // simulação de captura de dados
  document.getElementById('mensagem').innerText = `Dados capturados! (simulado)\nEmail: ${email}\nSenha: ******${senha.slice(-3)}`;

  // aqui você mostraria isso na apresentação
  console.log("E-mail:", email);
  console.log("Senha:", senha);
});
