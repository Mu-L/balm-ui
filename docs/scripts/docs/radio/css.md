```css
@use '@material/radio/variables' with (
  $ripple-size: 40px,
  $icon-size: 20px,
  $transition-duration: 120ms,
  $ripple-opacity: .14,
  $baseline-theme-color: secondary,
  $unchecked-color: rgba(theme-variables.prop-value(on-surface), .54),
  $disabled-circle-color: rgba(theme-variables.prop-value(on-surface), .38),

  $minimum-size: 28px,
  $maximum-size: $ripple-size,
  $density-scale: density-variables.$default-scale,
  $density-config: (
    size: (
      minimum: $minimum-size,
      default: $ripple-size,
      maximum: $maximum-size,
    ),
  )
);
```