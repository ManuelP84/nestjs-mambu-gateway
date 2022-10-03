import { ErrorsInterceptors } from "./errors.interceptor";

export * from './errors.interceptor';

// Interceptors
export const commonInterceptors = [ErrorsInterceptors];