import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/bnk4970/repos'; // Remplace par l'URL pour tes repositories
const GITHUB_TOKEN = "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"; // Remplace par ton token GitHub

export async function getRepositories() {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des repositories :', error);
    return [];
  }
}

export async function getRepositoriesLanguages(reposName) {
  try {
    const response = await axios.get(`https://api.github.com/repos/BNK4970/${reposName}/languages`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
      },
    })
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des repositories :', error);
    return [];
  }
}