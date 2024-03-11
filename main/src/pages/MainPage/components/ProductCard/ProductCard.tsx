import React, { FC } from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { IProduct } from "../../../../types";

const { Meta } = Card;

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
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
