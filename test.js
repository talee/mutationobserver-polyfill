var observer = new MutationObserver(function() {});
observer.observe(document, {
  childList: true,
  subtree: true
});

var parser = new DOMParser();
var expectedContent = 'hello-world';
var result = parser.parseFromString('<div><![CDATA[' + expectedContent + ']]></div>','text/xml').firstChild.firstChild.data;
if (result != expectedContent) {
  alert('FAIL');
} else {
  alert('SUCCESS');
}
alert('result: ' + result);
