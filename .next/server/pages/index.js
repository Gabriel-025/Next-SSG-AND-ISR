"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ HomeScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(664);
/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(704);
/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);



async function getStaticProps() {
    const dadosDaAPI = await fetch(`https://fakeapi-omariosouto.vercel.app/api/posts/`).then((res)=>res.json()
    );
    const post = dadosDaAPI;
    return {
        props: {
            posts: post.posts
        },
        revalidate: 10 * 60
    };
}
function HomeScreen({ posts  }) {
    const infos = {
        nome: 'Gabriel Machado',
        githubUser: 'Gabriel-025'
    };
    // const posts = dados.posts;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
        styleSheet: {
            flexDirection: "column",
            margin: "32px auto",
            maxWidth: "800px",
            paddingHorizontal: "16px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {
                src: `https://github.com/${infos.githubUser}.png`,
                styleSheet: {
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    border: "2px solid #F9703E"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                variant: "heading1",
                tag: "h1",
                styleSheet: {
                    color: "#F9703E",
                    justifyContent: "center"
                },
                children: infos.nome
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
                styleSheet: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    marginTop: "16px",
                    gridGap: "16px"
                },
                children: posts.map(({ title , content , id ,  }, index)=>{
                    return index <= 50 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Post, {
                        title: title,
                        content: content,
                        id: id
                    }, id);
                })
            })
        ]
    }));
};
function Post({ title , content , id  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: `posts/${id}`,
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(678)));
module.exports = __webpack_exports__;

})();