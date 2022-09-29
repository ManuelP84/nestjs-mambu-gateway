import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private readonly http: AxiosInstance = axios;

  async get<T>(url: string, config?: AxiosRequestConfig<any>): Promise<T> {
    try {
      const response = await this.http.get<T>(url, config);
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('This is an error. Please check mambu error documentation.');
    }
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>,
  ): Promise<T> {
    try {
      const response = await this.http.post<T>(url, data, config);
      const { data: createdClient } = response;
      return createdClient;
    } catch (error) {
      console.log(error.response.data.errors);
      throw new Error('This is an error. Please check mambu error documentation.');
    }
  }
}
