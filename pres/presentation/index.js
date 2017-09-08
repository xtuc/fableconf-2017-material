// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text,
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const COLOR_JS_YELLOW = '#F5DA55';
const COLOR_RED = '#DE2F34';

const DEFAULT_CODESLIDE_FONTSIZE = 2.5;

const images = {
  todosSample: require('../assets/todos-sample.png'),
  fableDiagram: require('../assets/fable-diagram.png'),
  wannaContribute: require('../assets/want-contribute.png'),
  danPresetEnv: require('../assets/dan-preset-env.png'),
  kangaxCompatTable: require('../assets/kangax-compat-table.png'),
  polyfill: require('../assets/polyfill.png'),
};

preloader(images);

const theme = createTheme({ primary: COLOR_JS_YELLOW });

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500}>

          <Slide bgColor={COLOR_JS_YELLOW}>

            <Heading size={1} fit lineHeight={1} textColor="black">
              Babel is a JavaScript compiler
            </Heading>

          </Slide>

          <Slide bgColor={COLOR_RED}>
            <Heading size={1} fit lineHeight={1} textColor="white">
              Sven SAULEAU
            </Heading>

            <div style={{ textAlign: 'left', marginTop: '100px' }}>
              <Heading size={4} lineHeight={1} textColor="white">
                Freelance
              </Heading>
            </div>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              What is Babel?
            </Heading>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              A big project & community
            </Heading>

            <List>
              <ListItem>Over 350 contributors</ListItem>
              <ListItem>Over 21k stars</ListItem>
              <ListItem>Almost 10M downloads per month</ListItem>
              <ListItem>Almost 2k Babel plugins on npmjs</ListItem>
            </List>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              Next generation JavaScript, today
            </Heading>

            Diagram here
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              Multiple purpose
            </Heading>

            <List>
              <ListItem>Static analysis</ListItem>
              <ListItem>AST manipulation (visitor pattern)</ListItem>
              <ListItem>Plugin system</ListItem>
            </List>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <Heading size={4} fit lineHeight={1} textColor="black">
              Powered by Babel
            </Heading>

            <List>
              <ListItem>Minifiers</ListItem>
              <ListItem>Linters</ListItem>
              <ListItem>Prettier</ListItem>
              <ListItem>Code coverage</ListItem>
              <ListItem>Codemods (code transformations)</ListItem>
            </List>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <List>
              <ListItem>Flow</ListItem>
              <ListItem>JSX</ListItem>
              <ListItem>TypeScript (🚨 spoiler)</ListItem>
              <ListItem>
                AOT optimizations: CSS-in-JS, babel-react-optimize, Prepack, babel-plugin-preval, ...
              </ListItem>
            </List>
          </Slide>

          <Slide transition={['slide']}>
            <Image src={images.fableDiagram.replace('/', '')} />
          </Slide>

          <Slide transition={['slide']}>
            <Image src={images.todosSample.replace('/', '')} />
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              ES2015 compat
            </Heading>

            <CodePane
              lang="js"
              source={require('!raw!../assets/code/es2015Compat.js')}
            />
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              <Code>babel-preset-env</Code>
            </Heading>

            <p>
              Autoprefixer for Babel: compile less
            </p>
          </Slide>

          <Slide transition={['slide']}>
            <Image src={images.danPresetEnv.replace('/', '')} />
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              Polyfill <small>(a browser fallback)</small>
            </Heading>

            <p>
              <Image src={images.polyfill.replace('/', '')} style={{ height: 'auto', width: '100%' }} />
            </p>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              Kangax-s compat table
            </Heading>

            <p>
              <Image src={images.kangaxCompatTable.replace('/', '')} style={{ height: 'auto', width: '100%' }} />
            </p>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require('!raw!../../babel-preset-env/rollup.config.js')}
            ranges={[
              {
                loc: [19, 20],
              },
              {
                loc: [25, 26],
              },
              {
                loc: [27, 32],
              },
              {
                loc: [35, 36],
              },
              {
                loc: [38, 39],
              },
            ]}
          />

          <Slide transition={['slide']}>
            <CodePane
              lang="js"
              source={require('!raw!../assets/code/babelPresetEnvDebugOut')}
            />
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              After
            </Heading>

            <CodePane
              lang="js"
              source={require('!raw!../assets/code/es2015Compat-after.js')}
            />
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              <Code>babel/minify</Code> (aka <Code>babili</Code>)
            </Heading>

            <p>
              An ES6+ aware minifier based on the Babel toolchain
              {' '}
              <small>(beta)</small>
            </p>
          </Slide>

          <Slide transition={['slide']} notes="- webpack uses UglifyJs by def">

            <Heading size={6} lineHeight={1}>
              Rollup & babel-minify
            </Heading>

            <Heading size={6} lineHeight={1}>
              83.8 kB → 54.3 kB
            </Heading>

          </Slide>

          <Slide transition={['slide']} notes="- online sample size, - I believe webpack overhead">

            <Heading size={6} lineHeight={1}>
              Webpack & UglifyJs
            </Heading>

            <Heading size={6} lineHeight={1}>
              104 kB
            </Heading>

          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              Want to crontribute?
            </Heading>

            <p>
              <Image src={images.wannaContribute.replace('/', '')} />
            </p>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
