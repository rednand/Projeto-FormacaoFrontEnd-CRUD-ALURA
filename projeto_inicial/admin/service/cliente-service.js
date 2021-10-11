//faz conexão com a API
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
      if (resposta.ok) {
        return resposta.json()
      }
      throw new Error("Não foi possível listar os clientes")
    })
}

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        email: email
      })
    })
    .then(resposta => {
      if (resposta.ok) {
        return resposta.body
      }
      throw new Error("Não foi possível listar os clientes")
    })
}

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE"
  }).then(resposta => {
    if (!resposta.ok) {
      throw new Error("Não foi possível remover o cliente")
    }
  })
}
const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
      if (resposta.ok) {
        return resposta.json()
      }
      throw new Error("Não foi possível detalhar o cliente")

    })
}

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: nome,
        email: email
      })
    })
    .then(resposta => {
      if (resposta.ok) {
        return resposta.json()

      }
      throw new Error("Não foi possível atualizar o cliente")

    })
}


//notação de ponto 
export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
}