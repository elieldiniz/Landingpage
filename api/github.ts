import axios from 'axios';

// Definindo a interface para o formato dos dados do GitHub
interface GitHubUserData {
  // Adicione os campos relevantes com seus tipos correspondentes
  name: string;
  repo: string;
  // ... outros campos ...
}

async function getGitHubUserInfo(username: string): Promise<GitHubUserData> {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data as GitHubUserData;
  } catch (error) {
    throw error;
  }
}

// Exemplo de uso
const username = 'elieldiniz';

// Utilize a função de forma assíncrona, pois ela retorna uma Promise
getGitHubUserInfo(username)
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error);
  });

export {
  getGitHubUserInfo
};
