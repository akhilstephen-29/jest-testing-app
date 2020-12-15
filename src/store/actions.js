export function addCounter(payload) {
  console.log(payload)
  return { type: "ADD_COUNTER", payload}
}

export function getPosts(payload) {
  return {type: "GET_POSTS", payload}
}