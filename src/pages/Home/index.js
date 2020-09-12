import React from 'react';
import { Row, Col, Card } from 'antd';
import styles from './index.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
          <Row gutter={24}>
            <Col lg={7} md={24}>
              <Card bordered={false} style={{ marginBottom: 24}}>
                asdf  
              </Card>
            </Col>
            <Col lg={17} md={24}>
              <Card
                bordered={false}
                tabList={[
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
                ]}
              >
                qwer
              </Card>
            </Col>
          </Row>
        </div>
    )
};

export default Home;