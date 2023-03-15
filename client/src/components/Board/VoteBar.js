import styled from 'styled-components';

const VoteBarContainer = styled.div`
  width: auto;
  padding-right: 16px;
  vertical-align: top;
  grid-column: 1;
  padding-bottom: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    color: hsl(210, 8%, 75%);
    margin: -2px;
  }
`;

const VoteButton = styled.button`
  margin: 2px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  svg {
    width: 36px;
    height: 36px;
  }
`;

const VoteCount = styled.div`
  margin: 2px;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: hsl(210, 8%, 45%);
`;

const VoteUpButton = styled(VoteButton)``;

// const VoteDownButton = styled(VoteButton)``;

const VoteBar = ({ total }) => {
  return (
    <VoteBarContainer>
      <div>
        <VoteUpButton>
          {/* <svg>
            <path d="M2 25h32L18 9 2 25Z"></path>
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
        </VoteUpButton>
        <VoteCount>{`${total}`}</VoteCount>
        {/* <VoteDownButton>
          <svg>
            <path d="M2 11h32L18 27 2 11Z"></path>
          </svg>
        </VoteDownButton> */}
      </div>
    </VoteBarContainer>
  );
};

export default VoteBar;
