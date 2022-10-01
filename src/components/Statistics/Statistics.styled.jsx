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
  padding: 5px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  background-color: ${props => {
    let color = '#ffffff';

    if (Number(props.percentage) > 0) {
      color = '#FF0000';
    }

    if (Number(props.percentage) > 40) {
      color = '#FFA812';
    }
    if (Number(props.percentage) > 60) {
      color = '#21D100';
    }
    return color;
  }};
`;
