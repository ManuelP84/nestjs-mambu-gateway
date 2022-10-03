import { Module } from '@nestjs/common';
import { commonInterceptors } from './interceptors';
import { AxiosAdapter } from './providers/axios.adapter';

@Module({
    providers: [
        AxiosAdapter, 
        ...commonInterceptors
    ],
    exports: [AxiosAdapter]
})
export class CommonModule {}
