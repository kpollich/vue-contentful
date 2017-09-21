<template>
  <li class="post-list-item">
    <div class="post-header">
      <h2 class="post-title">{{ post.title }}</h2>
      <span class="post-date">{{ post.displayDate }}</span>
    </div>

    <h3 class="post-subtitle">{{ post.subtitle }}</h3>
  </li>
</template>

<script>
export default {
  name: 'post-list-item',
  props: ['post']
}
</script>

<style scoped>
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

.post-title,
.post-subtitle {
  font-weight: normal;
}
</style>
