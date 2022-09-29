import { expectTypeOf } from 'expect-type'
import { Eq } from 'fp-ts/Eq'
import * as O from 'fp-ts/Option'
import * as _ from '../src'

import Option = O.Option
import Orcid = _.Orcid

declare const string: string
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

//
// parse
//

expectTypeOf(_.parse(string)).toEqualTypeOf<Option<Orcid>>()
