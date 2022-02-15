import styled from "styled-components";

export const Category = styled.div`
  width: 1296px;
  height: 56px;
  background: #212121;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

Category.Btn = styled.button`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  padding: 5px 12px;
  border-radius: 15px;
  border: 1px solid gray;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  margin-right: 12px;
  &:focus {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`;
