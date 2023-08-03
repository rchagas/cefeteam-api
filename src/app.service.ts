import { Injectable } from '@nestjs/common';
import { appConfig } from './app.config';

@Injectable()
export class AppService {
  getWelcome(): string {
    const apiUrl = appConfig().serverURL;
    return 'This is the Cefeteam Api. For check entries ' + apiUrl;
  }
}
