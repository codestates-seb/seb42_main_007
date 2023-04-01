import { Button } from "@mui/material"
import styled from "styled-components"

const UploaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  .img-wrapper {
    img {
      width: 270px;
      height: 270px;
      object-fit: cover;
    }
  }
  .upload-button {
    button {
      margin: 10px 5px;
      font-size: 1.1rem;
    }
  }
`

export let img_url

const ImageUploader = ({ preview_URL, setImage }) => {
  let inputRef

  const saveImage = (e) => {
    e.preventDefault()
    const fileReader = new FileReader()
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0])
      // img_url = e.target.files[0]
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      })
    }
  }

  return (
    <UploaderWrapper>
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none" }}
      />
      <div className="img-wrapper">
        <img alt="URL" src={preview_URL} />
      </div>
      <div className="upload-button">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => inputRef.click()}
          >사진 고르기
        </Button>
      </div>
    </UploaderWrapper>
  )
}

export default ImageUploader