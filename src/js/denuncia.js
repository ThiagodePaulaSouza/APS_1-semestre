const onSubmitDenuncia = (event) => {
  event.preventDefault();

  const nome = event.target[0].value;
  const email = event.target[1].value;
  const mensagem = event.target[3].value;

  console.log(nome, email, mensagem);
  // send message to server (nome, email, mensagem)
};
