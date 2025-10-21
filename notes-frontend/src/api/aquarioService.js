import axios from "axios"; // ferramenta utilizada no handout!!!

const API_BASE_URL = "http://127.0.0.1:5000";  // endereço padrão

// retorna as informações de todos os aquários
export const getAquarios = async () => {
  const response = await axios.get(`${API_BASE_URL}/aquarios`);
  return response.data.aquarios;
};

// retorna as informações de um aquário específico
export const getAquarioPorId = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/aquarios/${id}`);
  return response.data;
};

// retorna os aquários disponíveis
export const getAquariosDisponiveis = async () => {
  const response = await axios.get(`${API_BASE_URL}/aquarios/disponiveis`);
  return response.data.aquarios;
};

// atualiza o status de ocupação
export const updateOcupacao = async (id) => {
  const response = await axios.put(`${API_BASE_URL}/aquarios/${id}/update_ocupacao`);
  return response.data;
};

// filtra aquario por característica específica
export const filterAquarios = async (params) => {
  const response = await axios.get(`${API_BASE_URL}/aquarios/filter`, { params });
  return response.data.aquarios;
};