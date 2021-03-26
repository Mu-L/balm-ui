```html
<ui-tabs></ui-tabs>
```

### `<ui-tabs>` Props

| Name    | Type  | Default | Description           |
| ------- | ----- | ------- | --------------------- |
| `items` | array | `[]`    | Mandatory. Tab items. |

- The keys of a tab item object:

  ```js
  {
    text: 'text', // label text
    icon: 'icon', // label icon
  }
  ```

### `<ui-tabs>` Slots

| Name      | Slots | Description                                                     |
| --------- | ----- | --------------------------------------------------------------- |
| `default` |       | The default slot holds the tab components and can contain HTML. |

```html
<!-- Full syntax -->
<ui-tab-bar v-model="active">
  <ui-tab
    v-for="(tabItem, tabIndex) in items"
    :key="tabIndex"
    :icon="tabItem.icon"
  >
    {{ tabItem.text }}
  </ui-tab>
</ui-tab-bar>

<!-- Shorthand -->
<ui-tabs v-model="active" :items="items"></ui-tabs>
```
