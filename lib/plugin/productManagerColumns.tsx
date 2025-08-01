import { storePlugins } from "@store/lib/plugin/slots";

const regColumn = storePlugins.product.manager.columns.registerColumn;
const regColumnSet = storePlugins.product.manager.columns.registerColumnSet;

export const registerProductManagerColumnPlugins = () => {
    regColumn({
        key: "brokeredAt",
        column: ({filters}) => ({
            title: filters.select("Brokered At", "brokeredAt", ["Daz", "HiveWire", "Renderosity", "RuntimeDNA"]),
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