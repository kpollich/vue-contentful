<template>
  <ul class="post-list">
    <li class="post-list-item" v-for="post in posts" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
</template>

<script>
import contentful from '../lib/contentful'

export default {
  name: 'post-list',

  data () {
    return {
      loading: false,
      posts: [],
      error: null
    }
  },

  created () {
    this.fetchData()
  },

  methods: {
    async fetchData () {
      try {
        const posts = (await contentful.getEntries({ content_type: 'posts' }))
          .items
          .map(item => item.fields)
        this.posts = posts
      } catch (error) {
        this.error = error
      }

      this.loading = false
    }
  }
}
</script>

<style scoped>
.post-list {
  list-style: none;
  padding: 0;
  margin-left: 1em;
}

.post-list-item {
  margin: .5em 0;
}
</style>
