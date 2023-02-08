"use client";

/**
 * Import @antd dependencies
 */
import { ConfigProvider, Typography, Col, Row, Card } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

/**
 * Default component
 */
export default function Homepage() {
  return (
    <ConfigProvider>
      <Typography className="wrapper">
        <Title>Welcome to Next.js Starter</Title>
        <Title level={4}>
          Get started by editing <Text code={true}>app/page.tsx</Text>
        </Title>

        <Row justify={`center`} gutter={[20, 20]} style={{ marginTop: "5rem" }}>
          <Col span={12}>
            <Link
              href="https://github.com/Highfivery/nextjs-starter/wiki"
              target="_blank"
            >
              <Card hoverable title="Documentation">
                <Paragraph>
                  Find in-depth information about Next.js Starter.
                </Paragraph>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link
              href="https://github.com/Highfivery/nextjs-starter"
              target="_blank"
            >
              <Card hoverable title="Contribute">
                <Paragraph>
                  Help Next.js Starter grow by contributing.
                </Paragraph>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link
              href="https://github.com/Entermedia-LLC/wordpress-gutenberg-ant-design"
              target="_blank"
            >
              <Card hoverable title="WordPress Gutenberg Ant Design">
                <Paragraph>
                  Learn how to use the Gutenberg Ant Design plugin to build
                  headless websites with WordPress, Gutenberg & the Ant Design
                  system.
                </Paragraph>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link
              href="https://github.com/Highfivery/nextjs-starter/wiki/WordPress-Setup"
              target="_blank"
            >
              <Card hoverable title="Headless WordPress Documentation">
                <Paragraph>
                  Next.js Starter provides built-in support for WordPress &
                  Gutenberg. Find how to get it up in running in minutes.
                </Paragraph>
              </Card>
            </Link>
          </Col>
        </Row>
      </Typography>
      <style jsx global>{`
        .wrapper {
          margin-left: auto;
          margin-right: auto;
          max-width: 800px;
          text-align: center;
        }

        .column {
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }

        .ant-card {
          text-align: left;
        }
      `}</style>
    </ConfigProvider>
  );
}
