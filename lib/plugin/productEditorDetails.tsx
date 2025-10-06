import { generateBrokeredProductUrl } from "@brokered-products-plugin-shared/brokerage/util";
import { IBrokerableProduct } from "@brokered-products-plugin-shared/product/types";
import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IUpdater } from "@core/lib/useUpdater";
import { storePlugins } from "@store/lib/plugin/slots";
import { Select } from "antd";
import { useBrokerages, useBrokerageUrlTemplate } from "../useBrokerages";

export const registerProductEditorDetailsPlugins = () => {
    storePlugins.product.editor.details.register(500, props => {
        const {history:{entity:product}, updateString} = props as IUpdater<IBrokerableProduct>;

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