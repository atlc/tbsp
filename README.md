## TBSP / Tablespoon / tailwind-breakpoint-styled-properties

TBSP gives you the lazy way of importing Tailwind-sized breakpoints into a project /not/ utilizing Tailwind.

```js
import { size, screen } from '@atlc/tbsp'

console.log(size().xxl)     // 1536px
console.log(screen().md)    // (min-width: 768px)


const SC = styled.div`
    padding: 10px;

    @media ${screen().md} {
        padding: 20px;
    }
`;
```