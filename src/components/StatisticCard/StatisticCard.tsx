import React, { FC } from "react";
import { Card, Statistic } from "antd";
import { AreaChartOutlined } from "@ant-design/icons";

interface CardItemProps {
  title: string;
  loading?: boolean;
}

const StatisticCard: FC<CardItemProps> = (props) => {
  return (
    <Card
      hoverable
      title={props.title}
      style={{ width: 250 }}
      extra={<AreaChartOutlined />}
    >
      <Statistic value={1128} loading={props.loading} />
    </Card>
  );
};

export default StatisticCard;
