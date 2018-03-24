import SubClass from './sub';
import { Some, SomeFunc } from './Some/Some';

// print main
console.log('main ts');

// print subclass
const sub = new SubClass();
sub.print('arg1');

// print someclass
const some = new Some();
const num = SomeFunc(1);
some.print(num);
