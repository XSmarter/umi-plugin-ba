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
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?${code}";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
  `;
  };
  api.addHTMLHeadScript({
    content: 'var _hmt = _hmt || [];'
  });
  api.addHTMLScript({
    content: baTpl(opts.code)
  });
};