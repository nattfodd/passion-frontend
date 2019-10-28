import { authHeader } from "./AuthHeader"

export async function getVerticals(authToken) {
  return fetch("http://localhost:3000/verticals", authHeader(authToken))
    .then(res => res.json())
}
