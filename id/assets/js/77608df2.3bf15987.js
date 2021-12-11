"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4175],{6530:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/id/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/id","source":"@site/i18n/id/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Opsi konfigurasi Node-Modules dengan pnpm","description":"Ada banyak cara untuk membuat direktori nodemodules. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose nodemodules as well.","date":"2020-10-17T00:00:00.000Z","formattedDate":"17 Oktober 2020","tags":[],"readingTime":1.845,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"nextItem":{"title":"Flat node_modules bukan satu-satunya cara","permalink":"/id/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"Ada banyak cara untuk membuat direktori node_modules. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose node_modules as well.\\n\\n\x3c!--truncate--\x3e\\n\\n## Pengaturan standar\\n\\nBy default, pnpm v5 will create a semi-strict node_modules. Semi-strict means that your application will only be able to require packages that are added as dependencies to `package.json` (with a few exceptions). However, your dependencies will be able to access any packages.\\n\\nThe default configuration looks like this:\\n\\n```ini\\n; All packages are hoisted to node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; All types are hoisted to the root in order to make TypeScript happy\\npublic-hoist-pattern[]=*types*\\n\\n; All ESLint-related packages are hoisted to the root as well\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. The strictest configuration\\n\\npnpm supports [Yarn\'s Plug\'n\'Play](https://yarnpkg.com/features/pnp) since v5.9. With PnP, both your application and the dependencies of your application will have access only to their declared dependencies. This is even stricter then setting `hoist=false` because inside a monorepo, you\'re application will not be able to access even the dependencies of the root project.\\n\\nTo use Plug\'n\'Play, set these settings:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## A strict, traditional modules directory\\n\\nIf you are not ready to use PnP yet, you can still be strict and only allow packages to access their own dependencies by setting the hoist configuration to false:\\n\\n```ini\\nhoist=false\\n```\\n\\nHowever, if some of your dependencies are trying to access packages that they don\'t have in dependencies, you have two options:\\n\\n1. Create a `pnpmfile.js` and use a [hook](/pnpmfile) to add the missing dependency to the package\'s manifest.\\n\\n2. Add a pattern to the `hoist-pattern` setting. For instance, if the not found module is `babel-core`, add the following setting to `.npmrc`:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## The worst case - hoisting to the root\\n\\nSome tools might not work even with the default configuration of pnpm, which hoists everything to the root of the virtual store and some packages to the root. In this case, you can hoist either everything or a subset of dependencies to the root of the modules directory.\\n\\nHoisting everything to the the root of node_modules:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nHoisting only packages that match a pattern:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/id/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/id","source":"@site/i18n/id/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"Flat node_modules bukan satu-satunya cara","description":"Pengguna baru pnpm sering bertanya kepada saya tentang struktur aneh node_modules yang dibuat pnpm. Kenapa tidak flat? Di mana semua sub-dependensi?","date":"2020-05-27T00:00:00.000Z","formattedDate":"27 Mei 2020","tags":[],"readingTime":2.435,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"prevItem":{"title":"Opsi konfigurasi Node-Modules dengan pnpm","permalink":"/id/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"Pengguna baru pnpm sering bertanya kepada saya tentang struktur aneh `node_modules` yang dibuat pnpm. Kenapa tidak flat? Di mana semua sub-dependensi?\\n\\n\x3c!--truncate--\x3e\\n\\n> Saya akan berasumsi bahwa pembaca artikel sudah terbiasa dengan flat `node_modules` dibuat oleh npm dan Yarn. Jika Anda tidak mengerti mengapa npm 3 harus mulai menggunakan flat `node_modules` di v3, Anda dapat menemukan beberapa prasejarah di [Mengapa kita harus menggunakan pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\nJadi mengapa `node_modules` pnpm tidak biasa? Mari buat dua direktori dan jalankan `npm add express` di salah satunya dan `pnpm add express` di direktori lainnya. Inilah bagian atas dari apa yang Anda dapatkan di direktori pertama `node_modules`:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nAnda dapat melihat seluruh direktori [disini](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules).\\n\\nDan inilah yang Anda dapatkan di `node_modules` dibuat oleh pnpm:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\nAnda dapat memeriksanya [disini](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules).\\n\\nJadi di mana semua dependensinya? Hanya ada satu folder di `node_modules` bernama `.pnpm` dan symlink bernama `express`. Nah, kami hanya menginstal `express`, jadi itu adalah satu-satunya paket yang dapat diakses oleh aplikasi Anda\\n\\n> Baca lebih lanjut tentang mengapa keketatan pnpm adalah hal yang baik [disini](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\nMari kita lihat apa yang ada di dalam `express`:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n    .modules.yaml\\n```\\n\\n`express` tidak memiliki `node_modules`? Di mana semua dependensi `express`?\\n\\nTriknya adalah `express` hanyalah sebuah symlink. Saat Node.js menyelesaikan dependensi, ia menggunakan lokasi sebenarnya, sehingga tidak mempertahankan symlink. Tapi di mana lokasi sebenarnya dari `express`, Anda mungkin bertanya?\\n\\nDi sini: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nOke, jadi sekarang kita tahu tujuan dari folder `.pnpm/`. `.pnpm/` menyimpan semua paket dalam struktur folder datar, sehingga setiap paket dapat ditemukan dalam folder yang dinamai dengan pola ini:\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\nKami menyebutnya direktori virtual.\\n\\nStruktur datar ini menghindari masalah jalur panjang yang disebabkan oleh `node_modules` bersarang yang dibuat oleh npm v2 tetapi membuat paket tetap terisolasi tidak seperti `node_modules` datar yang dibuat oleh npm v3,4,5,6 atau Yarn v1.\\n\\nSekarang mari kita lihat lokasi sebenarnya dari `express`:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\nApakah itu penipuan? Masih kekurangan `node_modules`! Trik kedua dari struktur `node_modules` pnpm adalah bahwa dependensi paket berada pada tingkat direktori yang sama dengan lokasi sebenarnya dari paket dependen. Jadi dependensi `express` tidak ada di `.pnpm/express@4.17.1/node_modules/express/node_modules/` tetapi dalam [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules):\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\nSemua dependensi `express` adalah symlink ke direktori yang sesuai di `node_modules/.pnpm/`. Menempatkan dependensi `express` satu tingkat ke atas memungkinkan menghindari symlink melingkar.\\n\\nJadi seperti yang Anda lihat, meskipun struktur `node_modules` pnpm tampak tidak biasa pada awalnya:\\n\\n1. itu sepenuhnya kompatibel dengan Node.js\\n2. paket dikelompokkan dengan baik dengan dependensinya\\n\\nStrukturnya sedikit [lebih kompleks](/how-peers-are-resolved) untuk paket dengan dependensi rekan tetapi idenya sama: menggunakan symlink untuk membuat sarang dengan struktur direktori datar."}]}')}}]);