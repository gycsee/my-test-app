import React, { useState } from 'react';

const UploadFile = () => {
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const handleUploadFile = ({ target: { files } }) =>
    setUploadedFileName(files[0].name);

  return (
    <div>
      <label htmlFor="upload-file">Upload File</label>

      <input
        id="upload-file"
        name="upload-file"
        onChange={handleUploadFile}
        type="file"
      />

      {uploadedFileName && (
        <div>You have uploaded a file named {uploadedFileName}</div>
      )}
    </div>
  );
};

export default UploadFile;
