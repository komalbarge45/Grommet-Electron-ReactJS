import React, { Component } from 'react';
import { Box, Heading, Meter, Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#2E499B',
      'accent-1': '#B4375C',
      focus: '#BE6E1D',
      'neutral-1': '#2B3B68',
    },
    font: {
      family: 'Arial',
    },
  },
};

export default class App extends Component {
  render() {
    return (
	<Grommet theme={theme} full>
	  <Box fill background="light">
		<Box pad='medium' margin={{ vertical: 'small' }} tag="header"
          background="neutral-3" >
		  <Heading size='small'>A Grommet and Electron Integration</Heading>
		</Box>
		<Box pad='medium' width="small"
        height="small">
		  <Meter type='circle' thickness='small' values={[{value: 60, label: 'sixty'}]} />
		</Box>
		<Box margin={{ vertical: 'medium' }} tag="footer" 
          align="center"
          pad="small"
          background="neutral-3">
		  <p>
			A footer for a demo application
		  </p>
		</Box>
	  </Box>
	  </Grommet>
	);
  }
};