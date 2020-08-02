import React from './node_modules/react';

import './index.scss';

export default function Loader(props) {
  return (
    <div className='loader'>
      <div className='loader__figure'></div>
      {!props.label ? null : <p className='loader__label'>peopleapi</p>}
    </div>
  );
}
