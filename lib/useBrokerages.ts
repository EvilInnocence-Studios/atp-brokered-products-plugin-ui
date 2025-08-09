import { IBrokerage } from "@brokered-products-plugin-shared/brokerage/types";
import { services } from "@core/lib/api";
import { useEffect } from "react";
import { memoizePromise } from "ts-functional";
import { useSharedState } from "unstateless";

export const useBrokerageRaw = useSharedState<IBrokerage[]>([]);

const getBrokerages = memoizePromise(() => services().brokerage.search());

export const useBrokerages = ():IBrokerage[] => {
    const [brokerages, setBrokerages] = useBrokerageRaw();

    useEffect(() => {
        getBrokerages().then(setBrokerages);
    }, []);

    return brokerages;
}

export const useBrokerageUrlTemplate = (name:string) => {
    const brokerages = useBrokerages();
    return brokerages.find(b => b.name === name)?.urlTemplate || "";
}