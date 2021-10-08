//faz conexão com a API
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
      return resposta.json()
    })
}

//notação de ponto 
export const clienteService = {
  listaClientes
}