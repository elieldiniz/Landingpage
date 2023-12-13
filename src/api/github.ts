// Importa a classe Octokit do módulo '@octokit/rest'
import { Octokit } from '@octokit/rest';

// Cria uma instância do cliente Octokit configurada com o token de acesso
const octokit = new Octokit({
  auth: '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',
});

// Função assíncrona para obter informações de um usuário do GitHub
async function getUser(username: string): Promise<void> {
  try {
    // Faz uma requisição à API do GitHub para obter informações do usuário
    const response = await octokit.users.getByUsername({
      username: username,
    });

    // Imprime os dados do usuário no console
    console.log(response.data);
  } catch (error) {
    // Trata qualquer erro que possa ocorrer durante a requisição
    console.error('Erro ao obter informações do usuário:', error.message);
  }
}

// Chama a função getUser com um nome de usuário específico

export default getUser;

const items = getUser('elieldiniz').then(items => items)

