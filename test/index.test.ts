import * as _ from '../src'
import * as fc from './fc'

describe('orcid-id-ts', () => {
  describe('destructors', () => {
    test('toUrl', () => {
      fc.assert(
        fc.property(fc.orcid(), orcid => {
          expect(_.toUrl(orcid)).toStrictEqual(new URL(`https://orcid.org/${orcid}`))
        }),
      )
    })
  })

  describe('instances', () => {
    describe('Eq', () => {
      test('with the same ORCID', () => {
        fc.assert(
          fc.property(fc.orcid(), orcid => {
            expect(_.Eq.equals(orcid, orcid)).toBe(true)
          }),
        )
      })

      test('with different ORCIDs', () => {
        fc.assert(
          fc.property(fc.orcid(), fc.orcid(), (orcid1, orcid2) => {
            expect(_.Eq.equals(orcid1, orcid2)).toBe(false)
          }),
        )
      })
    })
  })

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
