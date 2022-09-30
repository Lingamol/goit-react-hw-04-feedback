import styled from '@emotion/styled';

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatInfoItem = styled.div`
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  width: 200px;
  border: 2px solid blue;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  background-color: ${props => {
    if (Number(props.persentege) < 40) {
      return '#FF0000';
    } else if (Number(props.persentege) > 39) {
      return '#FFA812';
    } else if (Number(props.persentege) > 59) {
      return '#21D100';
    } else {
      return '#ffffff';
    }
  }};
`;
