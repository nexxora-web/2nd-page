import { Container } from './ui'

const LEGAL = [
  ['屋号', 'Nexxora Web（ネクソラウェブ）'],
  ['所在地', '大阪市西成区（詳細はお問い合わせ時にお伝えします）'],
  ['連絡先', 'nexxoraweb@gmail.com'],
  ['販売価格', '各プランに表示の金額（税込）'],
  ['お支払い', '銀行振込（着手金50％・公開後50％）'],
  ['引渡し', 'ご契約から7〜10日（写真・原稿がそろってから）'],
  ['キャンセル', '制作着手後のキャンセルは着手金を申し受けます'],
]

export function Footer() {
  return (
    <footer className="border-t-2 border-fern bg-fern pt-14 pb-8 text-cream">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="latin text-[20px] font-black tracking-[-0.045em] text-cream">NEXXORA</span>
              <span className="latin rounded-[5px] bg-cream px-1.5 py-[3px] text-[9.5px] font-bold tracking-[0.24em] text-fern">
                WEB
              </span>
            </div>
            <p className="mt-1 text-[11.5px] font-bold text-cream/60">ネクソラウェブ</p>
            <p className="mt-5 max-w-[34ch] text-[13.5px] leading-[1.9] text-cream/80">
              大阪市西成区の、小さなお店のためのホームページ制作。
              スマホで見つかるサイトを、7日で。
            </p>
            <a
              href="mailto:nexxoraweb@gmail.com"
              className="mt-4 inline-block text-[13.5px] font-bold text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
            >
              nexxoraweb@gmail.com
            </a>
          </div>

          <nav aria-label="フッターナビゲーション">
            <p className="latin text-[10.5px] font-bold tracking-[0.24em] text-cream/50">MENU</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px] font-medium">
              <li>
                <a href="#works" className="text-cream/85 hover:text-cream">
                  できること
                </a>
              </li>
              <li>
                <a href="#price" className="text-cream/85 hover:text-cream">
                  料金
                </a>
              </li>
              <li>
                <a href="#flow" className="text-cream/85 hover:text-cream">
                  制作の流れ
                </a>
              </li>
              <li>
                <a href="#faq" className="text-cream/85 hover:text-cream">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream/85 hover:text-cream">
                  無料相談
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="latin text-[10.5px] font-bold tracking-[0.24em] text-cream/50">AREA</p>
            <p className="mt-4 text-[13.5px] leading-[1.9] text-cream/80">
              西成区・天下茶屋・岸里・玉出・
              <br />
              新世界・萩之茶屋・粉浜
              <br />
              大阪市内は訪問対応
            </p>
          </div>
        </div>

        <details className="group mt-11 border-t border-cream/20 pt-5">
          <summary className="flex cursor-pointer list-none items-center gap-2 text-[12px] font-bold text-cream/70 [&_summary::-webkit-details-marker]:hidden">
            特定商取引法に基づく表記
            <span className="transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <dl className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {LEGAL.map(([k, v]) => (
              <div key={k} className="flex gap-3 text-[12px] leading-[1.8]">
                <dt className="w-24 shrink-0 text-cream/50">{k}</dt>
                <dd className="text-cream/85">{v}</dd>
              </div>
            ))}
          </dl>
        </details>

        <div className="mt-8 flex flex-col gap-2 border-t border-cream/20 pt-6 text-[11.5px] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="latin">© {new Date().getFullYear()} Nexxora Web</p>
          <p>大阪市西成区｜小さなお店のためのホームページ制作</p>
        </div>
      </Container>
    </footer>
  )
}
