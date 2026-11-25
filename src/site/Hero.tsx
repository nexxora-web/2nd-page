import { ArrowRight, MapPin } from 'lucide-react'

import { MARQUEE_WORDS } from './data'
import { Container, Cta } from './ui'

const STATS = [
  { value: '7日', label: '最短で公開' },
  { value: '¥29,800', label: '制作費（税込）' },
  { value: '3ヶ月', label: '保守が無料' },
]

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[264px] animate-float">
      <div className="overflow-hidden rounded-[34px] border-[9px] border-fern bg-cream shadow-[14px_14px_0_rgba(10,36,22,0.32)]">
        <div className="flex items-center justify-between bg-fern px-3.5 py-2.5 text-[9px] font-bold text-cream">
          <span className="tracking-wide">〇〇食堂</span>
          <span className="text-cream/70">西成区</span>
        </div>
        <img
          src="/images/ramen.jpg"
          alt="ラーメンの写真を大きく使ったお店のトップページ"
          className="h-[148px] w-full object-cover"
          loading="eager"
        />
        <div className="space-y-2.5 px-3.5 py-3.5">
          <p className="text-[15px] leading-[1.25] font-black text-fern">
            毎日つくる、
            <br />
            一杯のために。
          </p>
          <div className="space-y-1 text-[9px] leading-relaxed text-fern/75">
            <p>営業時間 11:30–14:00 / 18:00–23:00</p>
            <p>定休日 水曜日</p>
            <p>大阪市西成区 1-2-3</p>
          </div>
          <div className="flex gap-1.5 pt-0.5">
            <span className="rounded-full bg-fern px-3 py-1.5 text-[9px] font-bold text-cream">電話する</span>
            <span className="rounded-full border border-fern px-3 py-1.5 text-[9px] font-bold text-fern">地図</span>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -left-7 -rotate-6 rounded-full border-2 border-fern bg-cream px-3.5 py-1.5 text-[11px] font-black text-fern shadow-[3px_3px_0_var(--color-fern)]">
        7日で公開
      </div>
      <div className="absolute -right-6 bottom-14 rotate-6 rounded-full bg-fern px-3.5 py-1.5 text-[11px] font-black text-cream">
        スマホ対応
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Field decoration: concentric rings and a dot grid, both in green. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 dotted opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[620px] rounded-full border-[2px] border-fern/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 size-[420px] rounded-full border-[2px] border-fern/20"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 pt-14 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-20 lg:pb-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-fern px-3.5 py-1.5 text-[11.5px] font-bold">
              <MapPin className="size-3.5" strokeWidth={2.8} aria-hidden />
              大阪・西成区｜小さなお店専門
            </p>

            <h1 className="text-[clamp(2.5rem,7.6vw,4.6rem)] leading-[1.06]">
              スマホで
              <br />
              見つかる、
              <br />
              <span className="relative inline-block bg-cream px-2.5 pb-1 shadow-[6px_6px_0_var(--color-fern)]">
                お店になる。
              </span>
            </h1>

            <p className="mt-7 max-w-[46ch] text-[15.5px] leading-[1.95] font-medium sm:text-[17px]">
              ホームページがない。古いまま。スマホで見にくい。
              <br className="hidden sm:block" />
              その3つを、<strong className="font-black">7日</strong>で終わらせます。
              1ページ <strong className="font-black">29,800円</strong>から、
              西成区の小さなお店のための制作です。
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Cta href="#contact">
                無料でスマホ検診
                <ArrowRight className="size-4" strokeWidth={2.8} aria-hidden />
              </Cta>
              <Cta href="#price" tone="ghost">
                料金を見る
              </Cta>
            </div>

            <dl className="mt-11 grid max-w-[430px] grid-cols-3 gap-3 border-t-2 border-fern/25 pt-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="latin block text-[clamp(1.25rem,3vw,1.7rem)] leading-none font-black">
                      {s.value}
                    </span>
                    <span className="mt-1.5 block text-[11px] font-bold text-fern/70">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <PhoneMock />
        </div>
      </Container>

      {/* Keyword ribbon */}
      <div className="border-y-2 border-fern bg-cream py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-8" aria-hidden={copy === 1}>
              {MARQUEE_WORDS.map((word) => (
                <span key={`${copy}-${word}`} className="flex items-center gap-8 text-[13px] font-bold">
                  {word}
                  <span className="size-1.5 rounded-full bg-fern/50" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="sr-only">西成区・天下茶屋・岸里・玉出・新世界・萩之茶屋・粉浜など大阪市内に対応しています。</p>
    </section>
  )
}
