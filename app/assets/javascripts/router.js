const routes = [
  { name: 'showGist', path: '/gist/:id', component: 'gist-item', props: true },
  { path: '*', component: 'no-gist-item'},
]

const router = new VueRouter({
  routes
})
