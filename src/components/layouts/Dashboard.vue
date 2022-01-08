<template>
    <div class="content">
        <nav class="side-menu-container">
            <img src="./../../assets/icons/menu-left.svg" alt="Menu Icon">
            <div class="side-menu-icons">
                <img src="./../../assets/icons/home-filled.svg" alt="Home Icon" class="side-menu-icon" id="active-nav-icon">
                <img src="./../../assets/icons/stats-bars.svg" alt="" class="side-menu-icon">
                <img src="./../../assets/icons/payment-16-filled.svg" alt="" class="side-menu-icon">
                <img src="./../../assets/icons/star-filled.svg" alt="" class="side-menu-icon">
            </div>
            <img src="./../../assets/icons/round-logout.svg" alt="">
        </nav> 
        <main class="main-container">
                <nav class="nav-container">
                    <div class="logo-container">
                        <img src="./../../assets/icons/brand-logo.svg" alt="Brand Logo" class="logo-image">
                        <span class="logo-name">Stonks</span>
                    </div>
                    <div class="nav-search-container">
                        <form>
                            <input type="text" class="nav-search-input" placeholder="Search for Companies, ETF's, Indeces & More" v-on:focus="dropSearchResults()" v-on:focusout="hideSearchResults()" v-on:keyup="searchQuery" v-model="search">
                            <button type="submit" class="nav-search-submit"><img src="./../../assets/icons/bx-search.svg" alt="Search"></button>
                        </form>
                        <div class="nav-search-results-container">
                            <div class="nav-search-results"  v-bind:key="result" v-for="result of results">
                              <router-link v-bind:to="'/invest/' + result['1. symbol']"> 
                                    <div class="nav-search-result">
                                        <div class="nav-search-result-div">
                                            <span class="nav-search-result-symbol">{{result['1. symbol']}}</span>
                                            <span class="nav-search-result-name">{{result['2. name']}}</span>
                                        </div>
                                        <div class="nav-search-result-region">{{result['3. type'] + ' - ' + result['8. currency']}}</div> 
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="nav-side-container">
                        <img src="./../../assets/icons/account.svg" alt="" class="account-icon">
                        <span class="account-holder">{{user.firstname + ' ' + user.lastname}}</span>
                    </div>
                </nav>  
            <div class="content-container">
                <router-view/>
            </div>
        </main>
    </div>
</template>

<script>
    let api_key = '340XQFOXIU81CX6W'

    export default {
        name: 'Dashboard',
        data() {
            return {
                search: '',
                results: [],
            }
        },
        computed: {
          user() {
            return this.$store.state.user;
          }    
        },

        methods: {
            searchQuery(){
                const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.search}&apikey=${api_key}`;

                fetch(url)
                    .then(response => response.json())
                        .then((data) => this.results = data.bestMatches)
                            .catch(err => console.error(err));
            },

            dropSearchResults(){
                document.querySelector('.nav-search-results-container').style.display = "block";
            },

            hideSearchResults(){
                document.querySelector('.nav-search-results-container').style.display = "none";
            },
        }
    }
</script>

<style scoped>
    .side-menu-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: fixed;
  height: 100vh;
  width: 4rem;
  color: #FFF;
  background-color: #2bc2ca;
  padding: 1rem 0 2.5rem 0;
}

.side-menu-container img {
  cursor: pointer;
  height: 2.5rem;
}

.side-menu-container .side-menu-icons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: -webkit-fill-available;
  height: -moz-available;
  height: fill;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
          width: 100%;
}

.side-menu-container .side-menu-icons .side-menu-icon {
  padding: .2rem 0;
  width: 100%;
  margin-top: 1rem;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  border-left: 5px solid transparent;
}

.side-menu-container .side-menu-icons .side-menu-icon:hover {
  border-left: 5px solid #FFF;
  background-color: #01565a;
}

.side-menu-container #active-nav-icon {
  border-left: 5px solid #FFF;
  background-color: #01565a;
}

.side-menu-container #active-nav-icon:hover {
  border-left: 5px solid transparent;
  background-color: #2bc2ca;
}

.main-container {
  margin-left: 4rem;
}

.main-container .nav-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  height: 4rem;
  padding: 0 2rem;
}

.main-container .nav-container .logo-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.main-container .nav-container .logo-container .logo-name {
  margin: .5rem 0 0 .5rem;
  color: #01565a;
  font-size: 1.6rem;
  font-weight: 600;
}

.main-container .nav-container .logo-container .logo-image {
  height: 2.9rem;
}

.main-container .nav-container .nav-search-container {
  width: 100%;
  padding: 0 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.main-container .nav-container .nav-search-container form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.main-container .nav-container .nav-search-container form .nav-search-input {
  height: 2.2rem;
  width: 50vw;
  border-radius: 5rem;
  border: 1px solid #C8C8C8;
  padding: 0 1.1rem;
  font-size: 1.1rem;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
}

.main-container .nav-container .nav-search-container form .nav-search-input:focus {
  border: 1px solid #2bc2ca;
}

.main-container .nav-container .nav-search-container form .nav-search-input:hover {
  border: 1px solid #2bc2ca;
}

.main-container .nav-container .nav-search-container form .nav-search-submit {
  -webkit-transform: translateX(-3.3rem);
          transform: translateX(-3.3rem);
  width: 3.3rem;
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

.main-container .nav-container .nav-search-container form .nav-search-submit img {
  margin-top: .4rem;
}

.main-container .nav-container .nav-search-container form .nav-search-submit:hover {
  background-color: #01565a;
}

.main-container .nav-container .nav-search-container .nav-search-results-container {
  display: none;
  width: 50vw;
  position: absolute;
  min-height: 20vh;
  background-color: #FFF;
  z-index: 2;
  border-radius: 2rem;
  margin: 2.3rem 3.3rem 0 0;
  border: 1px solid #C8C8C8;
  -webkit-box-shadow: 0rem 0.2rem 0.9rem #C8C8C8;
          box-shadow: 0rem 0.2rem 0.9rem #C8C8C8;
  padding-top: .5rem;
}

.main-container .nav-container .nav-search-container .nav-search-results-container .nav-search-results {
  position: relative;
  width: 100%;
  color: #01565a;
}

.main-container .nav-container .nav-search-container .nav-search-results-container .nav-search-results .nav-search-result {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: .9rem 1.5rem;
}

.main-container .nav-container .nav-search-container .nav-search-results-container .nav-search-results .nav-search-result:hover {
  border-radius: 0 0 2rem 2rem;
  background-color: #f6feff;
}

.main-container .nav-container .nav-search-container .nav-search-results-container .nav-search-results .nav-search-result .nav-search-result-symbol {
  min-width: 10rem;
  font-weight: 700;
  color: #01565a;
}

.main-container .nav-container .nav-search-container .nav-search-results-container .nav-search-results .nav-search-result .nav-search-result-name {
  margin-left: 2rem;
  color: #01565a;
}

.main-container .nav-container .nav-side-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.main-container .nav-container .nav-side-container .account-icon {
  color: #01565a;
  height: 2.2rem;
}

.main-container .nav-container .nav-side-container .account-holder {
  color: #01565a;
  font-size: 1.1rem;
  margin-left: .3rem;
}

.main-container .content-container {
  height: 100vh;
  background-color: #f1fbfc;
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