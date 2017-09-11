import fable from 'rollup-plugin-fable';
import babel from 'rollup-plugin-babel';

const comment = `/*

  My super header

*/`;

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
      generatorOpts: {
        auxiliaryCommentBefore: comment,
        auxiliaryCommentAfter: comment,
      },
    }),
  ],
};
