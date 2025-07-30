import { IModule } from "@core/lib/module";
import { storePlugins } from "@store/lib/plugin/slots";
import { brokeredProductLink } from "./lib/plugin/brokeredProductLink";
import { registerProductEditorDetailsPlugins } from "./lib/plugin/productEditorDetails";

export const module:IModule = {
    name: "brokered-products-plugin",
};

// -- Register plugins -- //

// Adds an add to cart button override for brokered products
storePlugins.cart.addButton.register(brokeredProductLink);

registerProductEditorDetailsPlugins();