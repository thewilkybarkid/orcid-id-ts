import { mod11_2 } from 'cdigit'
import * as fc from 'fast-check'
import { toDashFormat } from 'orcid-utils'
import * as _ from '../src'

export * from 'fast-check'

export const orcid = (): fc.Arbitrary<_.Orcid> =>
  fc
    .stringOf(fc.constantFrom('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'), {
      minLength: 4 + 4 + 4 + 3,
      maxLength: 4 + 4 + 4 + 3,
    })
    .map(value => toDashFormat(mod11_2.generate(value)) as _.Orcid)
