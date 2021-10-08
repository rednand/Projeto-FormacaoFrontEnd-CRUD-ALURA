import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')

//executa algo assim que houver o submit
//evento procura exatamento onde esta acontecendo

formulario.addEventListener('submit', (evento)=> { 
  evento.preventDefault()
  const nome = evento.target.querySelector('[data-nome]').value
  const email = evento.target.querySelector('[data-email]').value

  clienteService.criaCliente(nome, email)
  .then(()=> {
    window.location.href = '../telas/cadastro_concluido.html'
  })
})