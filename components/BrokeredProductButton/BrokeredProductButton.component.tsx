import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { BrokeredProductButtonProps } from "./BrokeredProductButton.d";
import { overridable } from "@core/lib/overridable";

export const BrokeredProductButtonComponent = overridable(({ product, brokeredLink, size }: BrokeredProductButtonProps) =>
    <Button type="primary" size={size} onClick={() => window.open(brokeredLink)}>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        {product.brokeredAt}
    </Button>
);
