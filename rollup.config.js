import gccjs from './rollup-plugins/rollup-plugin-google-closure-compiler-js';

export default {
    input: 'build/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        gccjs({
            compilationLevel: 'SIMPLE',
            warningLevel: 'VERBOSE',
            outputWrapper: 'function main () { %output% }'  // <- wrapper gas entry function
            // other flags see: https://github.com/google/closure-compiler-js#flags
        })
    ]
};