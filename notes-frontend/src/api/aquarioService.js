import axios from "axios"; // ferramenta utilizada no handout!!!

const API_BASE_URL = "http://52.87.254.97";  // endereço padrão

// função de registro
export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cadastro`, {
      username,
      email,
      password
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Verifica o tipo de erro retornado pelo backend
      const errorMessage = error.response.data.erro;
      if (errorMessage.includes("Email já cadastrado")) {
        throw new Error("Este email já está sendo usado. Por favor, use outro email.");
      } else if (errorMessage.includes("Usuário já existe")) {
        throw new Error("Este nome de usuário já está sendo usado. Por favor, escolha outro.");
      }
      throw new Error(errorMessage || "Erro ao realizar o cadastro");
    }
    throw new Error("Erro ao conectar com o servidor");
  }
};

// função de login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password
    });
    
    // Se o login for bem-sucedido, salva o token
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
      // Configura o token para todas as requisições futuras
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
    }
    
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.erro || "Credenciais inválidas");
    }
    throw new Error("Erro ao conectar com o servidor");
  }
};

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
  const response = await axios.put(`${API_BASE_URL}/aquarios/${id}`);
  return response.data;
};

// filtra aquario por característica específica
export const filterAquarios = async (params) => {
  const response = await axios.get(`${API_BASE_URL}/aquarios/filter`, { params });
  return response.data.aquarios;
};

// gerencia os prédios favoritos do usuário
export const getFavoriteBuildings = () => {
  const favoritesStr = localStorage.getItem('favoriteBuildings');
  return favoritesStr ? JSON.parse(favoritesStr) : [];
};

export const toggleFavoriteBuilding = (predio) => {
  const favorites = getFavoriteBuildings();
  const index = favorites.indexOf(predio);
  
  if (index === -1) {
    favorites.push(predio);
  } else {
    favorites.splice(index, 1);
  }
  
  localStorage.setItem('favoriteBuildings', JSON.stringify(favorites));
  return favorites;
};

export const sortByFavorites = (aquarios) => {
  const favorites = getFavoriteBuildings();
  return [...aquarios].sort((a, b) => {
    const aIsFavorite = favorites.includes(a.predio);
    const bIsFavorite = favorites.includes(b.predio);
    if (aIsFavorite === bIsFavorite) return 0;
    return aIsFavorite ? -1 : 1;
  });
};

// adiciona usuário à lista de espera do aquário
export const joinWaitlist = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Usuário não está autenticado');
    }
    
    const response = await axios.post(
      `${API_BASE_URL}/aquarios/${id}/waitlist`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.erro || 'Erro ao entrar na lista de espera');
    }
    throw error;
  }
};