import { Module, ConsoleLogger } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerInterceptor } from './resources/interceptors/logger.interceptor';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalExceptionFilter } from './resources/filters/global-filter-exception';
import { ConfigModule } from '@nestjs/config';
import { EventModule } from './modules/event/event.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [UserModule, AuthModule, ConfigModule.forRoot({ isGlobal: true }), EventModule, CategoryModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
    ConsoleLogger,
  ],
})
export class AppModule {}
