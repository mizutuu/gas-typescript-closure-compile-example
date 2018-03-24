/**
 * https://github.com/camelaissani/rollup-plugin-closure-compiler-js/blob/master/src/index.js
 */
import { compile } from 'google-closure-compiler-js';

export default function closure(flags = {}) {
    return {
        name: 'closure-compiler-js',
        transformBundle(code) {
            flags = Object.assign({
              createSourceMap: true,
              processCommonJsModules: true
            }, flags);
            flags.jsCode = [{
                src: code
            }];
            const output = compile(flags);
            if (output.errors && output.errors.length > 0) {
                throw new Error(`compilation error, ${output.errors.length} error${output.errors.length===0 || output.errors.length>1?'s':''}`);
            }
            return {code: output.compiledCode, map: output.sourceMap};
        }
    };
}