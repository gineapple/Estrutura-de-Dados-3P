 // Crie uma instância da fila
 let minhaFila = new Fila(10);

 // Função para adicionar um elemento à fila
 function adicionarElemento() {
    const novoNome = document.getElementById("txtNovoNome");
    const novoCpf = document.getElementById("txtNovoCpf");
    // Verificar se tem algo digitado e mostrar mensagem se necessário
    const novoAtendimento = new Atendimento();
    novoAtendimento.nome = novoNome.value;
    novoAtendimento.cpf = novoCpf.value;
    novoAtendimento.data = obterDataAtual();
    novoAtendimento.hora = obterHoraAtual();

    if(minhaFila.enqueue(novoAtendimento)==true){
         console.log(minhaFila.toString());
         mostrarFila();
    }//if
    else
      alert("Fila cheia :(");
    //set atributos do atendimento no objeto a partir dos inputs e funções
    //adicionar na fila e mostrar na tela
 }
//--------------------------------------------------------------------------------------------
 // Função para remover o primeiro elemento da fila
 function realizarAtendimento() {
    if (minhaFila.isEmpty()){
      alert ("A fila está vazia.");
    }

    else{
      const atendimentoAtual = minhaFila.dequeue();
      mostrarMensagemRemocao(atendimentoAtual);
      mostrarFila();
    }
    // verificar se não está vazia antes de atender
    // mostrar dados da pessoa atendida utilizando a funcao mostrarMensagemRemocao
    
 }
 //--------------------------------------------------------------------------------
 function buscarCpf() {
    const cpf = document.getElementById("txtNovoCpf").value.trim(); // o trim retira os espaços em branco
    const atendimentoBusca = new Atendimento(); // vamos pesquisar só por CPF
    atendimentoBusca.cpf = cpf
    let qtd = 1
    let achou = false

    //função de busca
    for (let item of minhaFila.itens) {
      if (item.equals(atendimentoBusca)){ 
        alert("Achou! Posição: " + qtd)
        achou = true
      }
      else {
        qtd++
      }
    }
      if (achou==false){
        alert("Não encontrado :(");
      }
   // se nao encontrar mostre mensagem
}
//--------------------------------------------------------------------------------------------
function mostrarMensagemRemocao(pessoaAtendida) {
    const lblMensagemRemocao = document.getElementById("lblMensagemRemocao");
    lblMensagemRemocao.innerHTML ="Próximo a ser atendido(a): "+ pessoaAtendida.nome;
    lblMensagemRemocao.style.display = "block";
}
//--------------------------------------------------------------------------------------------
 // Função para mostrar a  fila
 function mostrarFila() {
    const elementofila = document.getElementById("listPessoasFila");
    elementofila.textContent = minhaFila.toString();
}
//--------------------------------------------------------------------------------------------
 // funcao data
 function obterDataAtual() {
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque o mês inicia do zero
    let ano = dataAtual.getFullYear();
    // Formata a data como "dd/mm/aaaa"
    let dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
    return dataFormatada;
}
//--------------------------------------------------------------------------------------------
function obterHoraAtual() {
  const data = new Date();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');
  return `${hora}:${minuto}:${segundo}`;
}
//--------------------------------------------------------------------------------------------
function calcularDiferencaHoras(hora1, hora2) {
  const [h1, m1, s1] = hora1.split(':').map(Number);
  const [h2, m2, s2] = hora2.split(':').map(Number);
  
  const diferencaSegundos = (h2 * 3600 + m2 * 60 + s2) - (h1 * 3600 + m1 * 60 + s1);
  
  const horas = Math.floor(diferencaSegundos / 3600);
  const minutos = Math.floor((diferencaSegundos % 3600) / 60);
  const segundos = diferencaSegundos % 60;
  
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
