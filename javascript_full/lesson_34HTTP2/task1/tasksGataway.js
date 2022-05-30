const baseUrl = '';

export const getTasks = () => fetch(baseUrl).then(response => response.json());
