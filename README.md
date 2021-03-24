## TBSP / Tablespoon / tailwind-breakpoint-styled-properties

TBSP gives you the lazy way of importing Tailwind-sized breakpoints into a project /not/ utilizing Tailwind.

```js
import { screen } from '@atlc/tbsp'

const SC = styled.div`
    padding: 10px;

    @media ${screen.md} {
        padding: 20px;
    }
`;
```