import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 6px;
  width: 400px;
  margin-right: 20px;
  border: 1px solid #412a95;
  border-radius: 5px;
  box-shadow: 3px 2px 7px #412a95;
`;

export const FormBtn = styled.button`
  border-radius: 4px;
  color: #f8f8f8;
  background-color: #412a95;
  padding: 10px 15px;
  border: none;

  :hover,
  :focus {
    box-shadow: 0 0 10px;
  }
`;
