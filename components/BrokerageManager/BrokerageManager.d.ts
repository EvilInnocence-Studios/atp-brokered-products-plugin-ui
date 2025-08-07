import { IBrokerage } from "@brokered-products-plugin-shared/brokerage/types";
import { ColumnType } from "antd/es/table";

export declare interface IBrokerageManagerProps {
    brokerages: IBrokerage[];
    isLoading: boolean;
    columns: ColumnType<IBrokerage>[];
    create: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IBrokerageManagerInputProps {

}

export type BrokerageManagerProps = IBrokerageManagerInputProps & IBrokerageManagerProps;