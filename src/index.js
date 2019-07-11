export default (api, opts) => {
  if (process.env.NODE_ENV !== "production") {
    return false;
  }
  if (opts.judge && !opts.judge()) {
    return false;
  }
  api.log.success("insert baidu analytics");
  const baTpl = function(code) {
    return `
    (function(){ 
      if (!location.port) {
        (function (i, s, o, g, r, a, m) {
          i['BaiduAnalyticsObject'] = r;
          i[r] = i[r] || function () {
              (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
          a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//hm.baidu.com/hm.js?${code}', 'ba');
        ba = ba || [];
      }
    })();
  `;
  };
  api.addHTMLScript({
    content: baTpl(opts.code)
  });
};