if (chrome) browser = chrome;
browser.webRequest.onHeadersReceived.addListener(function(e) {
    for (header of e.responseHeaders) {
        if (header.name.toLowerCase() === 'content-disposition') {
            console.log(header.value);
            let str = '英文3.torrent';
            // header.value = `attachment; filename="${str}"`; //Chrome only
            // header.value = `attachment; filename="${unescape(encodeURIComponent(str))}"`; //Firefox only
            header.value = `attachment; filename*=UTF-8''${encodeURIComponent(str)}` //Works for both
        }
    }
	return {"responseHeaders": e.responseHeaders};
}, {urls: ["<all_urls>"]}, ['blocking', 'responseHeaders']);
