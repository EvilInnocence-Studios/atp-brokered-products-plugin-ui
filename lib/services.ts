import { IBrokerage, NewBrokerage } from "@brokered-products-plugin-shared/brokerage/types";
import { IMethods } from "@core/lib/types";
import { getResults } from "@core/lib/util";

export const brokerageServices = ({get, post, patch, remove}:IMethods) => ({
    brokerage: {
        search: ():Promise<IBrokerage[]> => get("brokerage").then(getResults),
        get: (id:string):Promise<IBrokerage> => get(`brokerage/${id}`).then(getResults),
        create: (brokerage:NewBrokerage):Promise<IBrokerage> => post("brokerage", brokerage).then(getResults),
        update: (id:string, brokerage:Partial<IBrokerage>):Promise<IBrokerage> => patch(`brokerage/${id}`, brokerage).then(getResults),
        remove: (id:string):Promise<void> => remove(`brokerage/${id}`),
    }
});
