import styled from "styled-components";

export const Card = styled.div`
  width: 316px;
  margin: 30px auto 0;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 20px;
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img`
  height: 34px;
`;

export const NetworkLogo = styled.img`
  width: 32px;
  height: 32px;
`;

export const Text = styled.p``;

export const BoldText = styled(Text)`
  font-weight: 600;
`;

export const Link = styled.a`
  display: inline-block;
  margin-top: 40px;
  color: rgb(0, 163, 255) !important;
  font-weight: 600;
  text-decoration: none;
`;
