import { Hono } from 'hono'

import { validateConsult } from '../shared/validation'

// The Worker in front of the static site. Nothing is stored server-side yet:
// connect /api/consult to an email provider (or a D1 table) and every enquiry
// from the form is captured. Everything else falls through to the built assets.
type Env = { ASSETS: Fetcher }

const app = new Hono<{ Bindings: Env }>()

const readJson = async (req: Request): Promise<Record<string, unknown> | null> => {
  try {
    const body = await req.json()
    return body && typeof body === 'object' && !Array.isArray(body) ? (body as Record<string, unknown>) : null
  } catch {
    return null
  }
}

const ref = () => `NX-${crypto.randomUUID().slice(0, 6).toUpperCase()}`

app.get('/api/health', (c) => c.json({ ok: true }))

app.post('/api/consult', async (c) => {
  const body = await readJson(c.req.raw)
  if (!body) return c.json({ error: 'Send a JSON body.' }, 400)

  const errors = validateConsult(body)
  if (Object.keys(errors).length) return c.json({ error: '入力内容をご確認ください。', errors }, 422)

  return c.json(
    {
      ok: true,
      ref: ref(),
      shop: String(body.shop).trim(),
      plan: body.plan,
    },
    201,
  )
})

app.all('/api/*', (c) => c.json({ error: 'Not found' }, 404))

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
