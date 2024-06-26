import { Wrapper as PopperWrapper } from "~/component/Popper";
import Tippy from "@tippyjs/react/headless";
import styles from "./menu.module.scss";
import classNames from "classnames/bind";
import MenuItem from "./MenuItem";
import { useState } from "react";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1]; //get the last element

  const renderItem = () => {
    return current.data.map((items, index) => {
      const isParent = !!items.children;
      return (
        <MenuItem
          key={index}
          data={items}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, items.children]);
            } else {
              onChange(items);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      placement="bottom-end"
      hideOnClick={hideOnClick} //hideOnClick: khi nhan chuot vao van giu nguyen
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              ></Header>
            )}
            <div className="menu-body">{renderItem()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
