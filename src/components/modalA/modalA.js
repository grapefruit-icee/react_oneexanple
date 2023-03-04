import React, { Component, useState } from 'react'
import { Button, Form, Input, Radio, Modal } from 'antd';



function ModalA({info, setInfo}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    // const [form] = Form.useForm();
    // const onOk = (e) => {
    //     form.submit();
    // };
    // const onCancel = () => {
    //     setIsModalOpen(false);
    // };

    const onFinish = (values) => {
        setInfo([values])
        console.log('Finish:', values);
    };
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'horizontal'
        ? {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 14,
            },
            }
        : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
        ? {
            wrapperCol: {
                span: 14,
                offset: 4,
            },
            }
        : null;
    const handleOk = () => {
        setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    


    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> 
            <Modal title="Basic Modal" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    name="userForm"
                    initialValues={{ layout: formLayout }}
                    onValuesChange={onFormLayoutChange}
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    >
                    <Form.Item label="name" name="name">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="number" name="number">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="gender" name="gender">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" htmlType="submit">确定</Button>
                        <Button type="primary">取消</Button>
                    </Form.Item>
                </Form>           
            </Modal>

              {/* <Modal title="Basic Drawer" open={isModalOpen} onOk={onOk} onCancel={onCancel}>
                <Form form={form} layout="vertical" name="userForm" onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        label="User Name"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="age"
                        label="User Age"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal> */}

        </div>
    )
}

export default ModalA

