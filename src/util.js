//工具函数

import config from './config'

export function get(url) {
	return new Promise( (resolove,reject) => {
		wx.request({
			url: config.host+url,
			success:function(res) {
				if( res.data.code == 0 ) {
					resolove(res.data.data);
				} else {
					reject(res.data);
				}
			}
		})
	} )
}
