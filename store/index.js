const state = () => ({
  sidebarOpen: false,
  pageYPos: 0
})

const getters = {
  sidebarState: state => state.sidebarOpen,
  getPageYPos: state => state.pageYPos
}

const actions = {
  // async toggleSidebar
}

const mutations = {
  toggleSidebar: state => (state.sidebarOpen = !state.sidebarOpen),
  closeSidebar: state => (state.sidebarOpen = false),
  openSidebar: state => (state.sidebarOpen = true),
  setPageYPos: state => (state.pageYPos = window.scrollY)
}

export default {
  state,
  getters,
  actions,
  mutations
}
