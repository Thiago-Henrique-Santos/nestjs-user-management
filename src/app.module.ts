import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { PointOfInterestModule } from './points_of_interest/point-of-interest.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'nestjs_user_management',
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    }),
    UserModule,
    PointOfInterestModule
  ],
})
export class AppModule {}
