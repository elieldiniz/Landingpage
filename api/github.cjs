const axios = require('axios');

async function getGitHubUserInfo(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Exemplo de uso
const username = 'elieldiniz';

export default getGitHubUserInfo(username)
  .then(userData => {
    console.log('Informações do usuário do GitHub:', userData);
  })
  .catch(error => {
    console.error('Erro ao obter informações do usuário do GitHub:', error.message);
  });
