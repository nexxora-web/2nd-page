import { ArrowRight, Check, Clock, Globe, MessageCircle, Smartphone } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'

import { cx } from '../lib/cx'
import { validateConsult, type FieldErrors } from '../shared/validation'
import { FAQS, PLANS, STEPS } from './data'
import { Container, Cta, Eyebrow, Paper, Reveal, SectionTitle } from './ui'

/* ------------------------------------------------------------------ problems */

const PROBLEMS = [
  {
    icon: Globe,
    title: 'ホームページがない',
    body: 'Instagramと食べログだけでは、営業時間も定休日も、電話番号も伝わりません。検索した人は、そのまま近くの別のお店へ行きます。',
  },
  {
    icon: Clock,
    title: '情報が古いまま',
    body: '5年前に作ったきり、更新されていないサイト。お客さんは「もう閉店したのかも」と受け取ります。実際、そう思われています。',
  },
  {
    icon: Smartphone,
    title: 'スマホで見にくい',
    body: '文字が小さい、電話番号が押せない、写真が重い。いま、お店を探す人のほとんどはスマホです。そこで読めないと、意味がありません。',
  },
]

export function Problems() {
  return (
    <section id="problems" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Check your shop</Eyebrow>
          <SectionTitle
            className="mt-4"
            sub="お店を選ぶ前に、お客さんはスマホで検索しています。そこで見つからない、あるいは古い情報が出てくる——それがいちばんもったいない失客です。"
          >
            そのお店、
            <br />
            スマホで見つかりますか？
          </SectionTitle>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i} className="h-full">
              <Paper className="flex h-full flex-col gap-4 p-6 shadow-[5px_5px_0_var(--color-fern)] sm:p-7">
                <span className="grid size-12 place-items-center rounded-full bg-fern text-cream">
                  <p.icon className="size-5.5" strokeWidth={2.4} aria-hidden />
                </span>
                <h3 className="text-[19px] leading-tight">{p.title}</h3>
                <p className="text-[14.5px] leading-[1.9] text-fern/80">{p.body}</p>
              </Paper>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* --------------------------------------------------------------------- works */

const DELIVERABLES = [
  'スマホで読みやすい文字サイズと余白',
  '電話・地図・LINEが、指1本で押せる',
  'Googleマップとつながる店舗情報',
  '写真が主役。重くない、速いページ',
  'メニューと値段を、正直に載せる',
  '公開後の更新も、月額でおまかせ',
]

export function Works() {
  return (
    <section id="works" className="scroll-mt-20 border-y-2 border-fern bg-flame-light py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <img
                src="/images/shop.jpg"
                alt="大阪の小さなお店のカウンター"
                className="w-full rounded-[var(--radius-panel)] border-2 border-fern object-cover shadow-[10px_10px_0_var(--color-fern)]"
                loading="lazy"
              />
              <div className="absolute -bottom-5 left-5 rounded-full border-2 border-fern bg-cream px-4 py-2 text-[12px] font-black shadow-[4px_4px_0_var(--color-fern)]">
                西成区の、ふつうのお店のための
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Eyebrow>What you get</Eyebrow>
            <SectionTitle className="mt-4" sub="派手なサイトは作りません。お客さんが知りたい5つのことを、迷わず読める形に整えます。">
              できること
            </SectionTitle>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-fern text-cream">
                    <Check className="size-3" strokeWidth={3.4} aria-hidden />
                  </span>
                  <span className="text-[14.5px] leading-[1.7] font-medium">{d}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[48ch] text-[14px] leading-[1.9] text-fern/80">
              制作は<strong className="font-black">7日</strong>。
              公開後の保守は<strong className="font-black">月4,980円</strong>（初回3ヶ月無料）で、
              ドメイン・サーバー・バックアップ・小さな更新まで含みます。
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------- pricing */

export function Pricing() {
  return (
    <section id="price" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Pricing</Eyebrow>
          <SectionTitle
            className="mt-4"
            sub="税込・追加料金なし。写真撮影と言語対応だけ、必要な方が追加する形です。安く見せるための小さい文字は書きません。"
          >
            料金は、
            <br />
            最初から全部見せます。
          </SectionTitle>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={0.06 * i} className="h-full">
              <div
                className={cx(
                  'relative flex h-full flex-col gap-5 rounded-[var(--radius-card)] border-2 border-fern p-6 sm:p-7',
                  plan.featured
                    ? 'bg-fern text-cream shadow-[8px_8px_0_var(--color-cream)] lg:-translate-y-3'
                    : 'bg-cream shadow-[6px_6px_0_var(--color-fern)]',
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-6 rounded-full border-2 border-fern bg-honey px-3 py-1 text-[10.5px] font-black text-fern">
                    いちばん人気
                  </span>
                )}

                <div>
                  <p className={cx('latin text-[10.5px] font-bold tracking-[0.24em]', plan.featured ? 'text-cream/60' : 'text-fern/50')}>
                    {plan.latin}
                  </p>
                  <h3 className={cx('mt-1.5 text-[24px]', plan.featured && 'text-cream')}>{plan.name}</h3>
                  <p className={cx('mt-1 text-[12.5px] font-bold', plan.featured ? 'text-cream/70' : 'text-fern/60')}>
                    {plan.pages}・税込
                  </p>
                </div>

                <div>
                  <p className="flex items-baseline gap-1">
                    <span className="text-[15px] font-bold">¥</span>
                    <span className="latin text-[clamp(2.1rem,5vw,2.6rem)] leading-none font-black tracking-[-0.04em]">
                      {plan.price}
                    </span>
                  </p>
                  <p
                    className={cx(
                      'mt-2 inline-block rounded-full px-2.5 py-1 text-[10.5px] font-bold',
                      plan.featured ? 'bg-cream text-fern' : 'bg-fern text-cream',
                    )}
                  >
                    最初の3社限定 ¥{plan.monitor}
                  </p>
                </div>

                <p className={cx('text-[13.5px] leading-[1.85]', plan.featured ? 'text-cream/85' : 'text-fern/80')}>
                  {plan.summary}
                </p>

                <ul className={cx('flex flex-1 flex-col gap-2 border-t-2 pt-4', plan.featured ? 'border-cream/20' : 'border-fern/15')}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] leading-[1.65]">
                      <Check
                        className={cx('mt-0.5 size-3.5 shrink-0', plan.featured ? 'text-honey' : 'text-fern')}
                        strokeWidth={3.2}
                        aria-hidden
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cx(
                    'mt-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-bold transition-transform hover:-translate-y-0.5',
                    plan.featured
                      ? 'bg-cream text-fern shadow-[4px_4px_0_rgba(255,244,228,0.45)]'
                      : 'bg-fern text-cream shadow-[4px_4px_0_rgba(10,36,22,0.28)]',
                  )}
                >
                  このプランで相談する
                  <ArrowRight className="size-3.5" strokeWidth={2.8} aria-hidden />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Paper className="mt-8 p-6 sm:p-7">
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <p className="text-[12px] font-black tracking-wide">月額の保守（任意）</p>
                <p className="mt-1.5 text-[13.5px] leading-[1.8] text-fern/80">
                  月4,980円。ドメイン・サーバー・SSL・バックアップ・月2回の更新・LINEサポート。制作と同時なら
                  <strong className="font-black">初回3ヶ月無料</strong>。
                </p>
              </div>
              <div>
                <p className="text-[12px] font-black tracking-wide">オプション</p>
                <p className="mt-1.5 text-[13.5px] leading-[1.8] text-fern/80">
                  写真撮影 15,000円／英語・中国語ページ 19,800円／ロゴ整理 15,000円。見積りに全部書きます。
                </p>
              </div>
              <div>
                <p className="text-[12px] font-black tracking-wide">お支払い</p>
                <p className="mt-1.5 text-[13.5px] leading-[1.8] text-fern/80">
                  着手金50％、公開後7日以内に残り50％。銀行振込。見積有効期限は30日です。
                </p>
              </div>
            </div>
          </Paper>
        </Reveal>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------- process */

export function Process() {
  return (
    <section id="flow" className="scroll-mt-20 border-y-2 border-fern py-20 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <SectionTitle
            className="mt-4"
            sub="お店側にお願いするのは、ヒアリング45分と、確認の1回だけ。あとはこちらで進めます。"
          >
            制作の流れ
          </SectionTitle>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={0.05 * i} className="h-full">
              <div className="relative flex h-full flex-col gap-3 rounded-[var(--radius-card)] border-2 border-fern bg-cream p-5 shadow-[4px_4px_0_var(--color-fern)]">
                <div className="flex items-center justify-between">
                  <span className="latin grid size-9 place-items-center rounded-full bg-fern text-[12px] font-black text-cream">
                    {s.n}
                  </span>
                  <span className="rounded-full border border-fern/25 px-2 py-0.5 text-[10.5px] font-bold text-fern/70">
                    {s.time}
                  </span>
                </div>
                <h3 className="text-[16.5px]">{s.title}</h3>
                <p className="text-[13px] leading-[1.8] text-fern/80">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* --------------------------------------------------------------------- offer */

export function Offer() {
  return (
    <section className="border-b-2 border-fern bg-fern py-16 text-cream sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <Eyebrow tone="cream">Free check</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.9rem,4.6vw,3rem)] text-cream">
              まずは、無料の
              <br />
              スマホ検診から。
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[14.5px] leading-[1.95] text-cream/85">
              お店の名前でGoogle検索した結果を、A4一枚にまとめてお渡しします。写真・営業時間・メニューが、
              お客さんの目にどう映っているか。売り込みはしません。検診だけでも構いません。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Cta href="#contact" tone="cream">
                検診を申し込む
                <ArrowRight className="size-4" strokeWidth={2.8} aria-hidden />
              </Cta>
              <a
                href="mailto:nexxoraweb@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream px-6 py-3.5 text-[15px] font-bold text-cream transition-colors hover:bg-cream hover:text-fern"
              >
                <MessageCircle className="size-4" strokeWidth={2.4} aria-hidden />
                メールで聞く
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------- faq */

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <SectionTitle className="mt-4" sub="ここにないことは、遠慮なく聞いてください。メールは翌営業日までに返します。">
              よくある質問
            </SectionTitle>
          </Reveal>

          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={0.04 * i}>
                <details className="group rounded-[16px] border-2 border-fern bg-cream px-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4.5 text-[15px] leading-snug font-bold">
                    {f.q}
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-fern text-cream transition-transform duration-300 group-open:rotate-45">
                      <span className="text-[15px] leading-none font-black">+</span>
                    </span>
                  </summary>
                  <p className="pb-5 text-[14px] leading-[1.9] text-fern/80">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------- contact */

const FIELD =
  'h-12 w-full rounded-[12px] border-2 border-fern/70 bg-cream-2 px-3.5 text-[15px] text-fern placeholder:text-fern/35 transition-shadow duration-150 focus:border-fern focus:shadow-[3px_3px_0_var(--color-fern)] focus:outline-none'

type Status = 'idle' | 'sending' | 'done' | 'error'

export function Contact() {
  const [form, setForm] = useState({ shop: '', name: '', email: '', plan: 'standard', message: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [ref, setRef] = useState('')

  const set =
    (key: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validateConsult(form)
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }
    setErrors({})
    setStatus('sending')
    try {
      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await res.json()) as { errors?: FieldErrors; ref?: string }
      if (res.status === 422) {
        setErrors(data.errors ?? {})
        setStatus('idle')
        return
      }
      if (!res.ok) throw new Error('request failed')
      setRef(data.ref ?? '')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 pb-24">
      <Container>
        <Reveal>
          <Paper className="overflow-hidden p-0 shadow-[10px_10px_0_var(--color-fern)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-fern px-6 py-9 text-cream sm:px-9 sm:py-11">
                <Eyebrow tone="cream">Contact</Eyebrow>
                <h2 className="mt-4 text-[clamp(1.7rem,4vw,2.4rem)] text-cream">
                  お店のことを、
                  <br />
                  3分だけ教えてください。
                </h2>
                <p className="mt-5 max-w-[38ch] text-[14px] leading-[1.9] text-cream/80">
                  相談は無料です。このフォームの内容を読んで、24時間以内にご連絡します。
                  まだ何も決まっていなくても大丈夫です。
                </p>

                <dl className="mt-8 space-y-3 border-t border-cream/20 pt-6 text-[13px]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/60">メール</dt>
                    <dd className="font-bold">nexxoraweb@gmail.com</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/60">対応エリア</dt>
                    <dd className="font-bold">西成区・大阪市</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/60">受付</dt>
                    <dd className="font-bold">9:00 – 19:00</dd>
                  </div>
                </dl>
              </div>

              <div className="px-6 py-9 sm:px-9 sm:py-11">
                {status === 'done' ? (
                  <div className="flex h-full flex-col justify-center gap-4">
                    <span className="grid size-14 place-items-center rounded-full bg-fern text-cream">
                      <Check className="size-6" strokeWidth={3} aria-hidden />
                    </span>
                    <h3 className="text-[24px]">ありがとうございます。</h3>
                    <p className="text-[14.5px] leading-[1.9] text-fern/80">
                      受け付けました。受付番号は
                      <strong className="latin font-black"> {ref || 'NX-XXXXXX'} </strong>
                      です。24時間以内に、ご入力のメールアドレスへご連絡します。
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-2 w-fit rounded-full border-2 border-fern px-4 py-2 text-[13px] font-bold hover:bg-fern hover:text-cream"
                    >
                      もう一度送る
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="店名" required error={errors.shop}>
                        <input
                          className={FIELD}
                          value={form.shop}
                          onChange={set('shop')}
                          placeholder="例：〇〇食堂"
                          aria-invalid={errors.shop ? true : undefined}
                        />
                      </Field>
                      <Field label="お名前" required error={errors.name}>
                        <input
                          className={FIELD}
                          value={form.name}
                          onChange={set('name')}
                          placeholder="例：山田 太郎"
                          aria-invalid={errors.name ? true : undefined}
                        />
                      </Field>
                    </div>

                    <Field label="メールアドレス" required error={errors.email}>
                      <input
                        className={FIELD}
                        type="email"
                        inputMode="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="例：shop@example.com"
                        aria-invalid={errors.email ? true : undefined}
                      />
                    </Field>

                    <Field label="ご希望のプラン" required error={errors.plan}>
                      <select className={cx(FIELD, 'appearance-none pr-9')} value={form.plan} onChange={set('plan')}>
                        <option value="light">ライト（1ページ・29,800円）</option>
                        <option value="standard">スタンダード（5ページ・49,800円）</option>
                        <option value="growth">グロース（8ページ・79,800円）</option>
                        <option value="unsure">まだ決めていない</option>
                      </select>
                    </Field>

                    <Field label="ご相談内容" error={errors.message}>
                      <textarea
                        className={cx(FIELD, 'h-28 resize-none py-3 leading-relaxed')}
                        value={form.message}
                        onChange={set('message')}
                        placeholder="例：メニューと営業時間だけの1ページがほしい。写真は自分たちで用意できます。"
                      />
                    </Field>

                    {status === 'error' && (
                      <p className="rounded-[10px] border-2 border-fern bg-cream-2 px-3 py-2 text-[13px] font-bold">
                        送信できませんでした。お手数ですが、nexxoraweb@gmail.com へ直接ご連絡ください。
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-fern px-6 py-3.5 text-[15px] font-bold text-cream shadow-[5px_5px_0_var(--color-fern)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                    >
                      {status === 'sending' ? '送信中…' : '無料相談を送る'}
                      {status !== 'sending' && <ArrowRight className="size-4" strokeWidth={2.8} aria-hidden />}
                    </button>
                    <p className="text-[11.5px] leading-relaxed text-fern/60">
                      送信いただいた内容は、ご相談のご連絡のみに使用します。
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Paper>
        </Reveal>
      </Container>
    </section>
  )
}

/* -------------------------------------------------------------------- field  */

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="flex items-center gap-1.5 text-[12.5px] font-bold">
        {label}
        {required && <span className="rounded-[4px] bg-fern px-1 py-0.5 text-[9.5px] text-cream">必須</span>}
      </span>
      {children}
      {error && <span className="text-[12px] font-bold text-flame-deep">{error}</span>}
    </label>
  )
}
