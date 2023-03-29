import styled from "styled-components";

const Avatar = () => {
  const imageUrl = "https://i.pravatar.cc/100";

  return <AvatarWrapper src={imageUrl} />;
};

export default Avatar;

const AvatarWrapper = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
