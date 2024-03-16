import React from "react";

import { Avatar, Button, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MOCK_PRODUCTS } from "../constants";

const Cart = () => {
  return (
    <>
      <Link to="/">Вернуться</Link>
      <List
        style={{ maxWidth: "600px", width: "100%" }}
        itemLayout="horizontal"
        dataSource={MOCK_PRODUCTS}
        renderItem={(product) => (
          <List.Item
            actions={[
              <Button icon={<DeleteOutlined />} />,
              // Если идёт загрузка, отображать <Spin size="small" />
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={product.image} />}
              description={product.description}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Cart;
