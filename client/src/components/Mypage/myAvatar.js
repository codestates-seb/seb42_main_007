import styled from "styled-components";

const myAvatar = () => {
  const imageUrl = "https://i.pravatar.cc/100";

  return <AvatarWrapper src={imageUrl} />;
};

export default myAvatar;

const AvatarWrapper = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;`