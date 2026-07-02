/* @ds-bundle: {"format":3,"namespace":"HELMDesignSystem_92e375","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"72c37d7d452a","components/core/IconButton.jsx":"235917bfbb14","components/data/Avatar.jsx":"2892415d004f","components/data/Badge.jsx":"1d5869a48d47","components/data/Card.jsx":"080a02e52635","components/data/ProgressBar.jsx":"8727f87f2964","components/data/Tag.jsx":"af69ef4e1c61","components/feedback/Dialog.jsx":"78a40b6e648d","components/feedback/Toast.jsx":"c31ebecc7cab","components/feedback/Tooltip.jsx":"bf899334df5f","components/forms/Checkbox.jsx":"73d9d959fc79","components/forms/Input.jsx":"9decdb1d3b61","components/forms/Radio.jsx":"c096745437f2","components/forms/Select.jsx":"c8bd3af6de0d","components/forms/Switch.jsx":"4e5a34c6620c","components/navigation/Tabs.jsx":"64c188300b23","ui_kits/app/AppNav.jsx":"9ebcef08ac40","ui_kits/app/ClientPortalView.jsx":"55db61cfeadc","ui_kits/app/DashboardView.jsx":"0e639b6189f8","ui_kits/app/FieldView.jsx":"1a3940212238","ui_kits/app/ScheduleView.jsx":"5af15290a9f6","ui_kits/app/SubPortalView.jsx":"552d4ba66db7","ui_kits/website/CTAFooter.jsx":"5cc2af510655","ui_kits/website/FAQ.jsx":"709e5a213514","ui_kits/website/Features.jsx":"4bb18cb2d83f","ui_kits/website/Hero.jsx":"0f0d4f56d174","ui_kits/website/HowItWorks.jsx":"cf93bbccb543","ui_kits/website/LogosStats.jsx":"a866fd10d361","ui_kits/website/Nav.jsx":"71eb79b98109","ui_kits/website/Pricing.jsx":"ff60e613b98c","ui_kits/website/Roles.jsx":"9f3e28debb67","ui_kits/website/Testimonials.jsx":"b30a8370f6fb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HELMDesignSystem_92e375 = window.HELMDesignSystem_92e375 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const PADDING = {
  sm: '6px 12px',
  md: '9px 16px',
  lg: '12px 20px'
};
const FONT = {
  sm: 'var(--text-body-sm)',
  md: 'var(--text-label)',
  lg: 'var(--text-h4)'
};
const VARIANTS = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--text-on-brand)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  danger: {
    background: '#FDECEC',
    color: 'var(--status-delayed-fg)',
    border: '1px solid transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  fullWidth = false,
  onClick,
  type = 'button'
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : undefined,
      padding: PADDING[size],
      font: FONT[size],
      fontWeight: 600,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'filter var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      ...v
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.94)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const SIZE = {
  sm: 28,
  md: 36,
  lg: 44
};
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  onClick,
  label
}) {
  const dim = SIZE[size];
  const styles = variant === 'solid' ? {
    background: 'var(--brand)',
    color: '#fff',
    border: '1px solid transparent'
  } : variant === 'outline' ? {
    background: 'var(--surface-card)',
    color: 'var(--icon-strong)',
    border: '1px solid var(--border-default)'
  } : {
    background: 'transparent',
    color: 'var(--icon-default)',
    border: '1px solid transparent'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...styles
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = variant === 'solid' ? 'var(--brand-strong)' : 'var(--gray-100)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = styles.background;
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const SIZE = {
  sm: 28,
  md: 36,
  lg: 48
};
function Avatar({
  initials,
  size = 'md',
  color = 'brand'
}) {
  const dim = SIZE[size];
  const bg = color === 'brand' ? 'var(--helm-green-gradient)' : 'var(--gray-300)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: dim,
      height: dim,
      borderRadius: '50%',
      background: bg,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--text-label)',
      fontWeight: 700,
      flexShrink: 0
    }
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
const STATUS = {
  'on-track': {
    bg: 'var(--status-on-track-bg)',
    fg: 'var(--status-on-track-fg)',
    dot: 'var(--status-on-track-dot)'
  },
  'at-risk': {
    bg: 'var(--status-at-risk-bg)',
    fg: 'var(--status-at-risk-fg)',
    dot: 'var(--status-at-risk-dot)'
  },
  'delayed': {
    bg: 'var(--status-delayed-bg)',
    fg: 'var(--status-delayed-fg)',
    dot: 'var(--status-delayed-dot)'
  },
  'upcoming': {
    bg: 'var(--status-upcoming-bg)',
    fg: 'var(--status-upcoming-fg)',
    dot: 'var(--status-upcoming-dot)'
  },
  'approved': {
    bg: 'var(--status-approved-bg)',
    fg: 'var(--status-approved-fg)',
    dot: 'var(--status-on-track-dot)'
  },
  'awaiting': {
    bg: 'var(--status-awaiting-bg)',
    fg: 'var(--status-awaiting-fg)',
    dot: 'var(--status-at-risk-dot)'
  }
};
const LABEL = {
  'on-track': 'On Track',
  'at-risk': 'At Risk',
  'delayed': 'Delayed',
  'upcoming': 'Upcoming',
  'approved': 'Approved',
  'awaiting': 'Awaiting'
};
function Badge({
  status,
  children,
  dot = true
}) {
  const s = STATUS[status] || STATUS.upcoming;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: s.bg,
      color: s.fg,
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      font: 'var(--text-label)'
    }
  }, dot && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: s.dot,
      display: 'inline-block'
    }
  }), children || LABEL[status]);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'md',
  hoverable = false,
  style
}) {
  const pad = {
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  }[padding];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: pad,
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      ...style
    },
    onMouseEnter: e => {
      if (hoverable) {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }
    },
    onMouseLeave: e => {
      if (hoverable) {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'none';
      }
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value,
  label,
  showValue = true
}) {
  return /*#__PURE__*/React.createElement("div", null, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6,
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, value, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-full)',
      background: 'var(--gray-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${value}%`,
      height: '100%',
      background: 'var(--helm-green-gradient)',
      borderRadius: 'var(--radius-full)',
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  color = 'neutral'
}) {
  const palette = color === 'brand' ? {
    bg: 'var(--brand-soft)',
    fg: 'var(--brand-strong)'
  } : {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: palette.bg,
      color: palette.fg,
      padding: '3px 10px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-body-sm)',
      fontWeight: 500
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.6,
      fontSize: 12,
      lineHeight: 1,
      padding: 0
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(22,25,23,0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      fontFamily: 'var(--font-sans)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      width: 380,
      maxWidth: '90vw'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-tertiary)',
      fontSize: 18
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-secondary)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      marginTop: 20
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICON = {
  success: '✓',
  warning: '!',
  error: '✕',
  info: 'i'
};
const COLOR = {
  success: {
    bg: 'var(--status-on-track-bg)',
    fg: 'var(--status-on-track-fg)'
  },
  warning: {
    bg: 'var(--status-at-risk-bg)',
    fg: 'var(--status-at-risk-fg)'
  },
  error: {
    bg: 'var(--status-delayed-bg)',
    fg: 'var(--status-delayed-fg)'
  },
  info: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)'
  }
};
function Toast({
  variant = 'info',
  children
}) {
  const c = COLOR[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--gray-900)',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: c.bg,
      color: c.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700,
      flexShrink: 0
    }
  }, ICON[variant]), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  children,
  label,
  side = 'top'
}) {
  const [open, setOpen] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 6
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 6
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, children, open && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--gray-900)',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-body-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--brand)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 12,
      lineHeight: 1
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-primary)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: '100%',
      padding: '9px 12px',
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--status-delayed-dot)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--border-focus)';
      e.target.style.boxShadow = 'var(--shadow-focus-ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = error ? 'var(--status-delayed-dot)' : 'var(--border-default)';
      e.target.style.boxShadow = 'none';
    }
  }), error && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--status-delayed-fg)',
      marginTop: 4
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: `1px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--brand)',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-primary)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: '100%',
      padding: '9px 12px',
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      outline: 'none'
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt,
    value: opt
  }, opt))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      if (!disabled && onChange) onChange({
        target: {
          checked: !checked
        }
      });
    },
    style: {
      width: 36,
      height: 20,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--brand)' : 'var(--gray-300)',
      position: 'relative',
      display: 'inline-block',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: () => onChange && onChange(item),
      style: {
        padding: '10px 14px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        font: 'var(--text-label)',
        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
        borderBottom: `2px solid ${isActive ? 'var(--brand)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, item);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppNav.jsx
try { (() => {
function AppNav({
  tab,
  setTab
}) {
  const {
    Tabs
  } = window.HELMDesignSystem_92e375;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/helm-mark.svg",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/helm-wordmark.svg",
    style: {
      height: 14,
      color: 'var(--gray-900)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-primary)'
    }
  }, "Riverside Townhomes \xB7 Phase 2"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--status-on-track-fg)',
      textAlign: 'center'
    }
  }, "\u25CF On Track")), /*#__PURE__*/React.createElement(window.HELMDesignSystem_92e375.Avatar, {
    initials: "PM",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Dashboard', 'Schedule', 'Workers', 'Vendors', 'Drawings', 'BOM'],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      font: 'var(--text-body-sm)',
      fontWeight: 700,
      color: 'var(--brand-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "EXTERNAL ACCESS:"), /*#__PURE__*/React.createElement("a", {
    href: "#client",
    style: {
      color: 'inherit'
    }
  }, "Client Portal"), /*#__PURE__*/React.createElement("a", {
    href: "#sub",
    style: {
      color: 'inherit'
    }
  }, "Sub Portal"))));
}
window.AppNav = AppNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ClientPortalView.jsx
try { (() => {
function ClientPortalView() {
  const {
    Badge,
    Avatar,
    Button
  } = window.HELMDesignSystem_92e375;
  const milestones = [{
    name: 'Foundation complete',
    date: 'Jun 15, 2026',
    status: 'approved',
    label: '✓ Approved'
  }, {
    name: 'Framing complete',
    date: 'Jul 12, 2026',
    status: 'awaiting',
    label: '⏳ Awaiting'
  }, {
    name: 'Rough-in inspection',
    date: 'Aug 5, 2026',
    status: 'upcoming',
    label: 'Upcoming'
  }, {
    name: 'Substantial completion',
    date: 'Oct 18, 2026',
    status: 'upcoming',
    label: 'Upcoming'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "RS"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)'
    }
  }, "Riverside Client Portal"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)'
    }
  }, "Viewing as Rachel S. \xB7 Client"))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      color: 'var(--text-tertiary)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Milestones requiring your review"), milestones.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      fontWeight: 600
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)'
    }
  }, m.date)), /*#__PURE__*/React.createElement(Badge, {
    status: m.status,
    dot: false
  }, m.label))), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 20
    }
  }, "Approve framing milestone \u2192"));
}
window.ClientPortalView = ClientPortalView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ClientPortalView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DashboardView.jsx
try { (() => {
function DashboardView() {
  const {
    Card,
    Badge,
    ProgressBar
  } = window.HELMDesignSystem_92e375;
  const projects = [{
    name: 'Riverside Townhomes',
    loc: 'Toronto · Jul 5 – Oct 18',
    status: 'on-track',
    pct: 38
  }, {
    name: 'REHBT Commercial',
    loc: 'Calgary · Mar 1 – Oct 29',
    status: 'on-track',
    pct: 61
  }, {
    name: 'Beta Warehouse',
    loc: 'Vancouver · Active',
    status: 'at-risk',
    pct: 22
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      marginBottom: 16
    }
  }, "All Projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    hoverable: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)'
    }
  }, p.name), /*#__PURE__*/React.createElement(Badge, {
    status: p.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)',
      margin: '4px 0 14px'
    }
  }, p.loc), /*#__PURE__*/React.createElement(ProgressBar, {
    value: p.pct,
    label: "Progress"
  })))));
}
window.DashboardView = DashboardView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DashboardView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/FieldView.jsx
try { (() => {
function FieldView() {
  const {
    Badge,
    ProgressBar,
    Button
  } = window.HELMDesignSystem_92e375;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      background: 'var(--gray-900)',
      borderRadius: 32,
      padding: 12,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 22,
      padding: 20,
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      marginBottom: 4
    }
  }, "Your Project"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)',
      marginBottom: 16
    }
  }, "Riverside Ph. 2"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 38,
    label: "Overall progress"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      margin: '8px 0 20px'
    }
  }, "38% complete \xB7 On track for Oct 18"), [{
    name: 'Foundation',
    status: 'approved',
    label: '✓ Done'
  }, {
    name: 'Framing',
    status: 'at-risk',
    label: 'In progress'
  }, {
    name: 'Electrical',
    status: 'upcoming'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)',
      font: 'var(--text-body)'
    }
  }, s.name, /*#__PURE__*/React.createElement(Badge, {
    status: s.status,
    dot: false
  }, s.label))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    style: {
      marginTop: 24
    }
  }, "Mark complete from site"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)',
      marginTop: 12
    }
  }, "Optimized for the job site \xB7 works offline"))));
}
window.FieldView = FieldView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/FieldView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ScheduleView.jsx
try { (() => {
function ScheduleView() {
  const {
    Select,
    Badge,
    Card
  } = window.HELMDesignSystem_92e375;
  const rows = [{
    phase: 'Foundation',
    task: 'Concrete pour',
    vendor: '',
    w: '100%',
    left: '0%',
    status: 'approved',
    milestone: false
  }, {
    phase: 'Framing',
    task: 'Apex Framing Ltd',
    vendor: 'Apex Framing Ltd',
    w: '55%',
    left: '20%',
    status: 'at-risk',
    milestone: true
  }, {
    phase: 'Electrical',
    task: 'Brightline Electric',
    vendor: 'Brightline Electric',
    w: '30%',
    left: '55%',
    status: 'upcoming',
    milestone: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)'
    }
  }, "Schedule \xB7 Week of Jun 18"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Phase: All']
  }), /*#__PURE__*/React.createElement(Select, {
    options: ['Vendor: All']
  }), /*#__PURE__*/React.createElement(Select, {
    options: ['Worker: All']
  }), /*#__PURE__*/React.createElement(Select, {
    options: ['Status: All']
  }))), /*#__PURE__*/React.createElement(Card, null, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.phase,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 700
    }
  }, r.phase), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)'
    }
  }, r.task)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      height: 22,
      background: 'var(--gray-100)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: r.left,
      width: r.w,
      height: '100%',
      borderRadius: 'var(--radius-sm)',
      background: r.status === 'at-risk' ? 'var(--status-at-risk-dot)' : r.status === 'approved' ? 'var(--helm-green-gradient)' : 'var(--gray-300)'
    }
  }), r.milestone && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${r.left} + ${r.w})`,
      top: -6,
      transform: 'translateX(-50%) rotate(45deg)',
      width: 12,
      height: 12,
      background: 'var(--brand)'
    }
  })), /*#__PURE__*/React.createElement(Badge, {
    status: r.status
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)',
      marginTop: 12
    }
  }, "\u25C7 Milestone \xA0\xB7\xA0 Client + 3 subs viewing live \xB7 No login required"));
}
window.ScheduleView = ScheduleView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ScheduleView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/SubPortalView.jsx
try { (() => {
function SubPortalView() {
  const {
    Badge,
    Tag
  } = window.HELMDesignSystem_92e375;
  const tasks = [{
    name: 'Framing – Unit A',
    sub: 'Starts Jun 25 · 8 days',
    status: 'at-risk',
    label: 'In progress'
  }, {
    name: 'Framing – Unit B',
    sub: 'Starts Jul 5 · 6 days',
    status: 'upcoming'
  }, {
    name: 'Roof rough framing',
    sub: 'Starts Jul 14 · 4 days',
    status: 'upcoming'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)'
    }
  }, "Apex Framing \xB7 Your Tasks"), /*#__PURE__*/React.createElement(Tag, {
    color: "brand"
  }, "No login required")), tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      fontWeight: 600
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)'
    }
  }, t.sub)), /*#__PURE__*/React.createElement(Badge, {
    status: t.status
  }, t.label))));
}
window.SubPortalView = SubPortalView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/SubPortalView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CTAFooter.jsx
try { (() => {
function CTAFooter() {
  const {
    Button
  } = window.HELMDesignSystem_92e375;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gray-900)',
      padding: '72px var(--container-padding)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: '#fff'
    }
  }, "Stop sending PDFs. Start sharing live schedules."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--gray-300)',
      marginTop: 12,
      maxWidth: 500,
      margin: '12px auto 0'
    }
  }, "Join construction teams across Canada who've replaced MS Project and email with HELM."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Start free \u2014 14 days, no card"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid var(--gray-600)'
    }
  }, "Book a demo \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gray-900)',
      borderTop: '1px solid var(--gray-700)',
      padding: '24px var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/helm-mark.svg",
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      font: 'var(--text-body-sm)',
      color: 'var(--gray-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Product"), /*#__PURE__*/React.createElement("span", null, "Pricing"), /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--gray-500)'
    }
  }, "\xA9 2026 HELM \xB7 Toronto, Canada"))));
}
window.CTAFooter = CTAFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CTAFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FAQ.jsx
try { (() => {
function FAQ() {
  const items = [{
    q: 'Does my client need to create an account?',
    a: 'No. Clients and subcontractors access their portal through a link you send them. No signup, no download, no password. They open it in any browser and see the live schedule immediately.'
  }, {
    q: 'How is HELM different from MS Project or Smartsheet?',
    a: 'MS Project requires the Microsoft ecosystem and a license for every participant. Smartsheet requires all parties to have accounts. Neither was designed for construction teams sharing schedules externally. HELM is purpose-built for GCs and trades — you\'re live in 5 minutes, and your client sees it without logging in.'
  }, {
    q: 'Can subcontractors update their own task status?',
    a: 'Yes. Subcontractors can mark tasks in progress or complete, and flag delays directly from their portal. Those updates reflect immediately in your schedule view — no back-and-forth texts needed.'
  }, {
    q: 'Is there a free trial?',
    a: 'Yes. All plans include a 14-day free trial with no credit card required. Build a real project schedule, invite your team, and share your first client portal before paying anything.'
  }, {
    q: 'What happens when I change a task — do clients get notified?',
    a: 'Yes. When you move a milestone or update a task that affects an external stakeholder, HELM sends an automatic email notification. Clients always see the latest version of the schedule — never an outdated PDF.'
  }];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    id: "faq",
    style: {
      background: 'var(--surface-sunken)',
      padding: '80px var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--brand-strong)',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--text-primary)'
    }
  }, "Common questions.")), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.q,
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      marginBottom: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      padding: '16px 20px',
      font: 'var(--text-h4)',
      color: 'var(--text-primary)',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, it.q, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      fontWeight: 400
    }
  }, open === i ? '−' : '+')), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 18px',
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, it.a)))));
}
window.FAQ = FAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FAQ.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
function Features() {
  const items = [{
    icon: 'gantt-chart-square',
    title: 'Live Gantt schedule',
    body: 'Build timelines with phases, tasks, dependencies, and milestones. Updates push to everyone the moment you make them.'
  }, {
    icon: 'link',
    title: 'External stakeholder portal',
    body: 'Clients and subs get a live, link-based view of the schedule. No account. No download. No stale PDF.'
  }, {
    icon: 'check-circle-2',
    title: 'Milestone approvals',
    body: 'Clients approve key dates directly in their portal. Logged, timestamped, no email chain needed.'
  }, {
    icon: 'sparkles',
    title: 'AI copilot',
    body: '"What\'s delaying Phase 2?" or "Generate a recovery schedule." Answers in seconds, not spreadsheets.'
  }, {
    icon: 'users',
    title: 'Worker & vendor management',
    body: 'Manage your crew and subs in one place. Assign trades to tasks, track skills, and view capacity across all projects.'
  }, {
    icon: 'file-stack',
    title: 'Drawings & BOM',
    body: 'Upload DXF drawings for AI-powered take-offs. Link materials to schedule tasks and track quantities automatically.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    id: "features",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--brand-strong)',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Platform"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--text-primary)'
    }
  }, "Everything your project needs. Nothing it doesn't."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, "Built specifically for construction and trades teams who coordinate with clients, subs, and inspectors on every job.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand-strong)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-primary)',
      marginBottom: 8
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, it.body)))));
}
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  const {
    Button,
    Badge
  } = window.HELMDesignSystem_92e375;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--container-padding) 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--brand-soft)',
      color: 'var(--brand-strong)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-full)',
      font: 'var(--text-label)',
      marginBottom: 24
    }
  }, "Construction scheduling \xB7 Built for Canada"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      maxWidth: 780,
      margin: '0 auto'
    }
  }, "Every stakeholder, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--brand-strong)'
    }
  }, "on the same schedule.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: 620,
      margin: '20px auto 0'
    }
  }, "HELM connects your internal team, subcontractors, and clients in one live schedule. No more PDF exports. No more \"where are we?\" calls."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Start free \u2014 14 days, no card"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "See how it works \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      textAlign: 'left',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-primary)'
    }
  }, "Riverside Townhomes \xB7 Phase 2"), /*#__PURE__*/React.createElement(Badge, {
    status: "on-track"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: '10px 20px',
      borderBottom: '1px solid var(--border-subtle)',
      font: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, ['Dashboard', 'Schedule', 'Workers', 'Vendors', 'Drawings', 'BOM'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: '6px 12px',
      borderRadius: 'var(--radius-md)',
      background: i === 1 ? 'var(--surface-sunken)' : 'transparent',
      color: i === 1 ? 'var(--text-primary)' : 'inherit'
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      font: 'var(--text-body-sm)',
      color: 'var(--brand-strong)',
      fontWeight: 700
    }
  }, "EXTERNAL ACCESS: Client Portal \xB7 Sub Portal")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      marginBottom: 12
    }
  }, "Schedule \xB7 Week of Jun 18"), [{
    name: 'Foundation',
    sub: 'Concrete pour',
    w: '30%',
    color: 'var(--helm-green-gradient)'
  }, {
    name: 'Framing',
    sub: 'Apex Framing Ltd',
    w: '55%',
    color: 'var(--gray-300)'
  }, {
    name: 'Electrical',
    sub: 'Brightline Electric',
    w: '20%',
    color: 'var(--gray-200)'
  }].map(row => /*#__PURE__*/React.createElement("div", {
    key: row.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      font: 'var(--text-body-sm)',
      fontWeight: 600
    }
  }, row.name, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)',
      fontWeight: 400
    }
  }, row.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 20,
      background: 'var(--gray-100)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: row.w,
      height: '100%',
      background: row.color
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)',
      marginTop: 8
    }
  }, "Client + 3 subs viewing live \xB7 No login required"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowItWorks.jsx
try { (() => {
function HowItWorks() {
  const steps = [{
    title: 'Build your schedule in minutes',
    body: 'Create phases, assign tasks to trades and vendors, set durations and dependencies. Your first schedule takes under 5 minutes.'
  }, {
    title: 'Share a live link with clients and subs',
    body: 'No login, no PDF. Send a link and your client sees the live schedule in their browser. Subs see only their tasks.'
  }, {
    title: 'Everyone stays in sync automatically',
    body: 'When a task moves, notifications go out immediately. No more "I didn\'t know it changed" on site.'
  }, {
    title: 'Clients approve milestones from their portal',
    body: 'One click. Every approval logged and timestamped. Your dispute protection lives here.'
  }];
  const {
    Badge
  } = window.HELMDesignSystem_92e375;
  return /*#__PURE__*/React.createElement("div", {
    id: "how",
    style: {
      background: 'var(--surface-sunken)',
      padding: '80px var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--brand-strong)',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--text-primary)',
      marginBottom: 32
    }
  }, "From your desk to the field to your client \u2014 live."), steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--brand)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--text-label)',
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-primary)'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, s.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--helm-green-gradient)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--text-label)'
    }
  }, "RS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)'
    }
  }, "Riverside Client Portal"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)'
    }
  }, "Viewing as Rachel S. \xB7 Client"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      color: 'var(--text-tertiary)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      marginBottom: 14
    }
  }, "Milestones requiring your review"), [{
    name: 'Foundation complete',
    date: 'Jun 15, 2026',
    status: 'approved',
    label: '✓ Approved'
  }, {
    name: 'Framing complete',
    date: 'Jul 12, 2026',
    status: 'awaiting',
    label: '⏳ Awaiting'
  }, {
    name: 'Rough-in inspection',
    date: 'Aug 5, 2026',
    status: 'upcoming',
    label: 'Upcoming'
  }, {
    name: 'Substantial completion',
    date: 'Oct 18, 2026',
    status: 'upcoming',
    label: 'Upcoming'
  }].map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 600
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)'
    }
  }, m.date)), /*#__PURE__*/React.createElement(Badge, {
    status: m.status,
    dot: false
  }, m.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      color: 'var(--brand-strong)',
      font: 'var(--text-label)'
    }
  }, "Approve framing milestone \u2192")))));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LogosStats.jsx
try { (() => {
function LogosStats() {
  const logos = ['Maple Ridge Builders', 'Pacific Trades Co.', 'Summit GC', 'Northway Construction', 'Prairie Build Group'];
  const stats = [{
    n: '73%',
    c: 'fewer client update calls'
  }, {
    n: '4.2h',
    c: 'saved per PM per week'
  }, {
    n: '$0',
    c: 'for external stakeholders, always'
  }, {
    n: '5 min',
    c: 'to your first live schedule'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      padding: '48px var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "Trusted by construction teams across Canada"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 40,
      flexWrap: 'wrap',
      font: 'var(--text-body)',
      fontWeight: 700,
      color: 'var(--gray-400)',
      marginBottom: 48
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("div", {
    key: l
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.c,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display)',
      color: 'var(--brand-strong)',
      fontSize: 40
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, s.c))))));
}
window.LogosStats = LogosStats;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LogosStats.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
function Nav() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--container-padding)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/helm-mark.svg",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/helm-wordmark.svg",
    style: {
      height: 16,
      color: 'var(--gray-900)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      font: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features",
    style: {
      color: 'inherit'
    }
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    style: {
      color: 'inherit'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    style: {
      color: 'inherit'
    }
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#faq",
    style: {
      color: 'inherit'
    }
  }, "FAQ")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Log in"), /*#__PURE__*/React.createElement(window.HELMDesignSystem_92e375.Button, {
    size: "sm"
  }, "Book a demo"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
function Pricing() {
  const {
    Button
  } = window.HELMDesignSystem_92e375;
  const plans = [{
    name: 'Starter',
    desc: 'For small teams running a few active projects.',
    price: '$19',
    features: ['Up to 3 active projects', '5 external stakeholders per project', 'Gantt schedule + milestones', 'Worker & vendor management'],
    cta: 'Start free trial'
  }, {
    name: 'Professional',
    desc: 'For growing GCs managing multiple projects and teams.',
    price: '$35',
    popular: true,
    features: ['Unlimited projects', 'Unlimited external stakeholders', 'AI Copilot on every project', 'Drawings + BOM management', 'Slack & email integrations'],
    cta: 'Start free trial'
  }, {
    name: 'Team',
    desc: 'For established builders with complex multi-trade schedules.',
    price: '$49',
    features: ['Everything in Professional', 'Resource management', 'Change order tracking', 'CRM + estimating module', 'Priority support'],
    cta: 'Contact sales'
  }];
  return /*#__PURE__*/React.createElement("div", {
    id: "pricing",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--brand-strong)',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--text-primary)'
    }
  }, "Simple pricing. External stakeholders always free."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, "No surprise costs when you share your schedule with clients or subs. They're always free, on every plan.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, plans.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      background: '#fff',
      border: `1px solid ${p.popular ? 'var(--brand)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: p.popular ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      position: 'relative'
    }
  }, p.popular && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -12,
      left: 24,
      background: 'var(--brand)',
      color: '#fff',
      padding: '3px 12px',
      borderRadius: 'var(--radius-full)',
      font: 'var(--text-body-sm)',
      fontWeight: 700
    }
  }, "Most popular"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 6,
      minHeight: 40
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h1)',
      color: 'var(--text-primary)',
      marginTop: 16
    }
  }, p.price, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)',
      fontWeight: 400
    }
  }, " / seat / month")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      margin: '20px 0',
      paddingTop: 20
    }
  }, p.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-strong)'
    }
  }, "\u2713"), f))), /*#__PURE__*/React.createElement(Button, {
    variant: p.popular ? 'primary' : 'secondary',
    fullWidth: true
  }, p.cta)))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Roles.jsx
try { (() => {
function Roles() {
  const {
    Tabs,
    Badge
  } = window.HELMDesignSystem_92e375;
  const [active, setActive] = React.useState('Project Manager');
  const roleContent = {
    'Project Manager': {
      points: [{
        title: 'Full portfolio view',
        body: 'All active projects at once. On track, at risk, delayed — at a glance across your entire portfolio.'
      }, {
        title: 'Drag-and-drop scheduling',
        body: 'Replan in seconds. Drag tasks, update durations, and dependencies cascade automatically.'
      }, {
        title: 'AI copilot on every project',
        body: '"Generate a recovery schedule." "Which trade is most overloaded?" Answers in seconds.'
      }],
      panel: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-label)',
          marginBottom: 12
        }
      }, "All Projects"), [{
        name: 'Riverside Townhomes',
        loc: 'Toronto · Jul 5 – Oct 18',
        status: 'on-track'
      }, {
        name: 'REHBT Commercial',
        loc: 'Calgary · Mar 1 – Oct 29',
        status: 'on-track'
      }, {
        name: 'Beta Warehouse',
        loc: 'Vancouver · Active',
        status: 'at-risk'
      }].map(p => /*#__PURE__*/React.createElement("div", {
        key: p.name,
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 0',
          borderBottom: '1px solid var(--border-subtle)'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-body-sm)',
          fontWeight: 600
        }
      }, p.name), /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-body-sm)',
          color: 'var(--text-tertiary)'
        }
      }, p.loc)), /*#__PURE__*/React.createElement(Badge, {
        status: p.status
      }))))
    },
    'Subcontractors': {
      points: [{
        title: 'No account needed',
        body: 'Subs get a link and see their tasks in the browser. No software to install, no logins to remember.'
      }, {
        title: 'Instant change notifications',
        body: 'When a task moves, affected subs get notified immediately. No more surprises on site.'
      }, {
        title: 'Update tasks from the field',
        body: 'Mark tasks complete or flag delays from a phone. Progress reflects in the GC\'s schedule instantly.'
      }],
      panel: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-label)',
          marginBottom: 12
        }
      }, "Apex Framing \xB7 Your Tasks"), [{
        name: 'Framing – Unit A',
        sub: 'Starts Jun 25 · 8 days',
        status: 'at-risk',
        label: 'In progress'
      }, {
        name: 'Framing – Unit B',
        sub: 'Starts Jul 5 · 6 days',
        status: 'upcoming'
      }, {
        name: 'Roof rough framing',
        sub: 'Starts Jul 14 · 4 days',
        status: 'upcoming'
      }].map(t => /*#__PURE__*/React.createElement("div", {
        key: t.name,
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 0',
          borderBottom: '1px solid var(--border-subtle)'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-body-sm)',
          fontWeight: 600
        }
      }, t.name), /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-body-sm)',
          color: 'var(--text-tertiary)'
        }
      }, t.sub)), /*#__PURE__*/React.createElement(Badge, {
        status: t.status
      }, t.label))))
    },
    'Clients': {
      points: [{
        title: 'Live schedule view',
        body: 'Clients see the real schedule in real time. No PDF that\'s already out of date.'
      }, {
        title: 'One-click milestone approvals',
        body: 'Approve key dates directly in the portal. Logged, timestamped, no email chain needed.'
      }, {
        title: 'Comments on tasks',
        body: 'Flag questions directly on the task. PMs see it in context, not buried in email.'
      }],
      panel: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-label)',
          marginBottom: 12
        }
      }, "Your Project \xB7 Riverside Ph. 2"), /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-body-sm)',
          color: 'var(--text-secondary)',
          marginBottom: 8
        }
      }, "Overall progress"), /*#__PURE__*/React.createElement(window.HELMDesignSystem_92e375.ProgressBar, {
        value: 38,
        label: "38% complete \xB7 On track for Oct 18",
        showValue: false
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          marginTop: 16
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--text-body-sm)'
        }
      }, "Foundation"), /*#__PURE__*/React.createElement(Badge, {
        status: "approved",
        dot: false
      }, "\u2713 Done")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--text-body-sm)'
        }
      }, "Framing"), /*#__PURE__*/React.createElement(Badge, {
        status: "at-risk",
        dot: false
      }, "In progress")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--text-body-sm)'
        }
      }, "Electrical"), /*#__PURE__*/React.createElement(Badge, {
        status: "upcoming"
      }))))
    },
    'Field Crew': {
      points: [{
        title: 'Mobile-first field view',
        body: 'Optimized for the job site. Big text, clear tasks, works offline. No laptop needed on the scaffold.'
      }, {
        title: 'Mark complete from site',
        body: 'Tap to complete. Add a photo. The PM sees it update live before you pocket your phone.'
      }, {
        title: 'Flag delays instantly',
        body: 'Spotted a problem? Flag it from the field. PMs get a notification in seconds with full context.'
      }],
      panel: /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          padding: '20px 0'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-body-sm)',
          color: 'var(--text-secondary)'
        }
      }, "Mobile-first field experience"), /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--text-h4)',
          marginTop: 4
        }
      }, "available on iOS and Android"))
    }
  };
  const c = roleContent[active];
  return /*#__PURE__*/React.createElement("div", {
    id: "roles",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--brand-strong)',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "For your whole team"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--text-primary)'
    }
  }, "Built for every role in the project."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, "Different views, same live data. Everyone sees exactly what they need \u2014 nothing more.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(roleContent),
    active: active,
    onChange: setActive
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, c.points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-primary)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, p.body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 24
    }
  }, c.panel)));
}
window.Roles = Roles;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Roles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
function Testimonials() {
  const {
    Avatar
  } = window.HELMDesignSystem_92e375;
  const quotes = [{
    q: 'My clients used to call twice a week asking where things stood. Since HELM, they just check the portal. Those calls have basically stopped.',
    initials: 'MR',
    name: 'Mike R.',
    role: 'GC · Toronto, ON · 12 active projects'
  }, {
    q: 'We were running MS Project and sharing PDFs by email. HELM replaced both in a week. The subcontractor portal alone is worth the subscription.',
    initials: 'JT',
    name: 'James T.',
    role: 'PM · Calgary, AB · Residential builder'
  }, {
    q: 'I built my first Gantt in 4 minutes. I\'ve been drawing these in Excel for 8 years. HELM should have existed a long time ago.',
    initials: 'SP',
    name: 'Sandra P.',
    role: 'Owner · Vancouver, BC · Custom builds'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      padding: '80px var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--brand-strong)',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "What GCs are saying"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--text-primary)'
    }
  }, "Real feedback from Canadian contractors.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, quotes.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      marginBottom: 20
    }
  }, "\"", t.q, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: t.initials,
    size: "sm",
    color: "neutral"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-tertiary)'
    }
  }, t.role))))))));
}
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
