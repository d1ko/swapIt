import React, { useState } from 'react';
import { Button, Modal, Form, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

export const AddCards = ({ onCardAdded }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleAddCard = () => {
    form.resetFields();
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleCreateCard = async (values) => {
    try {
      const response = await fetch('http://16.171.20.43/api/v1/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        onCardAdded();
        setOpen(false);
      } else {
        console.error('Error creating card');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={handleAddCard}>
        Add Card
      </Button>
      <Modal title="Add Card" visible={open} onCancel={handleCancel} footer={null}>
        <Form form={form} onFinish={handleCreateCard}>
          <Form.Item
            name="category"
            label="Category"
            rules={[
              {
                required: true,
                message: 'Please enter the category',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter the name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please enter the description',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[
              {
                required: true,
                message: 'Please enter the quantity',
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.List name="images">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    key={field.key}
                    label={index === 0 ? 'Images' : ''}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter the image URL',
                      },
                    ]}
                  >
                    <Form.Item {...field} noStyle>
                      <Upload.Dragger name="files" multiple={false}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      </Upload.Dragger>
                    </Form.Item>
                    {fields.length > 1 && (
                      <Button type="link" onClick={() => remove(field.name)}>
                        Remove
                      </Button>
                    )}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block>
                    Add Image
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};