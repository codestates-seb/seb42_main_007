import styled from 'styled-components';
import { useState } from 'react';

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: #3fbed3;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1da1a9;
  }
`;

const GradeButton = ({ spotGrade, setSpotGrade }) => {
  const [sortOrder, setSortOrder] = useState('desc');

  const handleClick = () => {
    const sortedGrade = [...spotGrade].sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.grade - a.grade;
      } else {
        return a.grade - b.grade;
      }
    });
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    setSpotGrade(sortedGrade);
  };
  

  return (
    <StyledButton onClick={handleClick}>
      {sortOrder === 'desc' ? '상급자 추천 스팟' : '초보자 추천 스팟'}
    </StyledButton>
  );
};

export default GradeButton;
