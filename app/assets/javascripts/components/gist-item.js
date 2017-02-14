Vue.component("gist-item", {
  template: '<div>\
  Gist id: {{ gist }}\
  Gist description: {{ gist }}\
  </div>',
  props:["gist"],
  // data: function(){
  //   debugger;
  //   return {
  //     gist: 1 //store.getGistById(this.$route.params.id)
  //   }
  // },
  mounted: function(){
    debugger;
    this.$store.getters.getGistById(this.$route.params.id)
  }
})
