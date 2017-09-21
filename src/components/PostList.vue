<template>
  <ul class="post-list">
    <li class="post-list-item" v-for="post in posts" :key="post.id">
      <div class="post-header">
        <h2 class="post-title">{{ post.title }}</h2>
        <span class="post-date">{{ post.displayDate }}</span>
      </div>

      <h3 class="post-subtitle">{{ post.subtitle }}</h3>
    </li>
  </ul>
</template>

<script>
import contentful from '../lib/contentful'
import moment from 'moment'

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

.post-list-item {
  margin: .5em 0;
}

.post-title {
  display: inline-block;
  margin-right: .3em;
}

.post-date {
  color: grey;
}

.post-subtitle {
  margin-top: 0;
}

.post-title, .post-subtitle {
   font-weight: normal;
}
</style>
