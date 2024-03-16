import React from "react";
import { Col, Row } from "antd";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../../../../types";

interface ProductsListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps): JSX.Element => {
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
