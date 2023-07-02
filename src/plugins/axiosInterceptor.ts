import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getCookie } from '@/utils/cookie';

export interface AxiosInterceptorConstructor {
  req?: InternalAxiosRequestConfig
  res?: AxiosResponse
  err?: AxiosError
}

export default class AxiosInterceptor implements AxiosInterceptorConstructor {
  public req: InternalAxiosRequestConfig | undefined
  public res: AxiosResponse | undefined
  public err: AxiosError | undefined

  /**
   * simple axios interceptor to handle API request and response
   *
   * @param {AxiosInterceptorConstructor} params
   * @param {import("axios").InternalAxiosRequestConfig} params.req axios request
   * @param {import("axios").AxiosResponse} params.res axios response
   * @param {import("axios").AxiosError} params.err axios error response
   */
  constructor({ req, res, err }: AxiosInterceptorConstructor = {}) {
    this.req = req;
    this.res = res;
    this.err = err;
  }

  /**
   * request interceptor handler
   *
   * @returns {import("axios").InternalAxiosRequestConfig} axios request
   */
  RequestInterceptor(): InternalAxiosRequestConfig | undefined {
    const fetchEvent = new Event('onFetch');
    window.dispatchEvent(fetchEvent);
    this.req?.headers.set('X-CSRF-TOKEN', getCookie('X-CSRF-TOKEN') + '=')
    return this.req;
  }

  /**
   * response interceptor handler
   *
   * @returns {import("axios").AxiosResponse} axios response
   */
  ResponseInterceptor(): AxiosResponse | undefined {
    const successEvent = new Event('onSuccess');
    window.dispatchEvent(successEvent);
    return this.res;
  }

  /**
   * error interceptor handler
   *
   * @throws {import("axios").AxiosError} axios error response
   */
  ErrorInterceptor() {
    const rejectEvent = new Event('onReject');
    window.dispatchEvent(rejectEvent);
    if (this.err?.response?.status === 401) {
      const unauthorizedEvent = new Event('onUnauthorized');
      window.dispatchEvent(unauthorizedEvent);
    }
    throw this.err;
  }
}