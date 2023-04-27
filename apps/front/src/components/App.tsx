import React, { useState } from 'react';

import { Calendar } from '@hrnet-aj/icons';
import { Modal } from '@hrnet-aj/modal';

import styles from './App.module.scss';

function App () {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.App}>
      <Calendar
        width={24}
        height={24}
        style={{ verticalAlign: 'middle' }}
      />
      <span
        style={{
          marginLeft: 10,
          verticalAlign: 'middle',
        }}
      >
        Hello world!
      </span>
      <button
        onClick={() => setShowModal(p => !p)}
        style={{ marginLeft: 20 }}
      >
        Show modal
      </button>
      <Modal
        id="modal-1"
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <Modal.Header closeButton>
          Title
        </Modal.Header>
        coucou
      </Modal>
    </div>
  );
}

export default App;
