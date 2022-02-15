import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 56px;
  background-color: #212121;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

Navbar.Left = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  img {
    margin-right: 24px;
  }
`;

Navbar.Span = styled.div`
  position: absolute;
  top: 0;
  left: 140px;
  font-size: 10px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

Navbar.Search = styled.div`
  display: flex;
`;

Navbar.Input = styled.input`
  width: 574px;
  padding: 5px 10px;
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 2px 0px 0px 2px;
  outline: none;
  color: #fff;
`;
Navbar.SearchBtn = styled.button`
  width: 65px;
  height: 32px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 2px 2px 0px;
  cursor: pointer;
`;

Navbar.Right = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 24px;
  }
`;
