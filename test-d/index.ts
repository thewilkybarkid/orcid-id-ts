import { expectTypeOf } from 'expect-type'
import * as _ from '../src'

import Orcid = _.Orcid

//
// Orcid
//

expectTypeOf<Orcid>().toMatchTypeOf<string>()
expectTypeOf<string>().not.toMatchTypeOf<Orcid>()
