import React from 'react';
import { Modal } from 'antd';

export const ModalInfo = (item) => {
  switch (item) {
    case 1:
        return(
          Modal.info({
            title: 'Portal AHASS',
            content: (
              <div>
                <p className='modal-text'>
                  <text><b>Technologies</b></text><br/>
                  <text><b>Front-end</b>: ReactJS, JQuery, ChartJS, Redux, Bootstrap</text><br/>
                  <text><b>Back-end</b>: .NET 4.5, Rest API, NPOI, PetaPoco</text><br/>
                  <text><b>Database</b>: SQL Server 2018</text>
                </p>
              </div>
            ),
            onOk() {},
          })
        )
      break;
    case 2:
        return(
          Modal.info({
            title: 'Boga Royalty Apps',
            content: (
              <div>
                <p className='modal-text'>
                  <text><b>Technologies</b></text><br/>
                  <text><b>App</b>: .NET 4.6</text><br/>
                  <text><b>Database</b>: SQL Server, My SQL, Firebase</text>
                </p>
              </div>
            ),
            onOk() {},
          })
        )
      break;
    case 3:
        return(
          Modal.info({
            title: 'PocketBank-Merchant',
            content: (
              <div>
                <p className='modal-text'>
                  <text><b>Technologies</b></text><br/>
                  <text><b>Front-end</b>: ReactJS, JQuery, Ant Design, Redux, Bootstrap</text><br/>
                </p>
              </div>
            ),
            onOk() {},
          })
        )
      break;
      default: return(null)
      break;
  }
}

function success() {
  Modal.success({
    title: 'This is a success message',
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}