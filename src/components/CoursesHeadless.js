import { authHeader } from "./AuthHeader"

export async function getCourses(authToken, categoryId) {
  const queryParams = new URLSearchParams(Object.entries({ category_id: categoryId })).toString();
  return fetch("http://localhost:3000/courses?" + queryParams, authHeader(authToken))
    .then(res => res.json())
}
