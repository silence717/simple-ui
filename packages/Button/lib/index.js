import React from 'react';
import classnames from 'classnames';
const prefixCls = 'xm';
function Button(props) {
  const {
    type = 'normal',
    size = 'default',
    href = '',
    block = false,
    loading = false,
    target = '',
    disabled = false,
    htmlType = 'button',
    className = '',
    children,
    ...others
  } = props;
  const ElementName = href ? 'a' : 'button';
  const classNames = classnames(
    `${prefixCls}-button`,
    {
      [type]: true,
      [size]: true,
      block,
    },
    className,
  );
  return React.createElement(
    ElementName,
    // @ts-ignore
    {
      // @ts-ignore
      type: 'button',
      className: classNames,
      disabled: disabled || loading,
      ...{
        ...others,
        href: href || undefined,
        type: href ? undefined : htmlType,
        target: href ? target : undefined,
      },
    },
    loading &&
      React.createElement('span', { className: `${prefixCls}-button-loading` }),
    children,
  );
}
export default Button;
//# sourceMappingURL=index.js.map
