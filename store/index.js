const state = () => ({
  sidebarOpen: false
})

const getters = {
  sidebarState: state => state.sidebarOpen
}

const actions = {
  // async toggleSidebar
}

const mutations = {
  toggleSidebar: state => (state.sidebarOpen = !state.sidebarOpen),
  closeSidebar: state => (state.sidebarOpen = false),
  openSidebar: state => (state.sidebarOpen = true)
}

export default {
  state,
  getters,
  actions,
  mutations
}
