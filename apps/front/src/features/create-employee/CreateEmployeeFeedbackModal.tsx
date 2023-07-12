import { Modal } from '@hrnet-aj/modal';

import { FeedbackType } from './types';

type SuccessModalProps = {
  type: FeedbackType
  show: boolean
  onClose: () => void
  fullName: string
}

export const CreateEmployeeFeedbackModal = ({
  type,
  show,
  onClose,
  fullName,
}: SuccessModalProps) => {
  return (
    <Modal
      id="create-employee-feedback-modal"
      show={show}
      onClose={onClose}
      centered
      style={{ width: 400 }}
    >
      <Modal.Header closeButton>
        {
          type == 'success' ?
            'Employé créé' :
            'Erreur'
        }
      </Modal.Header>
      <p>
        {
          type == 'success' ?
            `L'employé ${fullName} a été enregistré !` :
            'Vous devez remplir tous les champs.'
        }
      </p>
    </Modal>
  );
};
