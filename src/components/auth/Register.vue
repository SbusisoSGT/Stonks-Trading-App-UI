<template>
    <div class="form-container">
        <form id="loginForm" action="POST" @submit.prevent="processLoginForm">
            <router-link to="/home"><div class="logo-container">
                <img src="./../../assets/icons/brand-logo.svg" alt="Brand Logo" class="logo-image">
                <span class="logo-name">Stonks</span>
            </div></router-link> 
            <h1 class="form-header">Sign up to begin</h1>
            <span class="form-alert-success" v-if="loginSuccess">Authenticted as {{email}}</span>
            <span class="form-alert-error" v-else-if="errorMessage != ''">{{errorMessage}}</span>
            <div class="form-group">
                <label for="">Full Name</label>
                <input type="text" name="name" class="form-input" v-model="name">  
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" name="email" class="form-input" v-model="email">  
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <div class="form-group-password">
                    <input type="password" name="password" class="form-input" v-model="password"> 
                    <span class="form-password-toggle" @click="togglePassword(event)">Show</span>
                </div>
            </div>
            <button type="submit" class="form-submit">Sign Up</button>
            <div class="sign-up-container">
                <span class="sign-up-question">Already have an account?</span>
                <span class="sign-up-link"><router-link to="/">Sign In</router-link></span> 
            </div>
        </form>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "Login",
    data: () => {
        return {
            name: '',
            email: '',
            password: '',
            errorMessage: '',
            loginSuccess: false,
        }
    },
    methods: {
        processLoginForm(){

                const url = 'http://127.0.0.1:8000/api/register';

                axios.post(url, {
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    email: this.email,
                    password: this.password,
                })
                    .then(res => { console.log(res.data)})
                        .catch(err => { console.log(err.response.data)});
                
            },
    } 
}
</script>

<style scoped>
    .form-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 100vh;
    width: 100%;
    }

    .form-container form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 30vw;
    }

    .form-container form .logo-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-bottom: 3rem;
    }

    .form-container form .logo-container .logo-image {
    height: 5rem;
    }

    .form-container form .logo-container .logo-name {
    color: #01565a;
    display: none;
    font-family: Ubuntu;
    font-size: 1.9rem;
    text-align: center;
    }

    .form-container form .form-header {
    font-size: 1.6rem;
    margin-bottom: 1.1rem;
    color: #01565a;
    text-align: center;
    }

    .form-container form .form-alert-error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: .8rem;
    margin-bottom: .5rem;
    border-radius: 5rem;
    }

    .form-container form .form-alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    padding: .8rem;
    margin-bottom: .5rem;
    border-radius: 5rem;
    }

    .form-container form .form-group {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-bottom: 1rem;
    }

    .form-container form label {
    color: #01565a;
    margin: 0 0 .4rem .7rem;
    font-weight: 600;
    }

    .form-container form .form-input {
    height: 2.2rem;
    border-radius: 5rem;
    border: 1px solid #C8C8C8;
    padding: 0 .9rem;
    font-size: 1.1rem;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    }

    .form-container form .form-input:hover {
    border: 1px solid #2bc2ca;
    }

    .form-container form .form-input-error {
    border: 1px solid #ffa2ab !important;
    }

    .form-container form .form-group-password input {
    width: 100%;
    }

    .form-container form .form-group-password span {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: #2bc2ca;
    position: absolute;
    -webkit-transform: translate(-3.2rem, 0.5rem);
            transform: translate(-3.2rem, 0.5rem);
    }

    .form-container form .form-submit {
    width: 100%;
    color: #FFF;
    background-color: #2bc2ca;
    height: 2.2rem;
    border-radius: 5rem;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    cursor: pointer;
    }

    .form-container form .form-submit:hover {
    background-color: #01565a;
    }

    .form-container form .sign-up-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 100%;
    margin-top: 2.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    }

    .form-container form .sign-up-container .sign-up-question {
    color: #01565a;
    }

    .form-container form .sign-up-container .sign-up-link {
    margin-top: .3rem;
    text-align: center;
    color: #2bc2ca;
    }

    @media only screen and (max-width: 992px) {
    .form-container form {
        width: 40vw;
    }
    }

    @media only screen and (max-width: 776px) {
    .form-container form {
        width: 50vw;
    }
    }

    @media only screen and (max-width: 576px) {
    .form-container form {
        width: 70vw;
    }
    }
</style>