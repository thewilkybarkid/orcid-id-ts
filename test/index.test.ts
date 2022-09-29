import * as O from 'fp-ts/Option'
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

  describe('utils', () => {
    describe('parse', () => {
      test('when it contains an ORCID iD', () => {
        fc.assert(
          fc.property(
            fc
              .tuple(
                fc.orcid(),
                fc.stringOf(fc.constant(' ')),
                fc.constantFrom('orcid.org/', 'https://orcid.org/', 'http://orcid.org/'),
                fc.stringOf(fc.constant(' ')),
              )
              .map(([orcid, whitespaceBefore, prefix, whitespaceAfter]) => [
                orcid,
                `${whitespaceBefore}${prefix}${orcid}${whitespaceAfter}`,
              ]),
            ([orcid, input]) => {
              expect(_.parse(input)).toStrictEqual(O.some(orcid))
            },
          ),
        )
      })

      test('when it does not contain an ORCID iD', () => {
        fc.assert(
          fc.property(fc.unicodeString(), input => {
            expect(_.parse(input)).toStrictEqual(O.none)
          }),
        )
      })
    })
  })
})
