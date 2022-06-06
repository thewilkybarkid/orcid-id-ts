/**
 * @since 0.1.0
 */
import { Refinement } from 'fp-ts/Refinement'
import { toDashFormat } from 'orcid-utils'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 0.1.0
 */
export type Orcid = string & OrcidBrand

interface OrcidBrand {
  readonly Orcid: unique symbol
}

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * @category refinements
 * @since 0.1.0
 */
export const isOrcid: Refinement<unknown, Orcid> = (u): u is Orcid => {
  try {
    return typeof u === 'string' && toDashFormat(u) === u
  } catch {
    return false
  }
}
