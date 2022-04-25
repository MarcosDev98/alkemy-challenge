import styled from 'styled-components';

const size = {
  // eslint-disable-next-line quotes
  xs: `320px`,
  // eslint-disable-next-line
  sm: `768px`,
  // eslint-disable-next-line
  lg: `900px`,
};

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
};




export const EditIcon = styled.i`
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover{
    color: #09f;
  }

`;


export const DeleteIcon = styled.i`
  font-size: 20px;
  right: 11%;
  cursor: pointer;
  transition: all 0.2s ease;


  :hover{
    color: #09f;
  }

`;

export const IconsContainer = styled.div`

  display: flex;
  align-items: right;
  justify-content: space-around;
  width: 30%;
  padding: 6px 12px;

  @media only screen and ${device.lg} {

    display: flex;
    align-items: right;
    justify-content: space-around;
    width: 45%;
    text-align: left;
    padding-left: 50%;

    :before {
      content: 'Acciones';
      position: absolute;
      left: 10%;

      padding-left: 1em;
      width: 45%;
      font-weight: 600;
      font-size: 1.1em;

    }
}

`;

// export const IconsTD = styled.td`
//   width: 30%;
//   padding: 6px 12px;

//   @media only screen and ${device.lg} {

//     width: 100%;
//     text-align: left;
//     padding-left: 50%;
//     position: relative;
// }
// `;

export const DateTD = styled.td`
  width: 30%;
  padding: 6px 12px;

  @media only screen and ${device.lg} {

    display: block;
    width: 50%;
    text-align: left;
    padding-left: 50%;
    position: relative;

    :before {
      content: 'Fecha';
      position: absolute;
      left: 0;

      
      padding-left: 1em;
      width: 45%;
      font-weight: 600;
      font-size: 1.1em;

      
    }
}

`;

export const ConceptTD = styled.td`
  width: 30%;
  padding: 6px 12px;

  @media only screen and ${device.lg} {

    display: block;
    width: 50%;
    text-align: left;
    padding-left: 50%;
    position: relative;

    :before {
      content: 'Concepto';
      position: absolute;
      left: 0;
      

      padding-left: 1em;
      width: 45%;
      font-weight: 600;
      font-size: 1.1em;


    }

}

`;

export const AmountTD = styled.td`
  width: 30%;
  padding: 6px 12px;

  @media only screen and ${device.lg} {

    display: block;
    width: 50%;
    text-align: left;
    padding-left: 50%;
    position: relative;

    :before {
      content: 'Monto';
      position: absolute;
      left: 0;


      padding-left: 1em;
      width: 45%;
      font-weight: 600;
      font-size: 1.1em;

    }
}

`;