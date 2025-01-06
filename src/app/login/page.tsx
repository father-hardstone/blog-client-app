'use client'
import { useState } from 'react';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { Form, Input, Button, notification, Card } from 'antd';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // For navigation

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await axios.post('/api/auth/login', values);
      notification.success({
        message: 'Logged in successfully!',
      });
      // Redirect or perform further action after login success
    } catch (err) {
      notification.error({
        message: 'Error logging in',
        description: 'There was an issue logging in. Please try again.',
      });
    }
  };

  const handleGoToSignup = () => {
    router.push('/signup'); // Navigates to the signup page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card
        style={{ width: 400 }}
        title="Login"
        bordered={false}
        bodyStyle={{ padding: '20px' }}
      >
        <Form
          onFinish={handleSubmit}
          initialValues={{ email, password }}
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
          >
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center">
          <Button type="link" onClick={handleGoToSignup}>
            Don't have an account? Sign Up
          </Button>
        </div>

        <div className="mt-4 text-center">
          <Button
            type="primary"
            block
            onClick={() => signIn('google')}
            style={{ marginBottom: '10px' }}
          >
            Login with Google
          </Button>
          <Button
            type="primary"
            block
            onClick={() => signIn('github')}
            style={{ marginBottom: '10px' }}
          >
            Login with GitHub
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
