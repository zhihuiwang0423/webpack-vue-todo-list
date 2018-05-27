export default {
  fullName (state) {
    console.log('a')

    return `${state.firstName} ${state.lastName}`
  }
}
