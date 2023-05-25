import styled from "styled-components";

export const Wrapped = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Image = styled.img.attrs({
  alt: "svg-image",
})``;

export const Button = styled.button`
  margin-left: 40px;
  padding: 10px 30px;
  cursor: pointer;
`;
