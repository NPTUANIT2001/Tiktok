import Button from "~/component/Button";
import styles from "./menu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <>
      <Button
        leftIcon={data.icon}
        className={classes}
        to={data.to}
        onClick={onClick}
      >
        {data.title}
      </Button>
    </>
  );
}

export default MenuItem;
