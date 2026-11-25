// Shared by the contact form and the Worker so both reject the same input.
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const PLAN_IDS = ['light', 'standard', 'growth', 'unsure'] as const

export type FieldErrors = Record<string, string>

export function validateConsult(input: {
  shop?: unknown
  name?: unknown
  email?: unknown
  plan?: unknown
  message?: unknown
}): FieldErrors {
  const errors: FieldErrors = {}
  const shop = typeof input.shop === 'string' ? input.shop.trim() : ''
  const name = typeof input.name === 'string' ? input.name.trim() : ''
  const email = typeof input.email === 'string' ? input.email.trim() : ''
  const message = typeof input.message === 'string' ? input.message.trim() : ''

  if (shop.length < 1 || shop.length > 80) errors.shop = '店名をご記入ください（80文字まで）。'
  if (name.length < 1 || name.length > 60) errors.name = 'お名前をご記入ください（60文字まで）。'
  if (!EMAIL_RE.test(email)) errors.email = 'メールアドレスをご確認ください（例：shop@example.com）。'
  if (!(PLAN_IDS as readonly string[]).includes(input.plan as string)) errors.plan = 'ご希望のプランをお選びください。'
  if (message.length > 1200) errors.message = 'ご相談内容は1200文字まででお願いします。'

  return errors
}
