import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images/index";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";

import Button from "~/component/Button";
import Menu from "~/component/Popper/menu";
import { MENU_ITEMS, userMenu } from "./data";
import { InboxIcon, MessageIcon, UploadIcon } from "~/component/Icons";
import Images from "~/component/Images";
import Search from "./search";

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;
  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case "languge":
        //handle change language
        break;
      default:
    }
  };

  return (
    <>
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <img
              src={images.logo.default}
              alt="logo"
              style={{ width: "120px" }}
            />
          </div>
          <Search />
          <div className={cx("actions")}>
            {currentUser ? (
              <>
                <Tippy
                  delay={[0, 200]}
                  content="Upload video"
                  placement="bottom"
                >
                  <button className={cx("action-btn")}>
                    <UploadIcon />
                  </button>
                </Tippy>
                <Tippy delay={[0, 200]} content="Message" placement="bottom">
                  <button className={cx("action-btn")}>
                    <MessageIcon />
                  </button>
                </Tippy>
                <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                  <button className={cx("action-btn")}>
                    <InboxIcon />
                  </button>
                </Tippy>
              </>
            ) : (
              <>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>
              </>
            )}
            <Menu
              items={currentUser ? userMenu : MENU_ITEMS}
              onChange={handleMenuChange}
            >
              {currentUser ? (
                <Images
                  className={cx("user-avatar")}
                  src={images.avatar}
                  alt="Nguyen Phuoc Tuan"
                />
              ) : (
                <button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              )}
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
