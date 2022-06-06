import { expectTypeOf } from 'expect-type'
import { Eq } from 'fp-ts/Eq'
import * as _ from '../src'

import Orcid = _.Orcid

declare const orcid: Orcid

//
// Orcid
//

expectTypeOf<Orcid>().toMatchTypeOf<string>()
expectTypeOf<string>().not.toMatchTypeOf<Orcid>()

//
// toUrl
//

expectTypeOf(_.toUrl(orcid)).toMatchTypeOf<URL>()

//
// Eq
//

expectTypeOf(_.Eq).toMatchTypeOf<Eq<Orcid>>()
