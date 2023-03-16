import styled from 'styled-components';

import QuestionItem from './QuestionItemDummy';


const ListContainer = styled.ol`
  width: auto;
  margin-bottom: 20px;
  margin-left: -24px;
  border-top: 1px solid hsl(210, 8%, 85%);
  list-style: none;
`;

const QuestionsListDummy = ({ questions }) => {
  return (
    <ListContainer>
        <QuestionItem key="1"></QuestionItem>
        <QuestionItem key="2"></QuestionItem>
    </ListContainer>
  );
};

export default QuestionsListDummy;