"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomeScreen),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "@skynexui/components"
var components_ = __webpack_require__(704);
;// CONCATENATED MODULE: ./dados.json
const dados_namespaceObject = JSON.parse('{"x":[{"id":"1","video":"https://www.youtube.com/embed/-6JwElEt49w","title":"Git e GitHub: Como subir meu primeiro projeto? Como versionar um projeto? #BaseDev #DevIniciante","content":"Você que ta dando seus primeiros passos como dev, chegou a hora de aprender a usar o GitHub pra guardar seus projetos! Nesse vídeo vamos juntos subir um projeto do ZERO, explicando passo a passo, lendo as mensagens pra você de hoje em diante usar pra sempre!","date":"21/01/2022"},{"id":"2","video":"https://www.youtube.com/embed/aDKxJfJiM28","title":"CSS-in-JS na prática! Criando componentes com React e CSS no NextJS","content":"Você ai já ouviu falar de CSS in JS correto? E se eu ti disser que nesse vídeo você vai ver na prática as vantagens e vai inclusive criar a base de uma lib? �  então senta ai na cadeira, pega a pipoca e vamo pro vídeo!","date":"14/01/2022"},{"id":"3","video":"https://www.youtube.com/embed/R41_Qedrzik","title":"Como documentar códigos? Documentando Front End com Storybook!","content":"Como você documenta seus códigos hoje? Nesse vídeo vou mostrar passo a passo como faço pra adicionar o storybook em um projeto, documentando um componente, gerando a doc interativa dele e muito mais! Mostrando ali o REAL camino das pedras pra você começar a usar em seus ","date":"08/01/2022"},{"id":"4","video":"https://www.youtube.com/embed/R41_Qedrzik","title":"Como documentar códigos? Documentando Front End com Storybook!","content":"Como você documenta seus códigos hoje? Nesse vídeo vou mostrar passo a passo como faço pra adicionar o storybook em um projeto, documentando um componente, gerando a doc interativa dele e muito mais! Mostrando ali o REAL camino das pedras pra você começar a usar em seus ","date":"08/01/2022"}]}');
;// CONCATENATED MODULE: ./pages/index.js




async function getStaticProps() {
    return {
        props: {
            posts: dados_namespaceObject.x
        }
    };
}
function HomeScreen({ posts  }) {
    const infos = {
        nome: 'Mario Souto',
        githubUser: 'omariosouto'
    };
    // const posts = dados.posts;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
        styleSheet: {
            flexDirection: 'column',
            margin: '32px auto',
            maxWidth: '800px',
            paddingHorizontal: '16px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Image, {
                src: `https://github.com/${infos.githubUser}.png`,
                styleSheet: {
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    margin: '0 auto',
                    border: '2px solid #F9703E'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                variant: "heading1",
                tag: "h1",
                styleSheet: {
                    color: '#F9703E',
                    justifyContent: 'center'
                },
                children: infos.nome
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Box, {
                styleSheet: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    marginTop: '16px',
                    gridGap: '16px'
                },
                children: posts.map(({ title , content , id  })=>/*#__PURE__*/ jsx_runtime_.jsx(Post, {
                        title: title,
                        content: content,
                        id: id
                    }, id)
                )
            })
        ]
    }));
};
function Post({ title , content , id  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
        styleSheet: {
            flexDirection: 'column',
            border: '1px solid #F9703E',
            padding: '16px',
            boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
            transition: '.3s',
            borderRadius: '4px',
            hover: {
                boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)'
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `posts/${id}`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                    tag: "a",
                    variant: "heading4",
                    styleSheet: {
                        display: ' block',
                        color: '#F9703E',
                        marginBottom: '8px'
                    },
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                children: [
                    content.substring(0, 140),
                    "..."
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 704:
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(767)));
module.exports = __webpack_exports__;

})();