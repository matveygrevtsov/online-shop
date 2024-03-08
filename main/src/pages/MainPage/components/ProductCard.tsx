import React, { FC } from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;

interface IProduct {
  id: string;
  description: string;
  price: number;
  image: string;
}

interface IProps {
  product: IProduct;
}

export const ProductCard: FC<IProps> = ({ product }) => {
  const { description, price, image } = product;

  return (
    <Card
      style={{ maxWidth: "300px" }}
      cover={<img alt="example" src={image} />}
      actions={[<ShoppingCartOutlined />]} // Если идёт загрузка, отображать <Spin size="small" />
    >
      <Meta title={price} description={description} />
    </Card>
  );
};
