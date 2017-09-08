import fable from 'rollup-plugin-fable';
import babel from 'rollup-plugin-babel';

export default {
  entry: './src/redux-todomvc/Redux.TodoMVC.fsproj',

  output: {
    file: './public/redux-todomvc/bundle.js',
    format: 'iife',
    name: 'App',
  },

  globals: {
    react: 'React',
    redux: 'Redux',
    'react-dom': 'ReactDOM',
  },

  plugins: [
    fable(),

    babel({

      presets: [
        [
          'env',
          {
            // Environments to support
            target: {
              chrome: 30,
              safari: 7,
            },

            // Transformation of ES6 module syntax to another module type.
            // False will not transform modules (Rollup will take care of this)
            modules: false,

            // Outputs the targets/plugins used
            debug: true,
          },
        ],
      ],

      babelrc: false,

    }),
  ],
};
