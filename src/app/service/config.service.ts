import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  get(key: string): any {
    return this.config ? this.config[key] : (environment as { [key: string]: any })[key];
  }
}
