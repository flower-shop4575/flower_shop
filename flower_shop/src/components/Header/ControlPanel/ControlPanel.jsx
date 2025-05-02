import React from 'react';
import Korzyna from '../Korzyna/Korzyna.jsx';
import Selects from '../Selects/Selects.jsx';
import HeaderButtons from '../HeaderButtons/HeaderButtons.jsx';
import CabinetButton from '../CabinetButton/CabinetButton.jsx';

export default function ControlPanel() {
  return (
   <>
   <Korzyna></Korzyna>
   <Selects></Selects>
   <HeaderButtons></HeaderButtons>
   <CabinetButton></CabinetButton>
   </>
  )
}
