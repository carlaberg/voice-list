import styled from 'styled-components';
import * as variables from '../../style/variables';

export const FormWrapper = styled.form`
  width: 400px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${variables.backgroundWhite.hex};
  border-radius: ${variables.borderRadius.standard};
  padding: 40px;
`;

export const FormTitle = styled.div`
  ${variables.fontLarge()};
  color: ${variables.gray.hex};
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const InputGroup = styled.div`
  background: ${variables.lightWhite.hex};
  width: 100%;
  padding: 20px 40px;
  margin-bottom: 40px;
  border-radius: ${variables.borderRadius.standard};
`;

export const BackendMessage = styled.div`
  width: 100%;
  text-align: center;
  ${variables.fontMedium()}
  color: ${variables.gray.hex};
  margin-bottom: 40px;
`;
