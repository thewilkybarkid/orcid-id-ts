/**
 * @since 0.1.0
 */
import * as E from 'fp-ts/Eq'
import * as O from 'fp-ts/Option'
import { Refinement } from 'fp-ts/Refinement'
import { flow } from 'fp-ts/function'
import * as s from 'fp-ts/string'
import { toDashFormat } from 'orcid-utils'

import Option = O.Option

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
// constructors
// -------------------------------------------------------------------------------------

/**
 * @example
 * import { Orcid } from 'orcid-id-ts'
 *
 * const orcidId = Orcid('0000-0002-1825-0097')
 *
 * assert.deepStrictEqual(orcidId, '0000-0002-1825-0097')
 *
 * @category constructors
 * @since 0.1.3
 */
export function Orcid(orcid: string): Orcid {
  if (!isOrcid(orcid)) {
    throw new Error('Not an ORCID iD')
  }

  return orcid
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

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @example
 * import { Orcid, parse } from 'orcid-id-ts'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(parse('https://orcid.org/0000-0002-1825-0097'), O.some('0000-0002-1825-0097' as Orcid))
 * assert.deepStrictEqual(parse('not an ORCID iD'), O.none)
 *
 * @since 0.1.2
 */
export const parse: (s: string) => Option<Orcid> = flow(s.trim, O.tryCatchK(toDashFormat as (input: string) => Orcid))
