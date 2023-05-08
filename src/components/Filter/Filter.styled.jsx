import styled from '@emotion/styled';

export const Input = styled.input`
  display: block;
  height: 30px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 21px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;

  ::placeholder {
    color: #e5e5e5;
  }
`;

export const FilterBox = styled.div`
  /* top: 70%;
  right: 7%;
  position: absolute; */

  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  border: none;
  margin-bottom: 20px;
`;
