import React from "react";

import { Avatar, Button, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface IProduct {
  id: string;
  description: string;
  price: number;
  image: string;
}

const mockProducts: IProduct[] = [
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
];

const Cart = () => {
  return (
    <>
      <Link to='/'>Вернуться</Link>
      <List
        style={{ maxWidth: "600px" }}
        itemLayout="horizontal"
        dataSource={mockProducts}
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
