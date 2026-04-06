/**
 * Tailwind default breakpoints (pixel widths).
 * Use these for `<picture>` / `sizes` / JS media checks — HTML `media=""` cannot use CSS variables.
 *
 * If you override `@theme { --breakpoint-* }` in `styles.css`, update these values to match.
 * @see https://tailwindcss.com/docs/breakpoints
 */
export const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export type ScreenKey = keyof typeof screens

/** `(min-width: …)` for use in `<source media={…} />` */
export function minWidth(screen: ScreenKey): string {
  return `(min-width: ${screens[screen]})`
}
