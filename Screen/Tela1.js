import React, { Fragment } from 'react';
import TituloView from '../components/TituloView';
import Tripulante from '../components/Tripulante/components/Tripulante';
import DiaHoras from '../components/Tripulante/components/DiaHoras'
import Button from '../components/Button';

export default () => {
 
  ////props.navigation.navigate('Tela1'); 

  return (
    <Fragment>

      <TituloView corFundo="#010D26" corTexto="#05F2F2" position="flex-start">
          General status
      </TituloView>  
<TituloView>

<DiaHoras/>
</TituloView>
     <TituloView>
<Tripulante/>

     </TituloView>
      
    </Fragment>
  );
};
