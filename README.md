pot
===

Like a small bucket. Really tiny, in memory, KISS keystore for node.js.

Have you ever wanted to share a global variable across your program but didn't want to polute the `global` namespace?

On top of that, have you ever needed some configuration, instance variable or what have you all over your application and just found yourself repeating `requires` and constructors over and over again?

Those days are over. `pot` will solve your problem. No, not that kind. :)

Features
--------

- Getting/Setting the value of a key
- Namespaces: you can pass a string to the constructor, and that particular instance will only share keys with other instances using the same namespace
- Keys are stored in the Pot prototype, so as to be accessible application wide, but without the mess of global vars

Installation
------------

    npm install pot

Usage
-----

Simplest use case, require, get and set keys to your heart's content:

    var Pot = require('pot');
    var defaultPot = new Pot();

    defaultPot.get('a'); // undefined
    defaultPot
        .set('a', 1)
        .set('b', 2);
    defaultPot.get('a'); // 1
    defaultPot.del('a');
    defaultPot.get('a'); // undefined

Using namespaces:

    var potA = new Pot('A');
    var potB = new Pot('B');

    potA.set('x', 'hello');
    potB.get('x');          // undefined
    potA.get('x');          // 'hello'


You can even use it like this across different files, and the effect is the same.

If you need to, you can flush all the keys from a namespace with:

    var pot = new Pot('byebyenamespace');
    pot.flush();


License
-------

This software is available under the terms of the [MIT License](https://github.com/carlosdavidepto/pot/blob/master/LICENSE).

Bugs/Feature requests
---------------------

You gotta be kidding. There is no possibility in this universe of a software such as this to have any bugs. You are entitled, however, to at least try to prove me wrong. I hereby permit you to do that using the issue tracker or by sending an email to <carlosdavidepto@13brane.net>. xD

Message to our youth
--------------------

And remember kids, don't do drugs. :)
