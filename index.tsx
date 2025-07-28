import { IModule } from "@core/lib/module";
import { plugins as storePlugins } from "@store/lib/plugin/slots";
import { brokeredProductLink } from "./lib/brokeredProductLink";

export const module:IModule = {
    name: "brokered-products-plugin",
};

// Register plugins
storePlugins.cart.addButton.register(brokeredProductLink);