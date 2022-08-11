import { baseUrl } from "~~/config";
import { messageDanger } from "~~/utils/toast";

const errorResponse: ApiResponse = {
  success: false,
  code: 0,
  message: "",
  data: null,
};
const $http = async (baseUrl: string, options: any): Promise<ApiResponse> => {
  const { method = "GET", params = {}, body = {} } = options;
  // console.log({
  //   method,
  //   params,
  //   body,
  //   bool: ["POST", "PUT", "PATCH"].includes(method.toUpperCase()),
  // });

  const res: any = await $fetch<ApiResponse>(baseUrl, {
    headers: {
      Authorization: getToken(),
    },
    method: method,
    /* fetch中 params和body不能同时存在 */
    params: ["GET", "DELETE"].includes(method.toUpperCase()) ? params : undefined,
    body: ["POST", "PUT", "PATCH"].includes(method.toUpperCase()) ? body : undefined,
    onResponseError(ctx: any) {
      console.log("onRequestError", ctx);
      // console.log("status", ctx.response);
      const status: number = ctx.response.status;
      try {
        if (status === 401) {
          // 清除token
          const token = useToken();
          token.value = "";
          localStorage.setItem("x-token", "");
          console.error(ctx.response._data.message);
        }
        messageDanger(ctx.response._data.message || "");
        return Promise.reject(ctx.response._data);
      } catch (error) {
        // console.log("onRequestError", error);
        return Promise.reject(error);
      }
    },
  });
  // console.log({ type: "$http ", res });
  return res;
};
// 获取 token
const getToken = () => {
  const tk = useToken();
  let token = "";
  if (tk.value) {
    token = "Bearer " + tk.value;
  }
  // console.log({ token });
  return token;
};
const get = async (url: string, params = {}): Promise<ApiResponse> => {
  try {
    const res = await $http(baseUrl + url, {
      method: "GET",
      params: params,
    });
    return res;
  } catch (error: any) {
    errorResponse.message = error;
    return errorResponse;
  }
};

const post = async (url: string, params = {}): Promise<ApiResponse> => {
  try {
    const res = await $http(baseUrl + url, {
      method: "POST",
      body: params,
    });
    return res;
  } catch (error: any) {
    errorResponse.message = error;
    return errorResponse;
  }
};

const put = async (url: string, params = {}): Promise<ApiResponse> => {
  try {
    const res = await $http(baseUrl + url, {
      method: "PUT",
      body: params,
    });
    return res;
  } catch (error: any) {
    errorResponse.message = error;
    return errorResponse;
  }
};

export default { get, post, put };
