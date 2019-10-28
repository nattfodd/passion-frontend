export function authHeader(authToken) {
  return {
    headers: {
      "Authorization": `Bearer ${authToken}`
    }
  }
}
