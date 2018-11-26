window.onload = function() {
    document.getElementById('content').oncopy = event => {
        event.preventDefault(); // 取消默认的复制事件
        let textFont, copyFont = window.getSelection(0).toString();
        if (copyFont.length > 10) {
            textFont = copyFont + '\n\n'
                + '作者：xiaoweihuang\n'
                + '链接：'+ window.location.href +'\n'
                + '来源：前端农民工\n'
                + '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。';
        } else {
            textFont = copyFont;
        }
        if (event.clipboardData) {
            return event.clipboardData.setData('text', textFont);
        } else {
            // 兼容IE
            return window.clipboardData.setData("text", textFont);
        }
    }
}