import React, { useState } from 'react';

import { Calendar } from '@hrnet-aj/icons';
import { Modal } from '@hrnet-aj/modal';

import styles from './App.module.scss';

function App () {
  const [showModal, setShowModal] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(false);

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
        onClick={() => setShowLoremIpsum(p => !p)}
        style={{ marginLeft: 20 }}
      >
        Toggle lorem ipsum
      </button>
      <button
        onClick={() => setShowModal(true)}
        style={{ marginLeft: 20 }}
      >
        Show modal
      </button>
      {showLoremIpsum && <LoremIpsum />}
      <button
        onClick={() => setShowModal(true)}
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

function LoremIpsum () {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum excepturi facilis incidunt iste saepe sed
      voluptas?
      Assumenda blanditiis delectus est inventore ipsam libero placeat praesentium similique ut voluptatibus? Ab
      accusamus
      aliquid aperiam aspernatur blanditiis consequatur consequuntur cupiditate dolorem dolorum error est et eum
      explicabo
      illum itaque iusto laborum magni maxime nemo nihil nisi nobis nostrum omnis quos saepe sapiente, sed soluta vero
      voluptas voluptates? A atque culpa debitis, delectus doloremque ducimus expedita harum in labore necessitatibus
      nesciunt perferendis quos ratione recusandae temporibus totam vitae voluptas voluptatibus! Commodi culpa
      dignissimos
      id molestiae praesentium quis ratione velit, veritatis voluptatum! Cum ex ipsam ipsum omnis perspiciatis saepe!
      Alias aperiam, architecto aspernatur commodi cum dolor doloremque facilis harum, iste nemo nesciunt perspiciatis
      sunt! Provident quam quisquam saepe sed unde. Asperiores cumque doloremque eaque est, facilis incidunt, labore
      laudantium omnis, quam quis suscipit voluptas voluptatibus. Ab cumque dolore, doloribus earum esse ex
      exercitationem
      in ipsam, molestiae omnis qui quod tempore! Aperiam asperiores atque beatae debitis distinctio est labore
      possimus
      sunt. At id iure pariatur perferendis quo, rerum similique tenetur? Aliquid amet aut autem beatae blanditiis
      consectetur consequatur culpa cum deserunt, distinctio ea eligendi error ex facere facilis impedit incidunt iure
      iusto laudantium magni maiores mollitia, natus nesciunt nisi odit officiis quod reiciendis repellat sed sit
      tempora
      vero voluptatem, voluptatum? Adipisci culpa distinctio, exercitationem facilis minus officia officiis placeat
      quaerat ut velit. A accusamus adipisci at aut consectetur corporis cumque dicta earum eos est ex hic illo labore
      libero maiores mollitia, nemo nobis officiis perspiciatis provident quae quas quidem sequi sit ullam veniam
      voluptas
      voluptatibus. Aperiam modi, odit officiis sed voluptate voluptatibus! Culpa, dolorem eos et fuga molestias
      necessitatibus nesciunt, praesentium quia reprehenderit tempora totam, ullam ut vero. A blanditiis deserunt
      dicta
      eos labore nemo nostrum quae ratione tenetur? Ab adipisci consequuntur cum delectus dolore dolores eum, eveniet
      facere ipsam minus, natus nostrum placeat quas, ratione saepe sapiente sit? Accusantium asperiores beatae
      dolorem
      et, facilis impedit nostrum numquam, sapiente sed unde, veritatis voluptatem. Ab, aliquam aliquid animi
      aspernatur
      autem consectetur consequuntur corporis debitis deserunt distinctio dolor ducimus ea error ex fugit illo iusto
      laborum neque nihil nobis nostrum nulla omnis perferendis porro quis repellendus reprehenderit rerum sed tempora
      vel
      veniam vero voluptate voluptatem! Beatae, libero perspiciatis! Amet cum cumque non officia. Aut consectetur
      corporis
      deleniti dolor dolores dolorum ea eaque et fuga illum inventore itaque iure iusto laboriosam maiores minima
      molestiae natus neque nulla numquam, officia optio, praesentium provident quaerat quisquam quod repellat rerum
      soluta sunt tempora totam ut voluptas voluptates. Architecto aspernatur cum eveniet harum magni, odit
      praesentium,
      suscipit temporibus tenetur veniam, vitae voluptates? Ad alias aliquam aperiam architecto assumenda atque beatae
      commodi consequatur deserunt dicta dolor dolorum ea eaque eius enim esse facere hic illo itaque laboriosam
      libero
      mollitia nemo officia possimus quam quod rem repellat reprehenderit repudiandae soluta, sunt tenetur unde vel!
      Accusantium, alias debitis dicta, dolorum eaque eos esse, hic incidunt maxime molestiae molestias mollitia nemo
      pariatur quia repudiandae similique suscipit ut. Accusantium, maiores, perspiciatis. Aliquid consequatur
      doloremque
      facere nemo nihil sequi.
    </p>
  );
}

export default App;
