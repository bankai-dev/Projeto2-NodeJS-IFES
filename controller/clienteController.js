// Importação do modelo de Funcionario

const Cliente = require("../models/clienteModel");

// Classe responsável por controlar as operações relacionadas aos Clientes

module.exports = class clienteController {

// Método para criar um novo cliente

static async ClienteCreate(req, res){
  try {
    // Captura os dados do corpo da requisição
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let email = req.body.email;

    // Cria um objeto Cliente com os dados capturados do corpo da requisição
    const cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email
    }

    // Chama o método create do modelo Cliente para inserir o cliente no banco de dados
    await Cliente.create(cliente);

    // Retorna uma resposta JSON indicando o sucesso da operação
    res.json({ message: "Cadastro realizado com sucesso!"});
  } catch (error) {
    // Em caso de erro retorna uma mensagem de erro
    res.status(500).json({ error: "Erro ao criar cliente"});
  }
}

  // Método para listar todos os clientes
  static async ClienteListar(req, res){
    try{
      // Chama o método findAll do modelo funcionário para buscar todos os funcionários no banco de dados
      const clientes = await Cliente.findAll({
        raw: true
      });

      // Retorna a lista de clientes como uma resposta JSON
      res.json(clientes);
    } catch (error) {
      // Em caso de erro, retorna uma mensagem de erro
      res.status(500).json({ error: "Erro ao listar funcionários" });
    }
  }

  // Método para atualizar informações de um cliente

  static async ClienteUpdate(req, res){
    try{
      // Captura o id do cliente a ser atualizado a partir dos parâmetros da requisição
      const id_cliente = req.params.id;

      // Captura os dados do corpo da requisição
      let nome = req.params.nome;
      let endereco = req.params.endereco;
      let telefone = req.params.telefone;
      let email = req.params.email;

      // Cria um objeto cliente com os dados capturados do corpo da requisição

      const cliente = {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        email: email
      };

      // Atualiza o registro do funcionário no banco de dados com base na matrícula
      await Cliente.update(cliente, { where: {
        id_cliente: id_cliente
      }});

      // Retorna uma resposta JSON indicando o sucesso da operação
      res.json({ message: "Cadastro atualizado com sucesso!"});
    } catch (error){
      // Em caso de erro, retorna uma mensagem de erro
      res.status(500).json({error: "Erro ao atualizar cliente" });
    }
  }

  // Método para excluir um funcionário
  static async ClienteDelete(req, res){
    try{
      // Captura o id_cliente do usuário a ser excluído a partir dos parâmetros da requisição
      const id_cliente = req.params.id

      // Exclui o registro do cliente no banco de dados com base no id do cliente
      await Cliente.destroy({ where: { id_cliente: id_cliente }});

      // Retorna uma resposta JSON indicando o sucesso da operação
      res.json({ message: "Cliente excluído com sucesso"});
    } catch (error) {
      // Em caso de erro, retorna uma mensagem de erro
      res.status(500).json({ error: "Erro ao excluir cliente"});
    }
  }
}


























  
