# README

Running the app:

```sh
yarn start
```

Credentials to log in: `test@example.com` / `Qwerty123`

## Description

That's a pretty simple SPA application. On the root page there's a hierachy of Verticals -> Categories -> Courses. The data is being fetched from backend, protected with oauth token. Login/logout features implemented, along with protected routes.

I intentionally omitted unhappy paths, like showing errors and refreshing expired token as it would already take too much time to spend on it. For the same reason I ommited tests.

Code structure is pretty simple: components with views, and modules with some functionality logically separated.
