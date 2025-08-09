import { storePlugins } from "@store/lib/plugin/slots";
import { useBrokerages } from "../useBrokerages";
import { IProduct } from "@store-shared/product/types";
import { ITableFilters } from "@core/lib/useTableFilters";

const regColumn = storePlugins.product.manager.columns.registerColumn;
const regColumnSet = storePlugins.product.manager.columns.registerColumnSet;

const BrokeredAtFilter = ({filters}:{filters: ITableFilters<IProduct>}) => {
    const brokerages = useBrokerages();
    const names = brokerages.map(b => b.name);

    return filters.select("Brokered At", "brokeredAt", names);
}

export const registerProductManagerColumnPlugins = () => {
    regColumn({
        key: "brokeredAt",
        column: ({filters}) => ({
            title: <BrokeredAtFilter filters={filters} />,
            dataIndex: "brokeredAt",
            key: "brokeredAt",
        }),
    });
    regColumn({
        key: "brokerageId",
        column: () => ({
            title: "Brokerage Product ID",
            dataIndex: "brokerageProductId",
            key: "brokerageProductId",
        }),
    });

    regColumnSet("Details", [
        {priority: 500, key: "brokeredAt"},
        {priority: 400, key: "brokerageId"},
    ]);
};