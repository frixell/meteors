import { FilterMessageWrapper, FilterText } from '../../styles/styles';
import { MessageType } from '../../types';

const Message = ({ message, messageCondition, buttonText, buttonActionValue, buttonAction = () => {} }: MessageType) => messageCondition ? 
  (
    <FilterMessageWrapper>
      <FilterText>{message}</FilterText>
      {buttonText && <button onClick={() => buttonAction(buttonActionValue || 0)}>{buttonText}</button>}
    </FilterMessageWrapper>
  )
  : 
  null;

export default Message;
