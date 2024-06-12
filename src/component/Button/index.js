import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  onClick,
  primary = false,
  outline = false,
  text = false,
  children,
  small = false,
  large = false,
  disable = false,
  rounded = false,
  leftIcon,
  rightIcon,
  className, //other classname
  ...passProps
}) {
  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
    [className]: className,
  });
  let Comp = "button";
  const props = { onClick, ...passProps };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  //Remove event listener when btn is disabled
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof [key] === "function") {
        delete props[key];
      }
    });
  }
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
