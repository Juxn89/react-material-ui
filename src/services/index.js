import { GITHUB_BASE_URL } from '../constants/index';

export const getGitHubUser= async (user) => {
    const response = await fetch(`${GITHUB_BASE_URL}${user}`, { method: 'GET' });
    const payload = await response.json();

    return payload;
}