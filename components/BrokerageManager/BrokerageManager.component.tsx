import { Button, Spin, Table } from "antd";
import {BrokerageManagerProps} from "./BrokerageManager.d";
import styles from './BrokerageManager.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ClearCacheButton } from "@common/components/ClearCacheButton";
import { overridable } from "@core/lib/overridable";

export const BrokerageManagerComponent = overridable(({brokerages, isLoading, columns, create}:BrokerageManagerProps) =>
    <Spin spinning={isLoading}>
        <div className={styles.brokerageManager}>
            <h1>
                <FontAwesomeIcon icon={faHouse} /> Brokerages&nbsp;
                <Button type="primary" onClick={create}>
                    <FontAwesomeIcon icon={faPlus} /> Create new brokerage
                </Button>
                &nbsp;
                <ClearCacheButton entity="brokerage" cacheType="brokerage" />
            </h1>
            <Table 
                dataSource={brokerages}
                columns={columns}
                rowKey="id"
                pagination={false}
            />
        </div>
    </Spin>
);