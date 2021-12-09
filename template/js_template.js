import * as React from 'react'
import classnames from 'classnames'

const Icon = (props) => {
  const {
    className,
    type,
    style,
    prefixCls = 'za-icon',
    theme = 'default',
    size = 'md',
    ...rest
  } = props;


  const cls = classnames(prefixCls, className, {
    [`<%= '${prefixCls}' %>--<%= '${type}' %>`]: !!type,
    [`<%= '${prefixCls}' %>--<%= '${theme}' %>`]: !!theme,
    [`<%= '${prefixCls}' %>--<%= '${size}' %>`]: !!size,
  });

  const newProps = {
    className: cls,
    style,
    type,
    theme,
    size,
    ...rest,
  };
  return <span {...newProps} />
}

<% _.each(glyphs, function(glyph) { %>
export const <%= glyph.name.split('-').map((i) => _.capitalize(i)).join('') %> = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["<%= className %>-<%= glyph.name %>"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}
<% }); %>
