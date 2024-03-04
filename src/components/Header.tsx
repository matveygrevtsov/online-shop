import React from "react";
import { Badge, Menu, MenuProps } from "antd";
import {
  UserAddOutlined,
  LoginOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useMemo } from "react";

export const Header = () => {
  const items = useMemo(() => {
    const items: MenuProps["items"] = [
      {
        label: "Зарегистрироваться",
        key: "sign-up",
        icon: <UserAddOutlined />,
      },
      {
        label: "Войти",
        key: "sign-in",
        icon: <LoginOutlined />,
      },
      {
        label: "Товары",
        key: "main",
        icon: <ShoppingOutlined />,
      },
      {
        label: "Корзина",
        key: "cart",
        icon: (
          <Badge count={5} size="small">
            <ShoppingCartOutlined />
          </Badge>
        ),
      },
      {
        label: "Выйти",
        key: "logout",
        icon: <LogoutOutlined />,
      },
    ];

    return items;
  }, []);

  return (
    <Menu
      onClick={console.log}
      selectedKeys={["main"]}
      mode="horizontal"
      items={items}
    />
  );
};
