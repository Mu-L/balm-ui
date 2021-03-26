- `$tt(style)`

  ```ts
  type TypographyStyle =
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'headline6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | string;

  interface VueInstance {
    $tt(style: TypographyStyle): string;
  }
  ```

| Param   | Type   | Default | Description                                      |
| ------- | ------ | ------- | ------------------------------------------------ |
| `style` | string | `''`    | Typography style name or custom style classname. |

The typographic styles in this module are derived from thirteen styles:

| Style       | Description                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| `headline1` | The largest text on the screen, reserved for short, important text or numerals     |
| `headline2` | Headline variant 2                                                                 |
| `headline3` | Headline variant 3                                                                 |
| `headline4` | Headline variant 4                                                                 |
| `headline5` | Headline variant 5                                                                 |
| `headline6` | Headline variant 6                                                                 |
| `subtitle1` | Smaller than headline, reserved for medium-emphasis text that is shorter in length |
| `subtitle2` | Subtitle variant 2                                                                 |
| `body1`     | Used for long-form writing                                                         |
| `body2`     | Body variant 2                                                                     |
| `caption`   | Used sparingly to annotate imagery                                                 |
| `button`    | A call to action used by different types of buttons                                |
| `overline`  | Used sparingly to introduce a headline                                             |

> You can overwrite typography CSS Classes for your project so easy.

### Use `$tt` without `.vue` component

```js
import { useTypography } from 'balm-ui';
// OR
// import { useTypography } from 'balm-ui/plugins/typography';

const $tt = useTypography();
console.log($tt('custom-style-1'));
```
