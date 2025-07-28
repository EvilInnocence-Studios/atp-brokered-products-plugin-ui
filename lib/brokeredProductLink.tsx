import { BrokeredProductButton } from "@brokered-products-plugin/components/BrokeredProductButton";
import { IAddToCartPluginProps } from "@store/lib/plugin/slots";

export const brokeredProductLink = {
    filter: ({product}:IAddToCartPluginProps) => !!product.brokerageProductId,
    plugin: ({product}:IAddToCartPluginProps) => <BrokeredProductButton product={product} />,
}