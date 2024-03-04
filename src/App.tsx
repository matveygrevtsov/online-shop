import React from "react";

import { Divider } from "antd";
import { SignUpForm } from "./components/SignUpForm";
import { SignInForm } from "./components/SignInForm";
import { ProductCard } from "./components/ProductCard";
import { ProductsList } from "./components/ProductsList";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

export const App = (): JSX.Element => (
  <>
    <Header />
    <Divider />

    <center>
      <SignUpForm onSubmit={console.log} />
    </center>
    <Divider />

    <center>
      <SignInForm onSubmit={console.log} />
    </center>
    <Divider />

    <center>
      <ProductCard
        product={{
          id: "0",
          description: "description",
          price: 300,
          image:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        }}
      />
    </center>
    <Divider />

    <center>
      <ProductsList
        products={[
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
        ]}
      />
    </center>
    <Divider />

    <center>
      <Cart />
    </center>
  </>
);
