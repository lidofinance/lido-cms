import { useEffect, useState } from "react";
import { Dashboard } from "@uppy/react";
import styled from "styled-components";

import { modalEvents } from "./modalEvents/modalEvents";
import { uppy } from "./uppy/uppy";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Trigger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 700px;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
`;

const Switcher = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #000000;
`;

const SwitcherItem = styled.div<{ $active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  cursor: pointer;

  ${(props) =>
    props.$active &&
    `
    background-color: rgba(0, 0, 0, 0.5);
  `}
`;

const Block = styled.div`
  width: 100%;
  height: calc(100% - 75px);
  padding: 20px;

  overflow: auto;
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Image = styled.img``;

export const Modal = ({ handler }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [files, setFiles] = useState([]);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const getData = async () => {
    const data = await fetch("http://localhost:3000/files");
    const files = await data.json();
    setFiles(files);
  };

  useEffect(() => {
    getData();

    modalEvents.addListener("show", showModal);
    modalEvents.addListener("hide", hideModal);

    return () => {
      modalEvents.removeListener("show", showModal);
      modalEvents.removeListener("hide", hideModal);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Trigger onClick={hideModal} />
      <ModalWrapper>
        <Switcher>
          <SwitcherItem
            onClick={() => setActiveItem(0)}
            $active={activeItem === 0}
          >
            Files
          </SwitcherItem>
          <SwitcherItem
            onClick={() => setActiveItem(1)}
            $active={activeItem === 1}
          >
            Upload
          </SwitcherItem>
        </Switcher>
        {activeItem === 0 && (
          <Block>
            <Images>
              {files.map((link) => (
                <ImageWrapper key={link} onClick={() => handler(link)}>
                  <Image src={link} />
                </ImageWrapper>
              ))}
            </Images>
          </Block>
        )}
        {activeItem === 1 && (
          <Block>
            <Dashboard uppy={uppy} width={460} height={585} />
          </Block>
        )}
      </ModalWrapper>
    </Wrapper>
  );
};
