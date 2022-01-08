<template>
    <div class="main-content">
        <router-view/>
    </div>
</template>

<script>

export default {
    name: "Main"
}
</script>

<style>
        * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    }

    html, body {
    font-size: 15px;
    width: 100%;
    line-height: 1.15;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, "Helvetica Neue" ,Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    }

    h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    }

    ::-moz-selection {
    color: #2bc2ca;
    background-color: #f1fbfc;
    }

    ::selection {
    color: #2bc2ca;
    background-color: #f1fbfc;
    }

    :root {
    content: "";
    }

    a {
    color: #2bc2ca;
    text-decoration: none;
    }

    a:hover {
    color: #01565a;
    }
</style>
