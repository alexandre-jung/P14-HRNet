import { useRef, useState } from 'react';

import { UsersThree } from '@hrnet-aj/icons';

import { ViewHeader } from '../../components';
import { useEmployeeApi } from '../employee-provider';
import { CreateEmployeeFeedbackModal } from './CreateEmployeeFeedbackModal';
import { CreateEmployeeForm } from './CreateEmployeeForm';
import { Employee } from '../employee-provider/types';
import { FeedbackType } from './types';

export function CreateEmployee() {
  const { createEmployee } = useEmployeeApi();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackModalType, setFeedbackModalType] = useState<FeedbackType>('success');
  const [fullName, setFullName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleShowModal = () => setShowFeedbackModal(true);
  const handleHideModal = () => {
    setShowFeedbackModal(false);
    setFullName('');
  };

  const handleSubmitSuccess = (employee: Employee) => {
    setFeedbackModalType('success');
    createEmployee(employee);
    setFullName(`${employee.firstName} ${employee.lastName}`);
    handleShowModal();
  };

  const handleSubmitError = () => {
    setFeedbackModalType('error');
    handleShowModal();
  };

  return (
    <div>
      <ViewHeader
        icon={UsersThree}
        iconColor="#2874A6"
        title="Create employee"
        linkText="View employees"
        linkTo="/employees"
      />
      <CreateEmployeeForm
        onSubmitSuccess={handleSubmitSuccess}
        onSubmitError={handleSubmitError}
        formRef={formRef}
      />
      <CreateEmployeeFeedbackModal
        type={feedbackModalType}
        show={showFeedbackModal}
        onClose={handleHideModal}
        fullName={fullName}
      />
    </div>
  );
}
