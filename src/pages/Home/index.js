import React, { useState } from 'react';
import { Row, Col, Card, Divider } from 'antd';
import { ContactsOutlined, ClusterOutlined, HomeOutlined } from '@ant-design/icons';
import Articles from './components/Articles';
import Applications from './components/Applications';
import Projects from './components/Projects';
import { currentUser, fakeList } from './data.js';
import styles from './index.module.css';

const operationTabList = [
  {
    key: "articles",
    tab: (
      <span>
        文章 <span>(8)</span>
      </span>
    )
  },
  {
    key: "applications",
    tab: (
      <span>
        应用 <span>(10)</span>
      </span>
    )
  },
  {
    key: "projects",
    tab: (
      <span>
        项目 <span>(18)</span>
      </span>
    )
  },
];

const renderChildrenByTabKey = (tabKey) => {
  switch(tabKey) {
    case "projects":
      return <Projects />;
    case "applications":
      return <Applications />;
    case "articles":
    default:
      return <Articles />;
  }
}

const renderUserInfo = () => {
  return (
    <div className={styles.detail}>
      <p>
        <ContactsOutlined />
        {currentUser.title}
      </p>
      <p>
        <ClusterOutlined />
        {currentUser.group}
      </p>
      <p>
        <HomeOutlined />
        {(currentUser.geographic || { province: {label:''}}).province.label}
        {(currentUser.geographic || { city: {label:''}}).city.label}
      </p>
    </div>
  );
}

const Home = () => {
  const [tabKey, setTabKey] = useState("articles");
  const onTabChange = (key) => {
    setTabKey(key);
  }
    return (
        <div className={styles.container}>
          <Row gutter={24}>
            <Col lg={7} md={24}>
              <Card bordered={false} style={{ marginBottom: 24}}>
                <div className={styles.avatarHolder}>
                  <img className={styles.image} alt="" src={currentUser.avatar} />
                  <div className={styles.name}>{currentUser.name}</div>
                  <div>{currentUser.signature}</div>
                </div>
                {renderUserInfo()}
                <Divider dashed />
              </Card>
            </Col>
            <Col lg={17} md={24}>
              <Card
                bordered={false}
                tabList={operationTabList}
                activeTabKey={tabKey}
                onTabChange={onTabChange}
              >
                {renderChildrenByTabKey(tabKey)}
              </Card>
            </Col>
          </Row>
        </div>
    )
};

export default Home;