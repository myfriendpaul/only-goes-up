import api from "./config";

export const getAllCurrencies = async () => {
  const resp = await api.get("/currencies");
  return resp.data;
};

export const getUserCurrencies = async () => {
  const resp = await api.get("/user-portfolio");
  return resp.data;
};

export const addCurrencyToUser = async (id, currencyData) => {
  const resp = await api.put(`/currencies/${id}/add`, {
    currency: currencyData,
  });
  return resp.data;
};

export const deleteCurrency = async (id) => {
  const resp = await api.delete(`/currencies/${id}`);
  return resp;
};

export const calculateCurrency = async (id, currencyAmount) => {
  const resp = await api.post(`/calculate/${id}`, { currency: currencyAmount });
  return resp;
};

export const getOneCurrency = async (id) => {
  const resp = await api.get(`/currencies/${id}`);
  return resp.data;
};

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
};
