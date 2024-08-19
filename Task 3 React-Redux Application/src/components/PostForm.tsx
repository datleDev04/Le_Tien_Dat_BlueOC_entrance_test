import { Button, Input, Form, message, Col, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../service/store/posts/posts.thunk';
import { Posts } from '../service/store/posts/posts.model';
import { selectPostsStatus } from '../service/store/posts/posts.slice';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
}

const PostForm = ({ title }: Props) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const status = useSelector(selectPostsStatus);
  const nav = useNavigate()

  const onFinish = async (values: { title: string; body: string }) => {
    try {
      const newPost: Omit<Posts, 'id'> = {
        userId: 10, 
        title: values.title,
        body: values.body,
      };
      await dispatch(addNewPost(newPost) as any).unwrap();

      nav('/')
      message.success('Post created successfully!');
      form.resetFields();
    } catch (error) {
      message.error(`Failed to create post: ${error}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl sm:text-2xl font-bold w-full text-center mb-4 sm:mb-6">{title}</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Title is required' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              label="Body"
              name="body"
              rules={[{ required: true, message: 'Body is required' }]}
            >
              <Input.TextArea rows={6} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                className="h-10 text-base"
                loading={status === 'loading'}
              >
                Create Post
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PostForm;
