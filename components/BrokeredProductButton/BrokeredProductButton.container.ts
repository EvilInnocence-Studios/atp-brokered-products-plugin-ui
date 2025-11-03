import { generateBrokeredProductUrl } from "@brokered-products-plugin-shared/brokerage/util";
import { useBrokerageUrlTemplate } from "@brokered-products-plugin/lib/useBrokerages";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { BrokeredProductButtonComponent } from "./BrokeredProductButton.component";
import { BrokeredProductButtonProps, IBrokeredProductButtonInputProps, IBrokeredProductButtonProps } from "./BrokeredProductButton.d";

const injectBrokeredProductButtonProps = createInjector(({product}:IBrokeredProductButtonInputProps):IBrokeredProductButtonProps => {
    const template = useBrokerageUrlTemplate(product.brokeredAt || "");
    
    const brokeredLink = generateBrokeredProductUrl(template,product.brokerageProductId || "");
    return {brokeredLink};
});

const connect = inject<IBrokeredProductButtonInputProps, BrokeredProductButtonProps>(mergeProps(
    injectBrokeredProductButtonProps,
));

export const BrokeredProductButton = overridable<IBrokeredProductButtonInputProps>(connect(BrokeredProductButtonComponent));
