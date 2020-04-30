import React from 'react';
import { Overlay } from '@blueprintjs/core';

import OverlayContent from './OverlayContent';

// Bad

export default () => {
  return (
    <div className="LoadFiles">
      <div className="anything">Normal content</div>
      <Overlay isOpen={true}>
        <OverlayContent />
      </Overlay>
    </div>
  );
};

// Good

// export default () => {
//   return (
//     <div className="LoadFiles">
//       <div className="anything">Normal content</div>
//       <Overlay isOpen={true}>
//         <div>
//           <Content />
//         </div>
//       </Overlay>
//     </div>
//   );
// };
