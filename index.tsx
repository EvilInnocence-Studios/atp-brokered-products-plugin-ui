import { IModule } from "@core/lib/module";
import { storePlugins } from "@store/lib/plugin/slots";
import { brokerageMenus } from "./lib/menus";
import { brokeredProductLink } from "./lib/plugin/brokeredProductLink";
import { registerProductEditorDetailsPlugins } from "./lib/plugin/productEditorDetails";
import { registerProductManagerColumnPlugins } from "./lib/plugin/productManagerColumns";
import { brokerageRoutes } from "./lib/routes";

export const module:IModule = {
    name: "brokered-products-plugin",
    menus: brokerageMenus,
    routes: brokerageRoutes,
};

// -- Register plugins -- //

// Adds an add to cart button override for brokered products
storePlugins.cart.addButton.register(brokeredProductLink);

registerProductEditorDetailsPlugins();
registerProductManagerColumnPlugins();