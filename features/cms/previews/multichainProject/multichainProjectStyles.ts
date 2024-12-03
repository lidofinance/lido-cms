import styled from "styled-components";

export const Wrapper = styled.div``;

export const Card = styled.div<{ feature?: string, disable?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 450px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 60px;
  border: 1px solid #000000a1;
  box-sizing: border-box;
  overflow: hidden;

  & * {
    margin: 0;
    text-align: center;
  }

  ${({ feature }) =>
    feature === "true" &&
    `
    border: 1px solid rgba(255, 184, 0, 0.50);
    box-shadow: 0px 4px 44px 0px rgba(255, 170, 6, 0.25);
  `}

  ${({ disable }) =>
    disable === "true" &&
    `
    border: 1px solid #000000a1;
    box-shadow: none;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.7);
    }
  `}
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;

  &::after {

  }
`;

export const Link = styled.span`
  color: #0085FF;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 20px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  box-sizing: border-box;
`;

export const Button = styled.div<{ v2?: string, hiden?: string, disable?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 20px;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 60px;
  color: #ffffff;
  box-sizing: border-box;

  ${({ hiden }) =>
    hiden === "true" &&
    `
    opacity: 0;
  `}

  ${({ v2 }) =>
    v2 === "true" &&
    `
      background-color: transparent;
      border: 1px solid rgba(0, 0, 0, 0.10);
      color: #000000;
    `}

  ${({ disable }) =>
    disable === "true" &&
    `
    opacity: 0.5;
  `}
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-height: 390px;
`;

export const Project = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px 10px 0;
  border-radius: 20px;
  background: rgba(26, 23, 38, 0.04);
  box-sizing: border-box;

  & * {
    text-align: start;
  }

  & .logo {
    width: 80px;
    height: 80px;
  }

  & .text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  & .description {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const InfoIcon = styled.div<{ hiden?: string }>`
  width: 100%;
  text-align: start;

  ${({ hiden }) =>
    hiden === "true" &&
    `
    opacity: 0;
  `}
`;
