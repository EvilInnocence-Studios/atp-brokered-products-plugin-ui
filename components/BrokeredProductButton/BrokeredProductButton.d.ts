import { IProduct } from "@store-shared/product/types";

export declare interface IBrokeredProductButtonProps {
    brokeredLink: string;
}

// What gets passed into the component from the parent as attributes
export declare interface IBrokeredProductButtonInputProps {
    product: IProduct;
}

export type BrokeredProductButtonProps = IBrokeredProductButtonInputProps & IBrokeredProductButtonProps;