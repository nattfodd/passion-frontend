export async function authenticate(email, password, onSuccess, onFailure) {
  const body = {
    email: email,
    password: password,
    grant_type: "password"
  }

  const params = {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }

  return fetch("http://localhost:3000/oauth/token", params)
    .then(response => response.json())
    .then((result) => {
      onSuccess(result)
    })
    .catch((_) => {
      onFailure()
    })
}
