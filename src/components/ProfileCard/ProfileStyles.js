import styled from "styled-components";

const StyledProfilesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  grid-gap: 1.5rem;
  max-width: 100vw;
  width: 120ch;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const StyledProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 300px;
  margin: auto;
  padding: 10px;
  border-radius: 6px;
  margin-top: 50px;

  background-color: white;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 10px;
`;

export { StyledProfilesList, StyledProfileItem, StyledProfileInfo };
