/**
 * @since 0.1.0
 */
import * as E from 'fp-ts/Eq'
import { Refinement } from 'fp-ts/Refinement'
import * as s from 'fp-ts/string'
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
// destructors
// -------------------------------------------------------------------------------------

/**
 * @example
 * import { Orcid, toUrl } from 'orcid-id-ts'
 *
 * const url = toUrl('0000-0002-1825-0097' as Orcid)
 *
 * assert.deepStrictEqual(url.href, 'https://orcid.org/0000-0002-1825-0097')
 *
 * @category destructors
 * @since 0.1.1
 */
export const toUrl: (orcid: Orcid) => URL = orcid => new URL(orcid, 'https://orcid.org')

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 0.1.1
 */
export const Eq: E.Eq<Orcid> = E.contramap(s.toLowerCase)(s.Eq)

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
