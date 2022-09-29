---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [destructors](#destructors)
  - [toUrl](#tourl)
- [instances](#instances)
  - [Eq](#eq)
- [model](#model)
  - [Orcid (type alias)](#orcid-type-alias)
- [refinements](#refinements)
  - [isOrcid](#isorcid)
- [utils](#utils)
  - [parse](#parse)

---

# destructors

## toUrl

**Signature**

```ts
export declare const toUrl: (orcid: Orcid) => URL
```

**Example**

```ts
import { Orcid, toUrl } from 'orcid-id-ts'

const url = toUrl('0000-0002-1825-0097' as Orcid)

assert.deepStrictEqual(url.href, 'https://orcid.org/0000-0002-1825-0097')
```

Added in v0.1.1

# instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<Orcid>
```

Added in v0.1.1

# model

## Orcid (type alias)

**Signature**

```ts
export type Orcid = string & OrcidBrand
```

Added in v0.1.0

# refinements

## isOrcid

**Signature**

```ts
export declare const isOrcid: Refinement<unknown, Orcid>
```

Added in v0.1.0

# utils

## parse

**Signature**

```ts
export declare const parse: (s: string) => Option<Orcid>
```

**Example**

```ts
import * as O from 'fp-ts/Option'
import { Orcid, parse } from 'orcid-id-ts'

assert.deepStrictEqual(parse('https://orcid.org/0000-0002-1825-0097'), O.some('0000-0002-1825-0097' as Orcid))
assert.deepStrictEqual(parse('not an ORCID iD'), O.none)
```

Added in v0.1.2
