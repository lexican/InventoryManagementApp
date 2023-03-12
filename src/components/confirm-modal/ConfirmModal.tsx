import React, {FC} from 'react';
import {Modal} from 'react-native';
import {
  ModalContainer,
  FlexRow,
  ModalText,
  ConfirmBtn,
  ConfirmBtnText,
  RejectBtn,
  RejectBtnText,
} from './ConfirmModal.styles';

type IProps = {
  title: string;
  isModalVisible: boolean;
  onConfirm: () => void;
  onReject: () => void;
};

const ConfirmModal: FC<IProps> = ({
  isModalVisible,
  title,
  onConfirm,
  onReject,
}) => {
  return (
    <Modal visible={isModalVisible}>
      <ModalContainer>
        <ModalText>{title}</ModalText>
        <FlexRow>
          <ConfirmBtn
            activeOpacity={0.9}
            onPress={() => {
              onConfirm();
            }}>
            <ConfirmBtnText>Yes</ConfirmBtnText>
          </ConfirmBtn>
          <RejectBtn
            activeOpacity={0.9}
            onPress={() => {
              onReject();
            }}>
            <RejectBtnText>No</RejectBtnText>
          </RejectBtn>
        </FlexRow>
      </ModalContainer>
    </Modal>
  );
};

export default ConfirmModal;
