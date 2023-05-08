import styled from '@emotion/styled';

export const Input = styled.input`
  display: block;
  height: 50px;
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
export const FormTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
`;
export const Form = styled.form``;

export const Label = styled.label`
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
`;

export const AddBtn = styled.button`
  width: 270px;
  height: 80px;
  border: none;
  outline: none;
  background: #2f2f2f;
  color: #fff;
  font-size: 22px;
  border-radius: 40px;
  text-align: center;
  box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  :hover {
    background-color: #080710;
    color: #ffffff;
  }
`;
export const Inputbox = styled.div`
  width: 260px;
  margin-bottom: 45px;
`;
