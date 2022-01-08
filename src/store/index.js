import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authenticated: false,
        user: null,
    },
    mutations: {
        setAuthenticated(state, authenticated){
            state.authenticated = authenticated;
        },
        setUser(state, user){
           state.user = user;
        }
    }
})