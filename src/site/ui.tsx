import { motion } from 'motion/react'
import type { ReactNode } from 'react'

import { cx } from '../lib/cx'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx('mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12', className)}>{children}</div>
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* The small green label that opens every section. */
export function Eyebrow({ children, tone = 'fern' }: { children: ReactNode; tone?: 'fern' | 'cream' }) {
  return (
    <p
      className={cx(
        'latin flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase',
        tone === 'fern' ? 'text-fern' : 'text-cream',
      )}
    >
      <span className={cx('inline-block size-2 rounded-full', tone === 'fern' ? 'bg-fern' : 'bg-cream')} />
      {children}
    </p>
  )
}

export function SectionTitle({
  children,
  sub,
  tone = 'fern',
  className,
}: {
  children: ReactNode
  sub?: ReactNode
  tone?: 'fern' | 'cream'
  className?: string
}) {
  return (
    <div className={cx('flex flex-col gap-4', className)}>
      <h2
        className={cx(
          'text-[clamp(2rem,5.2vw,3.6rem)]',
          tone === 'fern' ? 'text-fern' : 'text-cream',
        )}
      >
        {children}
      </h2>
      {sub && (
        <p
          className={cx(
            'max-w-[54ch] text-[15.5px] leading-[1.9] sm:text-[16.5px]',
            tone === 'fern' ? 'text-fern/85' : 'text-cream/85',
          )}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

type CtaProps = {
  href: string
  children: ReactNode
  tone?: 'solid' | 'ghost' | 'cream'
  className?: string
}

/* Buttons are printed stickers: solid fill, hard offset shadow, tiny lift. */
export function Cta({ href, children, tone = 'solid', className }: CtaProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold transition-[transform,box-shadow] duration-200 ease-[var(--ease-soft)] active:translate-y-[2px] active:shadow-none'
  const styles = {
    solid: 'bg-fern text-cream shadow-[5px_5px_0_var(--color-cream)] hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--color-cream)]',
    ghost:
      'border-2 border-fern text-fern shadow-[5px_5px_0_var(--color-fern)] hover:-translate-y-0.5 hover:bg-fern hover:text-cream',
    cream:
      'bg-cream text-fern shadow-[5px_5px_0_var(--color-fern)] hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--color-fern)]',
  }[tone]

  return (
    <a href={href} className={cx(base, styles, className)}>
      {children}
    </a>
  )
}

/* Cream paper card with a green edge. Used for anything with a paragraph. */
export function Paper({
  children,
  className,
  as: As = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  return (
    <As className={cx('rounded-[var(--radius-card)] border-2 border-fern bg-cream', className)}>{children}</As>
  )
}
