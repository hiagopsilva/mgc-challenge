import { STORAGE_KEYS } from '~/utils';

const Storage = window.localStorage;
export default class StorageService {
  static clearStorage(): void {
    Storage.clear();
  }

  static getToken(): string | null {
    return Storage.getItem(STORAGE_KEYS.TOKEN);
  }

  static setToken(token: string): void {
    Storage.setItem(STORAGE_KEYS.TOKEN, token);
  }

  static clearToken(): void {
    Storage.removeItem(STORAGE_KEYS.TOKEN);
  }
}
