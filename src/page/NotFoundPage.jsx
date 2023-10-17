import React from 'react';
import { BsFillCameraReelsFill } from 'react-icons/bs';
import { Ground } from './NotFound.styled';

export default function NotFound() {
  return (
    <Ground>
      NOT FOUND
      <BsFillCameraReelsFill className="icon-ground" />
    </Ground>
  );
}
