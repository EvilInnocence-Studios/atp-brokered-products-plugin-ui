import { generateBrokeredProductUrl } from "@brokered-products-plugin-shared/brokerage/util";
import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { storePlugins } from "@store/lib/plugin/slots";
import { useBrokerages, useBrokerageUrlTemplate } from "../useBrokerages";
import { Select } from "antd";

export const registerProductEditorDetailsPlugins = () => {
    storePlugins.product.editor.details.register(500, ({history:{entity:product}, updateString}) => {
        const brokerages = useBrokerages();
        const template = useBrokerageUrlTemplate(product.brokeredAt || "");
        return <>
            <Label label="Brokered">
                <Select
                    value={product.brokeredAt}
                    options={brokerages.map(b => ({label: b.name, value: b.name}))}
                    placeholder="Select Brokerage"
                    onChange={updateString("brokeredAt")}
                    allowClear
                />
                <Editable placeholder="Brokered Product Id" value={product.brokerageProductId || ""} onChange={updateString("brokerageProductId")} />
                <p><em>{generateBrokeredProductUrl(template, product.brokerageProductId || "")}</em></p>
            </Label>
        </>;
    });
}