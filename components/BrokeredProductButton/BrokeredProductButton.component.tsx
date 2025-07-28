import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { BrokeredProductButtonProps } from "./BrokeredProductButton.d";

export const BrokeredProductButtonComponent = ({product, brokeredLink}:BrokeredProductButtonProps) =>
    <Button type="primary" size="small" onClick={() => window.open(brokeredLink)}>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        {product.price > 0 ? "Brokered" : "Download"} At {product.brokeredAt}
    </Button>;
