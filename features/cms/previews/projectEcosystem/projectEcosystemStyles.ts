import styled from "styled-components";

export const Card = styled.a`
  display: block;
  width: 326px;
  margin: 30px auto 0;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 20px;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

export const Label = styled.p`
  font-weight: 600;
  color: #000000;
`;

export const Description = styled.p`
  color: rgb(122, 138, 160);
`;

export const Link = styled.a`
  color: rgb(0, 163, 255) !important;
  text-decoration: none;
`;

export const Categories = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;

export const Category = styled.div`
  color: rgb(122, 138, 160);
  padding: 6px 8px;
  background: rgb(239, 242, 246);
  border-radius: 30px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;
