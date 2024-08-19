import React, { useState } from 'react';
import { Button, Drawer, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <header className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">DatleDev</Link>
        </div>
        <div className="hidden md:flex  space-x-6">
          <Link to="/" className="text-white hover:text-yellow-500">Home</Link>
          <Link to="/task3/createPost" className="text-white hover:text-yellow-500">Add Post</Link>
        </div>
        <Button
          className="md:hidden text-white"
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical" theme="dark">
          <Menu.Item key="home">
            <Link to="/" className="text-white">Home</Link>
          </Menu.Item>
          <Menu.Item key="addPost">
            <Link to="/task3/createPost" className="text-white">Add Post</Link>
          </Menu.Item>
          <Menu.Item key="task1">
            <Link to="/" className="text-white">Task 1</Link>
          </Menu.Item>
          <Menu.Item key="task2">
            <Link to="/" className="text-white">Task 2</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
