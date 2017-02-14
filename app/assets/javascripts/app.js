const github_auth_url  = "https://github.com/login/oauth/authorize?";
const github_client_id = "client_id=1921e4072d1b9108c5a8&";
const github_scope     = "scope=gist"; // "repo,gist"

const app = new Vue({
  router,

  computed: {
    githubToken: function(){
      return Vue.cookies.get("github_user_token");
    },
    githubTokenPresent: function(){
      return !!this.githubToken;
    },
    gistList: function(){
      return $.ajax({
        url: "https://api.github.com/gists",
        async: false,
      }).responseJSON;
    },
  },
  methods: {
    getAuth: function(){
      window.location.href = github_auth_url + github_client_id + github_scope;
    },
  },
}).$mount('#app')

