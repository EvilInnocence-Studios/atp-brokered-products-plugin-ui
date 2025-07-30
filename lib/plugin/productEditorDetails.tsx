import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { storePlugins } from "@store/lib/plugin/slots"

export const registerProductEditorDetailsPlugins = () => {
    storePlugins.product.editor.details.register(500, ({history:{entity:product}, updateString}) => <>
        <Label label="Brokered">
            <Editable placeholder="Brokered At" value={product.brokeredAt || ""} onChange={updateString("brokeredAt")} />
            <Editable placeholder="Brokered Product Id" value={product.brokerageProductId || ""} onChange={updateString("brokerageProductId")} />
        </Label>
    </>);
}