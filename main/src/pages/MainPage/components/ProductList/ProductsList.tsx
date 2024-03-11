import React from "react";
import { Col, Row } from "antd";
import { ProductCard } from "../ProductCard/ProductCard";
import { IProduct } from "../../../../types";

interface IProps {
  products: IProduct[];
}

export const ProductsList = ({ products }: IProps): JSX.Element => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={product.id} xs={24} sm={12} xl={8}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
