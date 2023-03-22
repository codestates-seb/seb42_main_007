import React, { useState, useRef } from 'react';
import Editor from '@toast-ui/react-editor';

function ClassEditor() {
  const [initialValue, setInitialValue] = useState('');
  const [markdownValue, setMarkdownValue] = useState('');

  const handleChange = () => {
    const instance = editorRef.current.getInstance();
    setMarkdownValue(instance.getMarkdown());
  };

  const editorRef = useRef();

  return (
    <Editor
      initialValue={initialValue}
      previewStyle="tab"
      height="400px"
      initialEditType="markdown"
      useCommandShortcut={true}
      ref={editorRef}
      onChange={handleChange}
    />
  );
}

export default ClassEditor;
