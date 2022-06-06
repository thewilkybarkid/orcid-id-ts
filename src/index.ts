/**
 * @since 0.1.0
 */

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
