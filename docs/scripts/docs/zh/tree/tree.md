```html
<ui-tree></ui-tree>
```

### Props

| Name                     | Type          | Default | Description                  | Version |
| ------------------------ | ------------- | ------- | ---------------------------- | ------- |
| `modelValue` (`v-model`) | string, array | `''`    | 选中的树节点键值             |         |
| `data`                   | array         | `[]`    | 源数据                       |         |
| `dataFormat`             | object        | `{}`    | 定义源数据的格式             |         |
| `maxLevel`               | number        | `0`     | 设置加载树节点的最大层级     |         |
| `multiple`               | boolean       | `false` | 是否支持选定的多个树节点     |         |
| `loadData`               | function      | `null`  | 启用异步加载数据             |         |
| `autoExpandParent`       | boolean       | `false` | 是否自动展开根父级树节点     | 9.17.0  |
| `defaultExpandedKeys`    | array         | `[]`    | 指定默认展开的树节点的节点值 | 9.17.0  |
| `defaultSelectedKeys`    | array         | `[]`    | 指定默认选中的树节点的节点值 | 9.17.0  |

- 默认数据格式：

  ```js
  {
    label: 'label',
    value: 'value', // nodeKey
    children: 'children',
    hasChildren: 'hasChildren',
    isLeaf: 'isLeaf'
  }
  ```

- 异步加载数据：

  ```ts
  type TreeNodes = { [key: string]: any }[];

  interface Tree {
    loadData(nodeKey: string | number): TreeNodes;
  }
  ```

### Slots

| Name               | Props  | Description                         |
| ------------------ | ------ | ----------------------------------- |
| `default`          |        | default 插槽包含树顶部栏内容及 HTML |
| `expand-more-icon` |        | 自定义展开图标                      |
| `expand-less-icon` |        | 自定义收起图标                      |
| `title`            | `data` | title 插槽包含树节点的标题及 HTML   |
| `action`           | `data` | action 插槽包含树节点的动作及 HTML  |

### Events

| Name                | Type                                       | Description        |
| ------------------- | ------------------------------------------ | ------------------ |
| `update:modelValue` | `function(selectedNodes: string \| array)` | 树节点值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听树节点值并更新 `modelValue` 属性

- 自动

  ```html
  <ui-tree v-model="selectedNodes"></ui-tree>
  ```

- 手动

  ```html
  <ui-tree
    :model-value="selectedNodes"
    @update:modelValue="balmUI.onChange('selectedNodes', $event)"
  ></ui-tree>
  ```
