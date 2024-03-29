import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  export const UpLoadImg = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(80):fill(white)/nhathuoclongchau.com.vn/images/product/2018/06/00005714-panadol-giam-dau-ha-sot-6674-5b23_large.JPG',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(80):fill(white)/nhathuoclongchau.com.vn/images/product/2018/06/00005714-panadol-giam-dau-ha-sot-6405-5b23_large.JPG',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(80):fill(white)/nhathuoclongchau.com.vn/images/product/2018/06/00005714-panadol-giam-dau-ha-sot-5126-5b23_large.JPG',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(80):fill(white)/nhathuoclongchau.com.vn/images/product/2018/06/00005714-panadol-giam-dau-ha-sot-5126-5b23_large.JPG',
    }
   
   
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <>
<Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  )
};
