import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


const GITHUB_API_URL = "https://api.github.com/users/BNK4970/repos";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

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