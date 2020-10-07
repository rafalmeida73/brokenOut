import React from 'react';
import Lottie from 'react-lottie';
import Loading from '../../lotties/loading.json';

const defaultOptions = {
 loop: true,
 autoplay: true,
 animationData: Loading,
 rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
 }
};

function Load() {
 return (
  <Lottie className='loading'
   options={defaultOptions}
  />
 );
}

export default Load;