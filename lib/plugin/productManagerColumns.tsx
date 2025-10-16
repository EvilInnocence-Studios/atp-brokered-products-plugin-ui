import { IBrokerableProduct } from "@brokered-products-plugin-shared/product/types";
import { ITableFilters } from "@core/lib/useTableFilters";
import { storePlugins } from "@store/lib/plugin/slots";
import { useBrokerages } from "../useBrokerages";

const regColumn = storePlugins.product.manager.columns.registerColumn;
const regColumnSet = storePlugins.product.manager.columns.registerColumnSet;

const BrokeredAtFilter = ({filters}:{filters: ITableFilters<IBrokerableProduct>}) => {
    const brokerages = useBrokerages();
    const names = brokerages.map(b => b.name);

    return filters.select("Brokered At", "brokeredAt", names);
}

export const registerProductManagerColumnPlugins = () => {
    regColumn({
        key: "brokeredAt",
        column: ({filters}) => ({
            title: <BrokeredAtFilter filters={filters as ITableFilters<IBrokerableProduct>} />,
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