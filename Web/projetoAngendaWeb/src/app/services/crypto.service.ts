import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root' // Isso faz com que o serviço esteja disponível em toda a aplicação
})

export class CryptoService {

  // Chave para cryptografia
  private readonly SECRET_KEY = 'C#4v3kY!';

  constructor() { }

  // Metodo para encryptar
  encrypt(data: any): string {
    // Converte o objeto de entrada para uma string JSON para que possa ser criptografado
    const dataString = JSON.stringify(data);
    // Criptografa a string JSON usando o algoritmo AES com a chave secreta
    const encrypted = CryptoJS.AES.encrypt(dataString, this.SECRET_KEY).toString();
    return encrypted;
  }

  // Metodo para decryptar
  decrypt(encryptedData: string): any | null {
    try {
      // Descriptografa a string criptografada usando o algoritmo AES e a chave secreta
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, this.SECRET_KEY);
      // Converte os bytes descriptografados de volta para uma string UTF-8
      const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
      // Converte a string JSON (que era o dado original) de volta para o objeto
      return JSON.parse(decryptedString);
    } catch (e) {
      console.error('Erro ao descriptografar dados:', e);
      // Retorna null em caso de falha na descriptografia para indicar um erro
      return null;
    }
  }
}
