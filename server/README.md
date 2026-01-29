Setup and run the local API server

1. From the `pcc-web` folder, install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm run server
```

The server listens on port 3000 and exposes:

- `POST /api/submit` — accept JSON { name, email, message, source }
- `GET /api/submissions` — return stored submissions

Data is stored in `pcc-web/server/data.sqlite`.

Admin access
-----------

The submissions endpoints are protected with HTTP Basic auth. Set environment variables before starting the server:

```bash
export ADMIN_USER=admin
export ADMIN_PASS=strongpassword
npm run server
```

Access from curl:

```bash
curl -u admin:strongpassword http://localhost:3000/api/submissions
curl -u admin:strongpassword -O http://localhost:3000/api/submissions/export
```

The admin UI is at the route `/admin/submissions` in the SPA — enter the same credentials there to view and export submissions.

JWT admin flow
--------------

This server also supports a JWT-based admin flow. Set `ADMIN_USER` and `ADMIN_PASS` before first start to create an initial admin user. Then login to receive a token:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username":"admin","password":"strongpassword"}' http://localhost:3000/api/admin/login
```

You will receive a JSON `{ "token": "..." }`. Use this token in the SPA admin page (or in curl) as a Bearer token:

```bash
curl -H "Authorization: Bearer <token>" http://localhost:3000/api/submissions
curl -H "Authorization: Bearer <token>" -O http://localhost:3000/api/submissions/export
```

The SPA admin page `/admin/submissions` now uses this JWT login flow. The token is stored in `localStorage` for convenience.
