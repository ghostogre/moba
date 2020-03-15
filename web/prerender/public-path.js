const isPrerender = window.__PRERENDER_INJECTED__ === 'prerender'
// eslint-disable-next-line no-undef
__webpack_public_path__ = isPrerender ? '' : 'https://cdn.bootcss.com'
