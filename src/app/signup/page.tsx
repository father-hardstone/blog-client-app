'use client'
import { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, notification, Card } from 'antd';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // For navigation

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
  
      console.log('The payload is:', payload);
      // Uncomment the next line when ready to send the payload to the backend
      // await axios.post('/api/auth/signup', payload);
  
      notification.success({
        message: 'User created successfully!',
      });
    } catch (err) {
        console.log('error')
      notification.error({
        message: 'Error creating user',
        description: 'There was an issue creating the user. Please try again.',
      });
    }
  };

  const handleGoToLogin = () => {
    router.push('/login'); // Navigates to the login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card
        style={{ width: 400 }}
        title="Signup"
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
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center">
          <Button type="link" onClick={handleGoToLogin}>
            Already have an account? Sign In
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
