<template>
  <ul class="post-list">
    <post-list-item v-for="post in posts" v-bind:post="post" v-bind:key="post.id">
    </post-list-item>
  </ul>
</template>

<script>
import contentful from '../lib/contentful'
import moment from 'moment'

import PostListItem from './PostListItem'

export default {
  name: 'post-list',
  components: { PostListItem },

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
          .sort((first, second) => first.datePublished < second.datePublished)

        posts.forEach(post => {
          post.displayDate = moment(post.datePublished).format('MMMM Do YYYY')
        })

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
</style>
