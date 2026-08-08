import type { FunnelStep, FunnelVariant } from './data/types'

export const VARIANTS: FunnelVariant[] = ['complete', 'compact']

const DEFAULT_VARIANT: FunnelVariant = 'complete'

function normalize(value: string | null | undefined): FunnelVariant | null {
  const v = value?.toLowerCase().trim()
  return VARIANTS.includes(v as FunnelVariant) ? (v as FunnelVariant) : null
}

/**
 * Which funnel variant to render:
 *   /?variant=complete → full flow (default)
 *   /?variant=compact  → drops the reading-habit questions
 *
 * The path is also scanned (e.g. `/variant=compact`) so a link that loses its
 * `?` still lands on the right flow. Anything unrecognised falls back to the
 * default, so a shared link always shows a working funnel.
 */
export function getVariant(
  search: string = window.location.search,
  pathname: string = window.location.pathname,
): FunnelVariant {
  return (
    normalize(new URLSearchParams(search).get('variant')) ??
    normalize(pathname.match(/variant=([a-z]+)/i)?.[1]) ??
    DEFAULT_VARIANT
  )
}

/** Steps belonging to a variant, in flow order. */
export function stepsForVariant(steps: FunnelStep[], variant: FunnelVariant): FunnelStep[] {
  return steps.filter((s) => !s.variants || s.variants.includes(variant))
}
