import React from "react";
import { Col, Row } from "antd";
import { FC } from "react";
import { ProductCard } from "./ProductCard";

interface IProduct {
  id: string;
  description: string;
  price: number;
  image: string;
}

interface IProps {
  products: IProduct[];
}

export const ProductsList: FC<IProps> = ({ products }) => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col xs={24} sm={12} xl={8}>
          <ProductCard key={product.id} product={product} />
        </Col>
      ))}
    </Row>
  );
};
