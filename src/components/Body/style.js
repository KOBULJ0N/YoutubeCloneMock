import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  background: #181818;
  height: 100%;
  margin-left: 240px;
  margin-top: 56px;
  flex-direction: column;
`;

Main.Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: space-around;
`;

Main.Channel = styled.div`
  display: flex;
  width: 295px;
  flex-direction: column;
  margin-bottom: 40px;
`;

Main.User = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 8px;
`;
Main.ChannelTitle = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  margin-left: 12px;
  color: #ffffff;
`;
Main.Description = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
`;
Main.Views = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
`;
