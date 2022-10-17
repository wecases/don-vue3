import { defineStore } from 'pinia'

type userInfo = {
    id: number
    username: string
    phone: number
    create_at: Date
}

export const useStore = defineStore('user', {
    state: () => (<userInfo>{
        username: '1231231'
    }),
    actions: {
        getUserInfo() {
            // $api.then()
            this.username = 'don'
        },
        updateUser() {
            // $api.then()
            this.username = this.username == 'waset' ? 'don' : 'waset'
        }
    },
})
