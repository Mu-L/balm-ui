```html
<ui-select-helper><!-- the helper text --></ui-select-helper>
```

### Props

| Name                            | Type            | Default | Description                                                                  |
| ------------------------------- | --------------- | ------- | ---------------------------------------------------------------------------- |
| `validMsg` (`v-model:validMsg`) | string, boolean | `false` | Indicates the helper text is a validation message.                           |
| `id`                            | string          | `null`  | Mandatory. (Corresponding to the `helperTextId` prop matching `<ui-select>`) |
| `visible`                       | boolean         | `false` | Makes the helper text permanently visible.                                   |

### Slots

| Name      | Props | Description                                                         |
| --------- | ----- | ------------------------------------------------------------------- |
| `default` |       | The default slot holds the select helper text and can contain HTML. |

### Events

| Name              | Type                         | Description                                   |
| ----------------- | ---------------------------- | --------------------------------------------- |
| `update:validMsg` | `function(validMsg: string)` | Emits when the validation message is changed. |
