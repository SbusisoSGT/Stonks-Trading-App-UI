import axios from 'axios'
import store from './../store/index'


export default (to, from, next) => {
    let auth_token = localStorage.getItem('auth_token')

    if( auth_token !== null ){
        if(store.state.authenticated === false){

            axios.get('http://127.0.0.1:8000/api/user', {
                    headers: {'Authorization': `Bearer ${auth_token}`}

                }).then(res => {
                        store.commit('setAuthenticated', true)
                        store.commit('setUser', res.data)

                        next()

            }).catch(err => { 
                console.log(err)
                next('/') 
            });

        }else{
            next('/')
        }

    }else{
        next('/')
    }
        
}

