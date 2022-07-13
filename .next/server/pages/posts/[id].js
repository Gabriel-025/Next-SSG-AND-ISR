"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostByIdScreen),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "@skynexui/components"
var components_ = __webpack_require__(704);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/posts/[id].js




// dica dos paths estáticos
async function getStaticPaths() {
    // const dadosDaAPI = await fetch('https://fakeapi-omariosouto.vercel.app/api/posts')
    //   .then((res) => res.json());
    // const paths = dadosDaAPI.posts.map((postAtual) => {
    //   return { params: { id: `${postAtual.id}` } };
    // })
    return {
        // paths: paths,
        paths: [],
        fallback: 'blocking' // false or 'blocking'
    };
}
async function getStaticProps(context) {
    const id = context.params.id;
    console.log(`Gerou! ${id}`);
    const dadosDaAPI = await fetch(`https://fakeapi-omariosouto.vercel.app/api/posts/${id}`).then((res)=>res.json()
    );
    const post = dadosDaAPI;
    // const post = dados.posts.find((currentPost) => {
    //   if(currentPost.id === id) {
    //     return true;
    //   }
    //   return false;
    // })
    return {
        props: {
            id: post.id,
            title: post.title,
            date: post.date,
            content: post.content,
            video: post.video
        },
        revalidate: 60
    };
}
function PostByIdScreen(props) {
    const router = (0,router_namespaceObject.useRouter)();
    const post = {
        title: props.title,
        date: props.date,
        content: props.content,
        video: props.video
    };
    if (router.isFallback) {
        return 'Essa p\xe1gina n\xe3o existe, ainda!!';
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
        styleSheet: {
            flexDirection: "column",
            margin: "32px auto",
            maxWidth: "700px",
            paddingHorizontal: "16px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                variant: "heading2",
                tag: "h1",
                styleSheet: {
                    color: "#F9703E",
                    justifyContent: "center",
                    lineHeight: "1.2",
                    cursor: "pointer"
                },
                children: post.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                styleSheet: {
                    color: "#F9703E",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #F9703E",
                    paddingVertical: "16px",
                    marginVertical: "16px"
                },
                children: [
                    post.date,
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/fullpost",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                            tag: "a",
                            styleSheet: {
                                color: "#F9703E",
                                hover: {
                                    textDecoration: "underline",
                                    cursor: "pointer"
                                }
                            },
                            children: "Voltar para posts"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                            tag: "a",
                            styleSheet: {
                                color: "#F9703E",
                                hover: {
                                    textDecoration: "underline",
                                    cursor: "pointer"
                                }
                            },
                            children: "Voltar para a home"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
                styleSheet: {
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                        children: post.content
                    }),
                    post.video && /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                        style: {
                            marginTop: "32px",
                            minHeight: "400px"
                        },
                        src: post.video
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Box, {
                styleSheet: {
                    marginTop: "16px",
                    paddingVertical: "16px",
                    borderTop: "1px solid #F9703E",
                    color: "#F9703E"
                }
            })
        ]
    }));
};


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(806)));
module.exports = __webpack_exports__;

})();