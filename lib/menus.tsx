import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { Index } from "ts-functional/dist/types";

export const brokerageMenus:Index<ItemType<MenuItemType>[]> = {
    admin: [{
        key: "brokerages",
        label: "Brokerages",
        icon: <FontAwesomeIcon icon={faHouse} />,
    }]
};