import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        Open Modal
      </button>

      {openModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h2>Hola Mundo</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia soluta possimus consectetur enim esse labore cumque
                sapiente fuga tenetur modi unde nesciunt natus qui quis incidunt
                beatae, molestiae fugiat, minus illum similique voluptates
                repudiandae! Earum nulla modi perferendis corrupti incidunt
                autem totam, quidem, aliquam corporis, alias voluptates nobis
                accusantium illo.
              </p>
              <button className="close-modal" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio possimus
        quaerat atque sapiente, iusto nobis aliquam doloremque quae voluptate?
        Distinctio quo nobis commodi temporibus provident officiis ipsa,
        quisquam veritatis, error ipsum quae fugit sed repellendus ducimus
        perspiciatis perferendis doloremque labore porro. Deleniti nostrum
        obcaecati vel iure ea libero aut ratione? Nisi delectus dignissimos
        commodi iste harum quibusdam, quis eligendi voluptatum officia, mollitia
        tempora a. Exercitationem soluta cumque recusandae vel nostrum, maxime
        animi assumenda fugiat ipsa impedit repellat! Nisi, pariatur ullam? Ea
        laboriosam atque beatae, tempora eligendi maiores, mollitia repellendus
        quae harum animi dolores! Quod dolore facere, repudiandae dolores
        tempora ut dolorem optio possimus quasi distinctio nemo incidunt
        exercitationem obcaecati cumque rerum, animi illo pariatur! Maxime iusto
        cumque harum tempora esse porro nihil molestias, illum id placeat minima
        voluptate sequi veritatis suscipit aperiam cupiditate similique dolorum
        enim sed tenetur, labore sunt! Ipsa explicabo suscipit amet nisi iusto,
        quo officiis dignissimos magni fuga maiores dicta praesentium eos. Fugit
        sint dolorem ut quasi ipsum voluptate odio excepturi minus molestias
        totam ex deserunt reiciendis blanditiis alias facere, aut rem inventore
        velit voluptatem et cumque corrupti nemo ducimus voluptatum. Sapiente,
        dolore? Vitae ratione veniam accusantium non, nesciunt quas cupiditate
        dicta, expedita vero, ex debitis quia ullam exercitationem quasi
        praesentium eligendi? Optio quasi ipsam, itaque rem fugiat reiciendis
        voluptates dolore quisquam repudiandae, vero voluptatum incidunt
        excepturi culpa nostrum. Eum culpa adipisci earum harum placeat?
        Nesciunt commodi laudantium porro aliquam corporis! Saepe itaque sunt
        laboriosam officia incidunt. In cupiditate rem suscipit labore quisquam
        quidem! Recusandae maxime excepturi in, cum aliquid, ad assumenda
        voluptatibus error sed a vero voluptates quibusdam ipsam. Harum magnam
        facere debitis minima tempora iste soluta exercitationem non quisquam,
        pariatur vero aliquam ullam temporibus accusantium rem officia cum quas
        odit autem cupiditate inventore provident voluptate! Facilis facere
        molestias sint atque necessitatibus in molestiae et. Laboriosam, natus.
        Nostrum unde velit, possimus quasi et repudiandae vero placeat
        perferendis dolor corporis tenetur assumenda, sit fugiat quisquam
        necessitatibus aliquam nihil iure doloribus ab eum. Corrupti dignissimos
        pariatur voluptas ipsa impedit tempora doloribus aliquam esse
        consequuntur dolorum assumenda cumque maxime ipsum incidunt quo autem,
        enim laudantium accusamus, dicta illo quis culpa! Fugit sed error
        officiis nostrum, recusandae amet veritatis, quasi distinctio eum
        excepturi numquam eius minus libero ipsa! Incidunt, laborum. Nihil
        dolorum odit inventore, amet perspiciatis laudantium perferendis quis
        autem veritatis, minima modi ex odio provident obcaecati unde incidunt
        laboriosam ea hic repellat aliquid distinctio corrupti. Commodi placeat
        nam soluta, sapiente minus sequi esse maxime facere impedit. Dolor
        dolore voluptatum necessitatibus molestias, odit incidunt quo ad fuga
        error vitae iure harum modi deleniti neque ducimus laborum eaque
        reiciendis vero ipsum. Officiis, est eius. Neque, consequuntur
        repellendus. Laudantium voluptatem incidunt ipsam excepturi dolor
        possimus, quae dolorum a magnam asperiores, commodi quia. Deleniti iure
        hic itaque inventore repellat unde fugit, voluptates expedita tempora
        placeat possimus, doloremque maxime. Laboriosam incidunt tempore saepe
        ut praesentium non. Voluptatem, eius, officia totam atque dignissimos
        maxime accusamus nam nulla iure distinctio voluptate accusantium,
        consequuntur explicabo saepe! Qui quo excepturi minima quae nulla
        explicabo voluptas possimus enim atque.
      </p>
    </>
  );
}
