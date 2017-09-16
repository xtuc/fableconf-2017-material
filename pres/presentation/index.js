import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import Terminal from "spectacle-terminal";

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

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const COLOR_JS_YELLOW = '#F5DA55';
const COLOR_RED = '#DE2F34';

const DEFAULT_CODESLIDE_FONTSIZE = 2.5;

function line(nbr) {
  return [nbr - 1, nbr];
}

const images = {
  incaseofstairsHeader: require('../assets/incaseofstairs-header.png'),
  classEs6VsBabel: require('../assets/class-es6-vs-babel.png'),
  envDiagram: require('../assets/env-dia.png'),
  todosSample: require('../assets/todos-sample.png'),
  Sven: require('../assets/Sven.jpg'),
  fableDiagram: require('../assets/fable-dia.png'),
  wannaContribute: require('../assets/want-contribute.png'),
  danPresetEnv: require('../assets/dan-preset-env.png'),
  kangaxCompatTable: require('../assets/kangax-compat-table.png'),
  Babel: require('../assets/babel-logo.svg'),
  BabelDiagram: require('../assets/babel-dia.png'),
  SvenLovesFS: require('../assets/SvenLovesFS.png'),
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
              Babel is a <strike>JavaScript</strike> <small>(F#)</small> compiler
            </Heading>

          </Slide>

          <Slide bgColor={COLOR_RED}>
            <div style={{ float: 'left', width: '60%' }}>
              <Image src={images.Sven.replace('/', '')} style={{ flex: 1, width: '40%', borderRadius: '50%', border: '5px solid white' }} />
            </div>

            <div style={{ float: 'right', width: '40%' }}>
              <Heading size={1} fit lineHeight={1} textColor="white">
                Sven SAULEAU
              </Heading>

              <p style={{color: 'white'}}>
                @svensauleau
              </p>

              <Image src={images.Babel.replace('/', '')} />
            </div>
          </Slide>

          <Slide transition={['slide']} notes="FS looks really amazing">
            <Heading size={4} lineHeight={1} textColor="black">
              ❤ FP
            </Heading>

            <Image src={images.SvenLovesFS.replace('/', '')} />
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
              <ListItem>≈ 400 contributors</ListItem>
              <ListItem>> 22k stars</ListItem>
              <ListItem>≈ 10M downloads per month</ListItem>
              <ListItem>≈ 2k Babel plugins on npmjs</ListItem>
            </List>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              Next generation JavaScript, today
            </Heading>

            <p>
              <Image src={images.BabelDiagram.replace('/', '')} />
            </p>
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

          <Slide transition={['slide']} notes="Compose F# and Babel?, we'll see in between later">
            <Heading size={4} lineHeight={1} textColor="black">
              Fable: F# |> BABEL
            </Heading>

            <p>
              <Image src={images.fableDiagram.replace('/', '')} style={{height: '100%', width: '80%'}}/>
            </p>
          </Slide>

          <Slide transition={['slide']} notes="from my perspective">
            <Heading size={4} lineHeight={1}>
              <BlockQuote>
                <Quote textColor="black">[…] you can easily take advantage of current JS development tools […]</Quote>
                <Cite>Fable</Cite>
              </BlockQuote>
            </Heading>
          </Slide>

          <Slide transition={['slide']} notes="true statement">
            <Heading size={4} lineHeight={1}>
              <BlockQuote>
                <Quote textColor="black">JavaScript you can be proud of!</Quote>
                <Cite>Fable</Cite>
              </BlockQuote>
            </Heading>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              Functions
            </Heading>

            <p>
              <CodePane
                lang="fsharp"
                source={require('!raw!../assets/code/square.fs')}
              />
            </p>

            <p>
              ⬇
            </p>

            <p>
              <CodePane
                lang="js"
                source={require('!raw!../assets/code/square.js')}
              />
            </p>
          </Slide>

          <Slide transition={['slide']} notes="Different languagues, currying">
            <Heading size={4} lineHeight={1}>
              Currying
            </Heading>

            <p>
              <CodePane
                lang="fsharp"
                source={require('!raw!../assets/code/add2times3.fs')}
              />
            </p>

            <p>
              ⬇
            </p>

            <p>
              <CodePane
                lang="js"
                source={require('!raw!../assets/code/add2times3.js')}
              />
            </p>
          </Slide>

          <Slide transition={['slide']} notes="Different languagues, all-is-expression in fs">
            <Heading size={4} lineHeight={1}>
              Return statement
            </Heading>

            <p>
              <CodePane
                lang="fsharp"
                source={require('!raw!../assets/code/x.fs')}
              />
            </p>

            <p>
              ⬇
            </p>

            <p>
              <CodePane
                lang="js"
                source={require('!raw!../assets/code/x.js')}
              />
            </p>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              Pattern matching
            </Heading>

            <p>
              <CodePane
                lang="fsharp"
                source={require('!raw!../assets/code/booleanProxy.fs')}
              />
            </p>

            <p>
              ⬇
            </p>

            <p>
              <CodePane
                lang="js"
                source={require('!raw!../assets/code/booleanProxy.js')}
              />
            </p>
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

          <Slide transition={['slide']} notes="a browser fallback">
            <Heading size={4} lineHeight={1}>
              Polyfill
            </Heading>
          </Slide>

          <Slide transition={['slide']} notes="not in IE11">
            <Heading size={4} lineHeight={1}>
              Spread syntax
            </Heading>

            <p>
              <CodePane
                lang="js"
                source={require('!raw!../assets/code/polyfill-in.js')}
              />
            </p>

            <p>
              <CodePane
                lang="js"
                style={{overflow: 'hidden'}}
                source={require('!raw!../assets/code/polyfill-out.js')}
              />
            </p>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              <Code>babel-preset-env</Code>
            </Heading>

            <p>
              Autoprefixer for Babel: compile less
            </p>

          </Slide>

          <Slide transition={['slide']} notes="Feature detection">
            <Heading size={4} lineHeight={1}>
              Inspects AST
            </Heading>

            <p>
              <Image src={images.envDiagram.replace('/', '')} />
            </p>
          </Slide>

          <Slide transition={['slide']}>
            <Image src={images.danPresetEnv.replace('/', '')} />
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              Kangax's compat table
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
            <Terminal output={[
              `Using targets:
• chrome: 30
• safari: 7`,
              `
Using plugins:
• transform-es2015-arrow-functions
• transform-es2015-block-scoped-functions
• transform-es2015-block-scoping
• transform-es2015-classes
[…]
• transform-exponentiation-operator
• transform-async-to-generator
• syntax-trailing-function-commas
`,
              ]}
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

          <Slide transition={['slide']} notes="not native anymore, can be slower">
            <Heading size={4} lineHeight={1}>
              What about perf?
            </Heading>
          </Slide>

          <Slide transition={['slide']}>
            <p>
              <Image src={images.incaseofstairsHeader.replace('/', '')} style={{}}/>
              <Image src={images.classEs6VsBabel.replace('/', '')} />
            </p>

            <p><small>Source: http://incaseofstairs.com/six-speed/</small></p>
          </Slide>

          <Slide transition={['slide']} notes="Native since node 7.10">
            <Heading size={4} lineHeight={1}>
              <Code>async/await</Code> syntax
            </Heading>

            <p>
              650% increase in size + regenerator runtime
            </p>
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

          <CodeSlide
            transition={[]}
            lang="js"
            code={require('!raw!../../babili/rollup.config.js')}
            ranges={[
              {
                loc: [19, 20],
              },
              {
                loc: [23, 26],
              },
            ]}
          />

          <Slide transition={['slide']} notes="- webpack uses UglifyJs by def, with ES2015">

            <Heading size={6} lineHeight={1}>
              Rollup & babel-minify
            </Heading>

            <Heading size={6} lineHeight={1}>
              83.8 kB → 44 kB
            </Heading>

          </Slide>

          <Slide transition={['slide']} notes="- online sample size, - I believe webpack overhead, - to be fair, use es2015">

            <Heading size={6} lineHeight={1}>
              Webpack & UglifyJs
            </Heading>

            <Heading size={6} lineHeight={1}>
              104 kB
            </Heading>

          </Slide>

          <Slide transition={['slide']}>

            <Terminal output={[
              "$ wget http://fable.io/samples-browser/redux-todomvc/bundle.js",
              "$ du -sh bundle.js",
              "104K    bundle.js"
              ]}
            />

          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require('!raw!../../babili-with-es2015/rollup.config.js')}
            ranges={[
              {
                loc: [19, 20],
              },
              {
                loc: [24, 25],
              },
              {
                loc: [26, 31],
              },
            ]}
          />

          <Slide transition={['slide']} notes="- webpack uses UglifyJs by def, with ES2015">

            <Heading size={6} lineHeight={1}>
              Rollup & babel-minify & es2015
            </Heading>

            <Heading size={6} lineHeight={1}>
              60 kB
            </Heading>

          </Slide>

          <Slide transition={['slide']} notes="- webpack uses UglifyJs by def, with ES2015">

            <Heading size={6} lineHeight={1}>
              <Code>babel-generator</Code>
            </Heading>

            <p>
              Turns an AST into code
            </p>

          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require('!raw!../../babel-generator/rollup.config.js')}
            ranges={[
              {
                loc: [23, 26],
              },
              {
                loc: [27, 29],
              },
            ]}
          />

          <Slide transition={['slide']} notes="Fable already emits ESM">
            <Heading size={4} lineHeight={1}>
              <Code>ESM</Code> ready <small>(<Code>export</Code>/<Code>import</Code> syntax)</small>
            </Heading>

            <p>Node's module system</p>

            <p>Soon in browsers</p>
          </Slide>

          <Slide transition={['slide']} notes="- In babel 7, missing babel-plugin, not possible?">
            <Heading size={4} lineHeight={1}>
              <Code>.babelrc.fs</Code> → <Code>.js</Code>
            </Heading>

            <p>
              <CodePane
                lang="js"
                source={require('!raw!../../babelrc.fs/babelrc.fs')}
              />
            </p>
          </Slide>

          <Slide transition={['slide']}>
            <Heading size={4} lineHeight={1}>
              docker run <Code>xtuc/fable</Code>
            </Heading>

            <List>
              <ListItem>mono</ListItem>
              <ListItem>fsharp</ListItem>
              <ListItem>Yarn</ListItem>
              <ListItem>fable-compiler</ListItem>
            </List>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              Want to contribute?
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
