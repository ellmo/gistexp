const github_auth_url = "https://github.com/login/oauth/authorize?client_id="
const github_client_id = "1921e4072d1b9108c5a8";

const app = new Vue({
  router,

  methods: {
    getAuth: function(){
      window.location.href = github_auth_url + github_client_id;
    },
  },
}).$mount('#app')

