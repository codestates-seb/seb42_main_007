import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
  const [content, setContent] = useState('');

  function handleChange(value) {
    setContent(value);
  }

  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
    />
  );
}

export default Editor;