import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cx } from '../lib/cx'
import { NAV_LINKS } from './data'
import { Container } from './ui'

export function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b-2 border-fern bg-flame/95 backdrop-blur-md">
      <Container>
        <div className="flex h-[68px] items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-2.5" aria-label="Nexxora Web ホーム">
            <span className="latin text-[19px] font-black tracking-[-0.045em] text-fern">NEXXORA</span>
            <span className="latin rounded-[5px] bg-fern px-1.5 py-[3px] text-[9.5px] font-bold tracking-[0.24em] text-cream">
              WEB
            </span>
            <span className="hidden text-[11px] font-bold text-fern/70 sm:inline">ネクソラウェブ</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="ページ内リンク">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-bold text-fern/85 underline-offset-[6px] transition-colors hover:text-fern hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-fern px-5 py-2.5 text-[13.5px] font-bold text-cream shadow-[4px_4px_0_var(--color-cream)] transition-transform hover:-translate-y-0.5 sm:inline-block"
            >
              無料で相談する
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
              className="grid size-11 place-items-center rounded-full border-2 border-fern text-fern md:hidden"
            >
              {open ? <X className="size-5" strokeWidth={2.6} /> : <Menu className="size-5" strokeWidth={2.6} />}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={cx(
          'overflow-hidden border-t-2 border-fern bg-cream transition-[max-height,opacity] duration-300 md:hidden',
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <Container>
          <nav className="flex flex-col py-3" aria-label="モバイルメニュー">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-fern/15 py-3.5 text-[15px] font-bold last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 mb-3 rounded-full bg-fern py-3 text-center text-[14px] font-bold text-cream"
            >
              無料で相談する
            </a>
          </nav>
        </Container>
      </div>
    </header>
  )
}
