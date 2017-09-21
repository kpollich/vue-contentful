<template>
  <div class="home">
    <site-header></site-header>
    <post-list></post-list>
  </div>
</template>

<script>
import SiteHeader from './SiteHeader'
import PostList from './PostList'

export default {
  name: 'home',
  components: { SiteHeader, PostList }
}
</script>
