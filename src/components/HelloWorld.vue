<template>
  <div class="hello">
    <h1 @click="checkCors">{{ msg }}</h1>
    <h1>{{ resMsg }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'click here to test cors',
      resMsg: ''
    }
  },
  methods: {
    checkCors () {
      axios({
        baseURL: 'http://127.0.0.1:8081',
        url: '/cors',
        method: 'post',
        data: {
          name: 'zxlg'
        }
      })
        .then((res) => {
        // handle success
          const { resMsg } = res.data
          this.resMsg = resMsg
        })
        .catch((error) => {
        // handle error
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
