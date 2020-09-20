import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Divider, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { ContactsOutlined, ClusterOutlined, HomeOutlined } from '@ant-design/icons';
import Articles from './components/Articles';
import Applications from './components/Applications';
import Projects from './components/Projects';
import TagList from './components/TagList';
import { currentUser, fakeList } from './data.js';
import { useDispatch } from 'redux-react-hook';
import { getUserProfile } from '../../actions/profile';
import styles from './index.module.css';

const articleList = fakeList(10);
const applicationList = fakeList(10);
const projectList = fakeList(10);

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
      return <Projects list={projectList} />;
    case "applications":
      return <Applications list={applicationList} />;
    case "articles":
    default:
      return <Articles list={articleList} />;
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
  const dispatch = useDispatch();
  const [tabKey, setTabKey] = useState("articles");
  const onTabChange = (key) => {
    setTabKey(key);
  }
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
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
                <TagList tags={currentUser.tags} />
                <Divider dashed />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>团队</div>
                  <Row gutter={36}>
                    {
                      currentUser.notice &&
                      currentUser.notice.map((item) => (
                        <Col key={item.id} lg={24} xl={12}>
                          <Link to="/setting">
                            <Avatar size="small" src={item.logo} />
                            {item.member}
                          </Link>
                        </Col>
                      ))
                    }
                  </Row>
                </div>
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