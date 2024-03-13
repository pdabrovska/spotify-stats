import React from 'react';
import Bubble from './Bubble';
import Blob, {blob_filter_id} from './Blob';

import { BubblesVars } from '../data/BubblesVars';

const Bubbles = () => {

  return (
    <div>
      <Blob />
      <div
        className='absolute bottom-[92%] left-0 right-0 h-[6rem] overflow-hidden bg-transparent'
        style={{filter: `url(#${blob_filter_id})`}}
      >
        {BubblesVars.map((bub, i) => (
          <Bubble bub={bub} key={i}/>
        ))

        }
      </div>
    </div>
  )
}

export default Bubbles;