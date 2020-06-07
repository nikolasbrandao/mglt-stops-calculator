import styled, { keyframes } from "styled-components";
import { Loader } from "@styled-icons/boxicons-regular/Loader";

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.section`
  width: 90vw;
  margin-top: 2em;
  border-radius: 0.4em;
  padding: 0.6em;
  background-color: ${({ theme }) => theme.primaryColor};
  padding-bottom: 3em;
`;

export const FormTitle = styled.h2`
  font-size: 1.3em;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.secondaryColor};
  margin: 0.8em 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputLabel = styled.label`
  text-align: left;
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.1em;
  margin-bottom: 0.3em;
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.4em;
`;

export const Input = styled.input`
  width: 70%;
  padding: 0.4em;
  font-size: 1.1em;
  background-color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.bgColor};
  border-right: none;
  color: ${({ theme }) => theme.bgColor};
  border-radius: 2px;
  :focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.bgColor};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.bgColor};
  }
`;

export const Button = styled.button`
  width: 30%;
  color: ${({ theme }) => theme.primaryColor};
  text-transform: uppercase;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.secondaryFontColor};
  border-left: none;
  background-color: ${({ theme }) => theme.secondaryFontColor};
  border-radius: 0 30px 30px 0px;
  transition: 0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: ${({ theme }) => theme.secondaryColor};
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.bgColor};
  }
`;

export const ResultWrapper = styled.section`
  width: 85vw;
  margin-top: -2em;
  border-radius: 0.4em;
  padding: 0.6em;
  background-color: ${({ theme }) => theme.secondaryFontColor};
  padding-bottom: 3em;
`;

export const ResultHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0;
`;

export const ResultTitle = styled.h3`
  font-size: 0.6em;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 0.3em;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(Loader)`
  color: ${({ theme }) => theme.secondaryColor};
  width: 2em;
  margin: 1em 0;
  animation: ${rotate} 2s linear infinite;
`;

export const LoadingMessage = styled.h1`
  color: ${({ theme }) => theme.secondaryColor};
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  text-align: center;
  margin-top: 1em;
`;

export const ResultInput = styled.input`
  padding: 0;
  text-align: left;
  font-size: 1em;
  background-color: ${({ theme }) => theme.secondaryFontColor};
  border: 1px solid ${({ theme }) => theme.secondaryFontColor};
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  :focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.secondaryColor};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
