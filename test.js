if (chrome) browser = chrome;
browser.webRequest.onHeadersReceived.addListener(function(e) {
    for (header of e.responseHeaders) {
        if (header.name.toLowerCase() === 'content-disposition') {            
            console.log(header.value);
            let str = '英文3.torrent';
           // header.value = `attachment; filename="${str}"`; //Doesn't work
            header.value = `attachment; filename*=UTF-8''${encodeURIComponent(str)}`
        //    header.value = `attachment; filename="${unescape(encodeURIComponent(str))}"`; // Works
        }
    }	
	return {"responseHeaders": e.responseHeaders};
}, {urls: ["<all_urls>"]}, ['blocking', 'responseHeaders']);
