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
    [`${prefixCls}--${type}`]: !!type,
    [`${prefixCls}--${theme}`]: !!theme,
    [`${prefixCls}--${size}`]: !!size,
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


export const ArrowDown = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-arrow-down"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const ArrowRight = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-arrow-right"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const CloseCircle = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-close-circle"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const ArrowLeft = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-arrow-left"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const ArrowUp = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-arrow-up"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Close = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-close"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const CloseCircleFill = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-close-circle-fill"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const DeleteKey = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-delete-key"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Empty = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-empty"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const InfoCircleFill = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-info-circle-fill"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const InfoCircle = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-info-circle"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Info = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-info"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Keyboard = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-keyboard"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Minus = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-minus"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const PlusCircle = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-plus-circle"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Plus = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-plus"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Search = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-search"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Star = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-star"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const SuccessCircle = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-success-circle"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const StarFill = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-star-fill"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const WaitingCircleFill = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-waiting-circle-fill"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Volume = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-volume"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const WaitingCircle = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-waiting-circle"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Waiting = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-waiting"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const WarningCircle = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-warning-circle"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Success = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-success"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}

export const Warning = (props) => {
  const {
    className,
    ...rest
  } = props;


  const cls = classnames(className, {
    ["icon-warning"]: true,
  });

  const newProps = {
    className: cls,
    ...rest
  };
  return <Icon {...newProps} />
}
