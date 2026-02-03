# Email Backend (Node)

This simple Express server receives submissions from JoinUs and ContactUs forms and emails them to `pccliberia2025@gmail.com` by default.

## Setup

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file (see `.env.example`) and set SMTP credentials.
3. Start the server:
   ```bash
   npm run start
   ```

## Endpoints

### `POST /api/join-us`

**Body (JSON):**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+231555000",
  "message": "I want to join"
}
```

### `POST /api/contact-us`

**Body (JSON):**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Question",
  "message": "Hello!"
}
```

## Notes
- The destination email defaults to `pccliberia2025@gmail.com`. You can override it with `TO_EMAIL`.
- `FROM_EMAIL` must be a valid sender for your SMTP provider.
- `CORS_ORIGIN` can be set to a comma-separated list of allowed origins.
- The server adds sender metadata like IP and user-agent to the email body.
- **Development:** if no SendGrid or SMTP config is provided and `NODE_ENV` is not `production`, the server will create a temporary Ethereal account and log a preview URL for sent emails so you can view them locally.

## Testing

From the project root you can start the server:

```bash
npm run server
```

Quick curl examples:

- Join form:

```bash
curl -X POST http://localhost:3000/api/join-us \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","phone":"+231555000","message":"I want to join"}'
```

- Contact form:

```bash
curl -X POST http://localhost:3000/api/contact-us \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","subject":"Question","message":"Hello!"}'
```

If running in development without SMTP/SendGrid you will see an Ethereal preview URL logged when emails are sent; open that URL in your browser to inspect the message.

