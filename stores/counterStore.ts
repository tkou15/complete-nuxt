import { defineStore } from 'pinia';
import { persistedState } from '#imports';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    counter: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: {
    storage: persistedState.sessionStorage,
    // TODO: 暗号化
    // serializer: {
    //   deserialize: (str) => {
    //     const decrypted = CryptoJS.AES.decrypt(str, 'user');
    //     const decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
    //     return JSON.parse(decryptedData);
    //   },
    //   serialize: (state) => {
    //     return CryptoJS.AES.encrypt(JSON.stringify(state), 'user').toString();
    //   },
    // },
  },
});
