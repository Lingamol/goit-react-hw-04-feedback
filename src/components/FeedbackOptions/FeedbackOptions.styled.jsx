import styled from '@emotion/styled';

export const OptionBtnList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;
export const OptionBtnListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const OptionBtn = styled.button`
  border-radius: 5px;
  font-size: larger;
  padding: 5px;
  border: none;

  background-color: ${props => {
    switch (props.optionColor) {
      case 'good':
        return '#21D100';
      case 'bad':
        return '#FF0000';
      case 'neutral':
        return '#FFA812';
      default:
        return '#ffffff';
    }
  }};
`;
