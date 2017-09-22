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
require('../assets/custom.css')

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
  members: require('../assets/members.png'),

  MyBestFriend: require('../assets/new_pencil_vs_camera_image___best_friend_by_benheine-dblt511.jpg'),
  Horse: require('../assets/pencil_vs_camera___40_by_benheine-d34gk4p.jpg'),
  Kid: require('../assets/pencil_vs_camera___29_by_benheine.jpg'),
  Tractor: require('../assets/pencil_vs_camera___9_by_benheine.jpg'),
  Koala: require('../assets/pencil_vs_camera___15_by_benheine.jpg'),
  Mounth: require('../assets/art___ben_heine_russia______by_benheine-dat79l8.jpg'),
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

          <Slide bgColor={COLOR_RED} notes={`
            - Hi i'm Sven SAULEAU<br />
            - I'm glad to be here<br />
            - You can find me on twitter<br />
            - i'm part of the maintainers of Babel<br />
            - All code in this talk are going to be public<br />
            - I'm french
          `}>
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

          <Slide bgColor={COLOR_RED} notes={`
          - You might have seen this on twitter already<br />
          - It's what we call a digital playground for intelligent agents<br />
          - It's a game<br />
          - Behind me you can see four agents shooting at each others<br />
          - these agents are controlled by some sort of artificial intelligence<br />
          - if you want to hear more about that just ping<br />
          - there will be beta release soon<br />
          - I have to tell there's no fsharp involved here sorry<br />
          - But you can create your own AI using fsharp!<br />
          `}>
            <video autoPlay loop>
              <source src="https://s3.eu-central-1.amazonaws.com/bytearena-public/ba-prod-twitter.mp4" type="video/mp4" />
            </video>

            <Heading size={4} lineHeight={1} textColor="white">
              Byte arena
            </Heading>

            <p style={{ color: 'white' }}>
              Digital Playground for Intelligent Agents
            </p>
          </Slide>

          <Slide transition={['slide']} notes="FS looks really amazing" notes={`
          - I love FP<br />
          - from the outside F# looks really cool
          `}>
            <Heading size={4} lineHeight={1} textColor="black">
              ❤ FP
            </Heading>

            <Image src={images.SvenLovesFS.replace('/', '')} style={{height: 'auto', width: '100%'}}/>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW} bgImage={images.MyBestFriend.replace('/', '')} notes={`
          - Alfonso said there will be magic stuff<br />
          - Babel is part of the magic behind Fable<br />
          - but first what is Babel<br />
          - Anyone know what Babel is?
          `}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              What is Babel?
            </Heading>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW} notes={`
          - it's a big project<br />
          - ≈ Almost<br />
          - > More than
          `}>
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

          <Slide bgColor={COLOR_JS_YELLOW} notes={`
          - We are just few peoples behind Babel
          `} bgImage={images.members.replace('/', '')}>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW} notes={`
          - How does Babel even work<br />
          - Input even proposals<br />
          - proposal are stuff which hasn't made in the JavaScript language yet<br />
          - that's the normal usage<br />
          - I will show you a bit later how Fable works
          `}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              Next generation JavaScript, today
            </Heading>

            <p>
              <Image src={images.BabelDiagram.replace('/', '')} style={{height: 'auto', width: '100%'}}/>
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

          <Slide bgColor={COLOR_JS_YELLOW} notes={`
          - Many tools out there
          `}>
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

          <Slide bgColor={COLOR_JS_YELLOW} notes={`
          - TypeScript
          `}>
            <List>
              <ListItem>Flow</ListItem>
              <ListItem>JSX</ListItem>
              <ListItem>TypeScript (🚨 spoiler)</ListItem>
              <ListItem>
                AOT optimizations: CSS-in-JS, babel-react-optimize, Prepack, babel-plugin-preval, ...
              </ListItem>
            </List>
          </Slide>

          <Slide transition={['slide']} notes={`
          - And of course Fable<br />
          - This is how fable works<br />
          - Takes F# in input<br />
          - Give the AST to Babel<br />
          - Babel emits code, which is the ouput
          `}>
            <Heading size={4} lineHeight={1} textColor="black">
              Fable: F# |> BABEL
            </Heading>

            <p>
              <Image src={images.fableDiagram.replace('/', '')} style={{height: '100%', width: '100%'}}/>
            </p>
          </Slide>

          <Slide transition={['slide']} notes={`
          - What I like the most in Fable<br />
          - Integration with JS ecosystem
          `}>
            <Heading size={4} lineHeight={1}>
              <BlockQuote>
                <Quote textColor="black">[…] you can easily take advantage of current JS development tools […]</Quote>
                <Cite>Fable</Cite>
              </BlockQuote>
            </Heading>
          </Slide>

          <Slide transition={['slide']} notes={`
          - That's a true statement<br />
          - i'll show you a few examples
          `}>
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

          <Slide transition={['slide']} notes={`
          - Note that currying is not in JS
          `}>
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

          <Slide transition={['slide']} notes={`
          - Everything is an expression is also not in JS<br />
          - Fable need to emulate that in JS<br />
          - Tried with the DoExpression?
          `}>
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

          <Slide transition={['slide']} notes={`
          - Don't use that code, it's useless.<br />
          - It's to demonstrate you how it's being transpiled<br />
          - Generated readable if statement
          `}>
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

          <Slide transition={['slide']} notes={`
          - Now, I will dig into Fable stuff<br />
          - I took this Todo example app from the fable-samples repository
          `}>
            <Image src={images.todosSample.replace('/', '')} />
          </Slide>

          <Slide transition={['slide']} notes={`
          - I compiled it<br />
          - That looks like JavaScript you can be proud of<br />
          - But it uses ES2015 which can cause compatibility issues<br />
          - Here you can see a class and a symbol
          `}>
            <Heading size={4} lineHeight={1}>
              ES2015 compat
            </Heading>

            <CodePane
              lang="js"
              source={require('!raw!../assets/code/es2015Compat.js')}
            />
          </Slide>

          <Slide transition={['slide']} notes={`
          - Before I go further<br />
          - I'm going to explain what's a polyfill is
          `} bgImage={images.Horse.replace('/', '')}>
            <Heading size={1} lineHeight={1} textColor="black">
              Polyfill
            </Heading>
          </Slide>

          <Slide transition={['slide']} notes={`
          - For example the spread syntax<br />
          - If you want to have the support on IE11 for example<br />
          - The syntax must be transpiled<br />
          - Object.assign must be polyfilled<br />
          - Babel provides a browser fallback here in case you don't have the support<br />
          - that's a polyfill
          `}>
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

          <Slide transition={['slide']} notes={`
          - This is the Babel recommended solution to handle those kind of compatibility issues
          `}>
            <Heading size={4} lineHeight={1}>
              <Code>babel-preset-env</Code>
            </Heading>

            <p>
              Autoprefixer for Babel: compile less
            </p>

          </Slide>

          <Slide transition={['slide']} notes={`
          - It uses feature detection at the AST level<br />
          - It adds whatever polyfill you need
          `}>
            <Heading size={4} lineHeight={1}>
              Inspects AST
            </Heading>

            <p>
              <Image src={images.envDiagram.replace('/', '')} />
            </p>
          </Slide>

          <Slide transition={['slide']} notes={`
          - That's Dan, one of the guy behind React<br />
          - The configuration is really simple<br />
          - Specify a target, which browser and version<br />
          - Or range of version for a given browser
          - Only works with Node btw
          `}>
            <Image src={images.danPresetEnv.replace('/', '')} />
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

          <Slide transition={['slide']} notes={`
          - this is the ouput of env, in debug mode
          `}>
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

          <Slide transition={['slide']} notes={`
          - Babel-preset-env uses Kangax's compatibility table to determine which feature needs to be polyfilled
          `}>
            <Heading size={4} lineHeight={1}>
              Kangax's compat table
            </Heading>

            <p>
              <Image src={images.kangaxCompatTable.replace('/', '')} style={{ height: 'auto', width: '100%' }} />
            </p>
          </Slide>

          <Slide transition={['slide']} notes={`
          - Remember the ouput I'hve showed you earlier?<br />
          - As you can see class transpiled<br />
          - Symbol is polyfill globaly
          `}>
            <Heading size={4} lineHeight={1}>
              After
            </Heading>

            <CodePane
              lang="js"
              source={require('!raw!../assets/code/es2015Compat-after.js')}
            />
          </Slide>

          <Slide transition={['slide']} notes={`
          - The downside of compatibility<br />
          - Since it's not native anymore it can be slower
          `} bgImage={images.Kid.replace('/', '')}>
            <Heading size={1} lineHeight={1} textColor="black">
              What about perf?
            </Heading>
          </Slide>

          <Slide transition={['slide']} notes={`
          - Here are our classes transpiled by Babel<br />
          - they are a bit slower than the native syntax
          `}>
            <p>
              <Image src={images.incaseofstairsHeader.replace('/', '')} style={{}}/>
              <Image src={images.classEs6VsBabel.replace('/', '')} />
            </p>

            <p><small>Source: http://incaseofstairs.com/six-speed/</small></p>
          </Slide>

          <Slide transition={['slide']} notes={`
          - You can have a big overhead with transpiling async/await code<br />
          - I know F# can handle async stuff<br />
          - I'm not sure if Fable uses it<br />
          - Native in Node since 7.10
          `}>
            <Heading size={4} lineHeight={1}>
              <Code>async/await</Code> syntax
            </Heading>

            <p>
              650% increase in size + regenerator runtime
            </p>
          </Slide>

          <Slide transition={['slide']} notes={`
          - The next tool I want to show you is Babel/minify<br />
          - You might have seen babili, it's the old name<br />
          - Note that it is still in beta
          `}>
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

          <Slide transition={['slide']} notes={`
          - Before the minifcation 83 (eightee) kb<br />
          - With Babili I was able decrease the bundle size with a factor of 2
          `}>

            <Heading size={6} lineHeight={1}>
              Rollup & babel-minify
            </Heading>

            <Heading size={6} lineHeight={1}>
              83.8 kB → 44 kB
            </Heading>

          </Slide>

          <Slide transition={['slide']} notes={`
          - Versus webpack and uglify<br />
          - I couldn't use webpack because uglify is on by default in production mode
          `}>

            <Heading size={6} lineHeight={1}>
              Webpack & UglifyJs
            </Heading>

            <Heading size={6} lineHeight={1}>
              104 kB
            </Heading>

          </Slide>

          <Slide transition={['slide']} notes={`
          - To be honest, I have quite impressed by those results<br />
          - Here is a way you can reproduce it<br />
          - Webpack can add a lot of overhead because of the multiple module system it has to support
          `}>

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

          <Slide transition={['slide']} notes={`
          - The online version uses the es2015 transform<br />
          - To be fair I also applied it<br />
          - 44kb before<br />
          - But that's only an increase of 15kb (fifteen)
          `}>

            <Heading size={6} lineHeight={1}>
              Rollup & babel-minify & es2015
            </Heading>

            <Heading size={6} lineHeight={1}>
              60 kB
            </Heading>

          </Slide>

          <Slide transition={['slide']} notes={`
          - That's the secret behind Fable<br />
          - Or how you turn an AST into code<br />

          - babel-generator doesn't have many options
          `}>

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

          <Slide transition={['slide']} notes={`
          - An other very cool thing about Fable<br />
          - It's ESM ready<br />
          - it will be the module loader in Node<br />
          - It uses the import/export syntax<br />
          - It's already available in some browser
          `}>
            <Heading size={4} lineHeight={1}>
              <Code>ESM</Code> ready <small>(<Code>export</Code>/<Code>import</Code> syntax)</small>
            </Heading>

            <p>Node's module system</p>

            <p>Soon in browsers</p>
          </Slide>

          <Slide transition={['slide']} notes={`
          - This is a "because we can" thing<br />
          - Babel 7 allows you to use a JavaScript config file<br />
          - Using Fable you could transpile it to .js<br />
          - In case you need it
          `}>
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

          <Slide transition={['slide']} notes={`
          - To make this talk I needed to run .NET and Fable on Linux<br />
          - I can share the docker image i've used<br />
          - It has all the neccessarry inside of it
          `}>
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

          <Slide bgColor={COLOR_JS_YELLOW} notes={`
          - Last thing is if you want to contribute to Babel<br />
          - We are always looking for people<br />
          - And it's priceless
          `}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              Want to contribute?
            </Heading>

            <p>
              <Image src={images.wannaContribute.replace('/', '')} />
            </p>
          </Slide>

          <Slide bgColor={COLOR_JS_YELLOW}>
            <Heading size={1} fit lineHeight={1} textColor="black">
              Thanks, questions?
            </Heading>

            <List>
              <ListItem><small>- Pictures by Ben Heine (Pencil Vs Camera)</small></ListItem>
              <ListItem>Material here: https://github.com/xtuc/fableconf-2017-material</ListItem>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
