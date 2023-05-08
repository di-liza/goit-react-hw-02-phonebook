import styled from '@emotion/styled';

export const ListBox = styled.ul``;

export const Item = styled.li`
  width: 300px;
  background-color: #b3b3f739;
  border-radius: 10px;
  padding: 5px;

  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
  :nth-last-child() {
    margin-bottom: 0px;
  }
`;

export const DeleteBtn = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  outline: none;
  background: #2f2f2f;
  color: #fff;
  font-size: 15px;
  border-radius: 40px;
  text-align: center;
  box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  :hover {
    background-color: #080710;
    color: #ffffff;
  }
`;
