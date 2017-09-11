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

      // Minifies the ouput when printing
      // Prefer using babel/minify
      minified: true,

      // Don't print comments
      comments: false,

    }),
  ],
};
