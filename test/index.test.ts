import * as _ from '../src'
import * as fc from './fc'

describe('orcid-id-ts', () => {
  describe('refinements', () => {
    describe('isOrcid', () => {
      test('with an ORCID', () => {
        fc.assert(
          fc.property(fc.orcid(), orcid => {
            expect(_.isOrcid(orcid)).toBe(true)
          }),
        )
      })

      test('with a non-ORCID', () => {
        fc.assert(
          fc.property(fc.anything(), value => {
            expect(_.isOrcid(value)).toBe(false)
          }),
        )
      })
    })
  })
})
