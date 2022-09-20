import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninUserDto, SignupUserDto } from './dtos';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}
    @Post('/local/signup')
    signupLocal(@Body() dto: SignupUserDto){
        this.authService.signupLocal(dto);
    }

    @Post('/local/signin')
    signinLocal(@Body() dto: SigninUserDto){
        this.authService.signinLocal(dto);
    }

    @Post('/local/logout')
    logout(){
        this.authService.logout();
    }

    @Post('/local/refresh')
    refreshTokens(){
        this.authService.refreshTokens();
    }
}
