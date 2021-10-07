import api from "./config";

export const getAllCurrencies = async () => {
  const resp = await api.get("/currencies");
  return resp.data;
};
