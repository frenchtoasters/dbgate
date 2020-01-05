import React from 'react';
import styled from 'styled-components';
import { showMenu } from '../modals/DropDownMenu';
import { AppObjectCore } from './AppObjects';

export function AppObjectList({ list, makeAppObj, SubItems, onObjectClick }) {
  return (list || []).map(x => {
    const appobj = makeAppObj(x);
    let res = <AppObjectCore key={appobj.key} {...appobj} data={x} makeAppObj={makeAppObj} onClick={onObjectClick} />;
    if (SubItems) {
      res = (
        <>
          {res}
          <SubItems data={x} />
        </>
      );
    }
    return res;
  });
}
