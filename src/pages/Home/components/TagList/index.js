import React, { useState } from 'react';
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SkeletonInput from 'antd/lib/skeleton/Input';

const TagList = ({ tags }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [newTags, setNewTags] = useState([]);
  const showInput = () => {
    setInputVisible(true);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputConfirm = () => {
    let tempTags = [...newTags];
    if (
      inputValue &&
      !tags.concat(tempTags).map(({ label }) => label).includes(inputValue)
    ) {
      tempTags = [...tempTags, { key: `new-${tempTags.length}`, label: inputValue }];
    }
    setNewTags(tempTags);
    setInputVisible(false);
    setInputValue('');
  }

  return (
    <div>
      <div>标签</div>
      {(tags || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      {
        inputVisible &&
        <Input 
          size="small"
          style={{ width: 78}}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      }
      {
        !inputVisible &&
        <Tag onClick={showInput} style={{ borderStyle: 'dashed'}}>
          <PlusOutlined />
        </Tag>
      }
    </div>
  );
}

export default TagList;