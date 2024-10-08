// constants/apiEndpoints.js

const LOCAL = 'http://localhost:9090';
const SERVER_URL = '';

export const API_ENDPOINTS = {
  FETCH_Engineer: `${LOCAL}/engineer/info`,
  FETCH_Salary: (id: number) => `${LOCAL}/engineer/salary/${id}`,
};
