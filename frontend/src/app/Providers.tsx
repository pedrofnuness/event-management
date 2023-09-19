'use client';

import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from '@/styles/GlobalStyles'

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <main className='container'>
        {props.children} 
      </main >
    </StyledComponentsRegistry>
  );
};

export default Providers