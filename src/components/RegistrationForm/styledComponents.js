import styled from 'styled-components'

export const RegistrationContainer = styled.div`
  background-image: linear-gradient(to right, #77f2a0, #77f2ee, #cff277);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: start;
    padding-top: 50px;
  }
`
export const FormTitle = styled.h1`
  font-size: 48px;
  color: #07afb5;
  font-weight: 500;
  font-family: 'Sans-Serif';
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 36px;
  }
`
export const ViewContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 350px;
  padding: 20px;
  border-radius: 16px;
  min-height: 310px;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    flex-shrink: 0;
    box-shadow: 0px 4px 16px rgba(126, 133, 142, 0.16);
    padding: 48px 64px 48px 64px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`
export const SuccessImage = styled.img`
  width: 72px;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ffffff;
  padding: 8px 16px;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0454de;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
export const LoginResult = styled.p`
  color: #313336;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 600;
`
export const BackButton = styled.button`
  color: #ffffff;
  background-color: #0f47a8;
  font-family: 'Roboto';
  font-size: 10px;
  border-style: none;
  border-radius: 6px;
  padding: 10px;
  width: 70px;
`
