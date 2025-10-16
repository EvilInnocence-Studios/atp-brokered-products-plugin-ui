import { IBrokerableProduct } from "@brokered-products-plugin-shared/product/types";
import { BrokeredProductButton } from "@brokered-products-plugin/components/BrokeredProductButton";
import { IAddToCartPluginProps } from "@store/lib/plugin/slots";

export const brokeredProductLink = {
    filter: ({product}:IAddToCartPluginProps) => !!(product as IBrokerableProduct).brokerageProductId,
    plugin: ({product}:IAddToCartPluginProps) => <BrokeredProductButton product={product as IBrokerableProduct} />,
}