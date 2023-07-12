import { useRef, useState } from 'react';

import { UsersThree } from '@hrnet-aj/icons';
import { ViewHeader } from '../../components';
import { useEmployeeApi } from '../employee-provider';
import { SuccessModal } from './SuccessModal';
import { CreateEmployeeForm } from './CreateEmployeeForm';
import { Employee } from '../employee-provider/types';

export function CreateEmployee() {
  const { createEmployee } = useEmployeeApi();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleShowModal = () => setShowSuccessModal(true);
  const handleHideModal = () => {
    setShowSuccessModal(false);
    setFullName('');
  };

  const handleSubmitSuccess = (employee: Employee) => {
    createEmployee(employee);
    setFullName(`${employee.firstName} ${employee.lastName}`);
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
        formRef={formRef}
      />
      <SuccessModal
        show={showSuccessModal}
        onClose={handleHideModal}
        fullName={fullName}
      />
    </div>
  );
}
