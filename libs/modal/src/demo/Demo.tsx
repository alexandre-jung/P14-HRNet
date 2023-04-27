import React, { useState } from 'react';

import { Layer } from '../Layer';
import { Modal } from '../Modal';

import './styles.module.css';

export default function Demo () {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const [show2, setShow2] = useState(false);

  const handleShow2 = () => setShow2(true);
  const handleHide2 = () => setShow2(false);

  const hideBoth = () => {
    handleHide();
    handleHide2();
  };

  return (
    <div>
      <button onClick={handleShow}>show</button>
      <Layer id="modal-layer">
        <Modal
          show={show}
          id="modal-1"
          close
          onClose={handleHide}
        >
          <Modal.Header closeButton>
            Confirmer la suppression
          </Modal.Header>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque enim nesciunt vitae. A
            adipisci amet animi blanditiis corporis culpa debitis doloremque incidunt laboriosam, magni maxime modi,
            mollitia necessitatibus nesciunt nobis odio perspiciatis possimus quas quasi quia. Accusamus accusantium
            architecto autem consequuntur cupiditate delectus dignissimos distinctio dolor dolore est expedita hic in,
            itaque libero magnam maxime molestiae nihil officiis possimus provident qui quis quisquam quo, reiciendis
            repudiandae sapiente sequi unde ut voluptate voluptates? A accusantium architecto dolor facere, maiores
            nesciunt quia. Dolorum natus officiis quae rem! A ab accusamus adipisci aliquam, delectus deserunt
            doloremque earum eius eligendi exercitationem hic iste modi nam nihil nisi reiciendis reprehenderit
            temporibus vero! Cumque earum excepturi nisi quasi! Accusamus autem cupiditate dicta, eligendi id in
            laudantium maxime, molestiae omnis reiciendis rem vel velit veniam. Aspernatur assumenda ex exercitationem
            nemo nihil quis ut. Accusamus, accusantium aliquam, aliquid architecto assumenda delectus dolor eligendi est
            facere facilis illum ipsa iste nemo odit quo reprehenderit repudiandae soluta temporibus unde, voluptate?
            Commodi deleniti doloremque ipsa libero necessitatibus perspiciatis quidem sapiente velit vero voluptates!
            Architecto corporis debitis earum molestiae ut. Consequatur consequuntur dolores laborum nam non qui quod
            veniam. Culpa deserunt dolorum laboriosam pariatur. Aperiam esse mollitia quod totam vero voluptas.
            <button onClick={handleShow2}>show2</button>
          </div>
        </Modal>
        <Modal
          show={show2}
          id="modal-2"
          close
          onClose={handleHide2}
          centered
          className="coucou"
          style={{ backgroundColor: 'gray', color: 'white' }}
        >
          <Modal.Header
            closeButton
            styles={{ closeButton: { color: 'white' } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa, fuga ipsa molestias nobis officia
            qui quisquam soluta ullam vitae.
          </Modal.Header>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, molestias?
            <button onClick={hideBoth}>close both</button>
          </div>
        </Modal>
      </Layer>
    </div>
  );
}
