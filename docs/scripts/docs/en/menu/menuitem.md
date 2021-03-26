```html
<ui-menuitem><!-- the menu item child components --></ui-menuitem>
```

### Props

| Name       | Type    | Default | Description                                                                    |
| ---------- | ------- | ------- | ------------------------------------------------------------------------------ |
| `nested`   | boolean | `false` | Used to wrap a group of `<ui-menuitem>` that will represent a selection group. |
| `item`     | object  | `{}`    | A menu item.                                                                   |
| `value`    | string  | `null`  | The menu selected value.                                                       |
| `disabled` | boolean | `false` | To disable an item.                                                            |
| `selected` | boolean | `false` | Used to indicate which element in an item group is selected.                   |

- The keys of a menu item object:

  ```ts
  interface Item {
    value?: string;
    text: string;
    icon?: string;
    disabled?: boolean;
    selected?: boolean;
  }

  interface MenuItem {
    item: Item;
  }
  ```

### Slots

| Name      | Props | Description                                                                             |
| --------- | ----- | --------------------------------------------------------------------------------------- |
| `default` |       | The default slot holds the menu item icon component or label text and can contain HTML. |

**Child components:**

- `<ui-menuitem-text>`
- `<ui-menuitem-icon>`
