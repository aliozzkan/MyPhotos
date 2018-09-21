<template>
  <div id="app">
    <page-header></page-header>
    <div class="ui container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

