import { Modal } from '@hrnet-aj/modal';

type SuccessModalProps = {
  show: boolean
  onClose: () => void
  fullName: string
}

export const SuccessModal = ({
  show,
  onClose,
  fullName,
}: SuccessModalProps) => {
  return (
    <Modal
      id="confirmation-modal"
      show={show}
      onClose={onClose}
      centered
      style={{ width: 400 }}
    >
      <Modal.Header closeButton>
        Employé créé
      </Modal.Header>
      <p>
        L'employé {fullName} a été enregistré !
      </p>
    </Modal>
  );
};
