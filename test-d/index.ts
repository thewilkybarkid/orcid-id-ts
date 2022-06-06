import { expectTypeOf } from 'expect-type'
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
