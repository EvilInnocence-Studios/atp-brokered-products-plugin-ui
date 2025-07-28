import { switchOn } from "ts-functional";
import { createInjector, inject, mergeProps } from "unstateless";
import { BrokeredProductButtonComponent } from "./BrokeredProductButton.component";
import { BrokeredProductButtonProps, IBrokeredProductButtonInputProps, IBrokeredProductButtonProps } from "./BrokeredProductButton.d";

const injectBrokeredProductButtonProps = createInjector(({product}:IBrokeredProductButtonInputProps):IBrokeredProductButtonProps => {
    const brokeredLink = switchOn(product.brokeredAt || "", {
            Daz:         () => `https://www.daz3d.com/${product.brokerageProductId?.split(":")[1]}`,
            RuntimeDNA:  () => `https://www.daz3d.com/${product.brokerageProductId?.split(":")[1]}`,
            Renderosity: () => `https://www.renderosity.com/marketplace/products/${product.brokerageProductId?.split(":")[1]}`,
            HiveWire:    () => "https://hivewire3d.com/",
            default:     () => "",
        }) || "";
    

    return {brokeredLink};
});

const connect = inject<IBrokeredProductButtonInputProps, BrokeredProductButtonProps>(mergeProps(
    injectBrokeredProductButtonProps,
));

export const BrokeredProductButton = connect(BrokeredProductButtonComponent);
