import { authHeader } from "./AuthHeader"

export async function getCategories(authToken, verticalId) {
  const queryParams = new URLSearchParams(Object.entries({ vertical_id: verticalId })).toString();
  return fetch("http://localhost:3000/categories?" + queryParams, authHeader(authToken))
    .then(res => res.json())
}
