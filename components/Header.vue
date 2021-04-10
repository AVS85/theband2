<template>
<header>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="logo">
          <nuxt-link to="/">LOGO</nuxt-link>
        </div>
      </div>
      <div class="col">
        <div class="menu">
          <ul>
            <li><nuxt-link to="/about">О нас</nuxt-link></li>
            <li><nuxt-link to="/services">Услуги</nuxt-link></li>
            <li><nuxt-link to="/contacts">Контакты</nuxt-link></li>
            <li><nuxt-link to="/blog">Блог</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="col">
        <button class="btn1">Связаться</button>
      </div>
    </div>
  </div>
</header>
</template>

<style lang="sass">
header
  border: 1px solid $elem
  display: flex
  align-items: center
  height: 50px
  .menu
    border: 1px solid red
    display: flex
    align-self: center
    ul
      display: flex
      border: 1px solid grey
      margin: 0
      li
        list-style: none
        // border: 1px solid red
</style>

<script>
export default {
  mounted(){
  }
}
</script>