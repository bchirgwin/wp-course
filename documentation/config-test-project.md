# Jest

## Install dependencies

```sh
mkdir testing
cd testing
npm init -y
volta pin node@20
npm i -D typescript @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier eslint @types/node
npx tsc --init
npm i -D jest @jest/globals ts-jest
npx ts-jest config:init 
```

## edit package.json 

```json
...
"scripts": {
  ...
  "test": "npm jest" 
}
...
```


## Verify Installation with Simple Test 1

create src/sum.test.ts

```ts 
import { describe, expect, test } from '@jest/globals';
import { sum } from './sum';

describe('sum module', () => {
  test('add 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```



