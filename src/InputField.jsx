// components/InputField.js
import React from 'react';

const InputField = ({ value, onChange }) => {
  return (
    <div className="input-field">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter your prompt..."
        style={{ fontFamily: 'Comic Sans MS', fontSize: '18px' }}
      />
    </div>
  );
};

export default InputField;
