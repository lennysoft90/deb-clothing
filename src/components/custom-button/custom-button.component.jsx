import React from 'react';



import {CustomBButtonContainer} from './custom-button.styles';


const CustomButton = ({children, ...props}) =>(
  <CustomBButtonContainer {...props}>
      {children}
  </CustomBButtonContainer>
);

export default CustomButton

