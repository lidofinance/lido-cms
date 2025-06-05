import styled from "styled-components";

export const Card = styled.div<{ enabled?: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 12px auto 0;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ enabled }) => (enabled ? "#28a745" : "#dc3545")};
  background: ${({ enabled }) =>
    enabled ? "rgba(40, 167, 69, 0.05)" : "rgba(220, 53, 69, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 12px;
`;

export const Name = styled.h3`
  margin: 0 0 2px 0;
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
  font-family: "Monaco", "Consolas", monospace;
`;

export const Description = styled.p`
  margin: 2px 0 0 0;
  font-size: 12px;
  line-height: 1.4;
  color: #6c757d;
  font-style: italic;
`;

export const Status = styled.div<{ enabled?: boolean }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  min-width: 60px;
  background-color: ${({ enabled }) => (enabled ? "#28a745" : "#dc3545")};
  color: white;
  border: 1px solid ${({ enabled }) => (enabled ? "#28a745" : "#dc3545")};
`;

export const Label = styled.span`
  font-weight: 600;
  color: #495057;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  min-width: 70px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 0;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const EnvironmentToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  padding: 4px;

  ${Label} {
    min-width: auto;
    font-size: 11px;
    font-weight: 600;
    color: #495057;
  }
`;
