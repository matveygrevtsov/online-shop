import React, { useMemo } from "react";
import { Badge, Menu } from "antd";
import {
  UserAddOutlined,
  LoginOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Header = ({ logo, navigate }: { logo: string, navigate: any }) => {
  const items = useMemo(() => [
    {
      label: logo,
      key: 'logo'
    },
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
  ], []);

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(`/${key}`);
  }

  return (
    <Menu
      onClick={handleMenuClick}
      selectedKeys={["main"]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
