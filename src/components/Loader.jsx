import React from 'react';
import { Loader, LoaderWrap } from './Loader.styled';

export function Loading() {
  return (
    <LoaderWrap>
      <Loader />
    </LoaderWrap>
  );
}
