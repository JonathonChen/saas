import React from 'react';
// 4
// import { IS_DEV } from '../../lib/consts';

const Loading = ({ text }: { text: string }) => {
  // 4
  // if (IS_DEV) {
  //   return <p style={{ height: '1.0em' }} />;
  // }

  return <p style={{ height: '1.0em' }}>{text}</p>;
};

export default Loading;
