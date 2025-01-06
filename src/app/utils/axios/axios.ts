import axiosInstance from "./axiosInstance";
export const axiosPost = async (
  payload: object,
  subpath: string,
  params?: object
) => {
  try {
    const res = await axiosInstance.post(subpath, payload, { params });
    return res;
  } catch (error) {
    throw error;
  }
};

export const axiosGet = async (subpath: string, params?: object) => {
  try {
    const res = await axiosInstance.get(subpath, { params });
    return res;
  } catch (error) {
    throw error;
  }
};
export const axiosPut = async (
  payload: object,
  subpath: string,
  params?: object
) => {
  try {
    const res = await axiosInstance.put(subpath, payload, { params });
    return res;
  } catch (error) {
    throw error;
  }
};
export const axiosPatch = async (
  payload: object,
  subpath: string,
  params?: object
) => {
  try {
    const res = await axiosInstance.patch(subpath, payload, { params });
    return res;
  } catch (error) {
    throw error;
  }
};

export const axiosDelete = async (
  payload: object,
  subpath: string,
  params?: object
) => {
  try {
    const res = await axiosInstance.patch(subpath, payload, { params });
    return res;
  } catch (error) {
    throw error;
  }
};
