import styled from "styled-components";

export const Text = styled.p`
  width: 100%;
  text-align: center;
`;

export const Bold = styled(Text)`
  font-weight: 600;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 20px;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;
