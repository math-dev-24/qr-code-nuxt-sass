import {defineStore} from "pinia";
import type {User} from "@supabase/auth-js";

interface authStoreInterface {
    user: null | User;
    inLoading: boolean;
    isLogged: boolean;
}


export const useAuthStore = defineStore('authStore', {
    state: (): authStoreInterface => ({
        user: null,
        inLoading: false,
        isLogged: false,
    }),
    getters: {

    },
    actions: {
        async getDataUser() {
            this.inLoading = true;
            const { user } = await $fetch('/api/me', {
                headers: useRequestHeaders(),
            })
            this.user = user
            this.inLoading = false;
        },
    }
})