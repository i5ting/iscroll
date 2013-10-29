# iScroll 5

Documentation soon to come. In the meantime please reference to the examples in the demos directory.

## Build system (for developers only)

iScroll comes with a custom build system. The required nodejs packages are included in the package.json. To build all main releases just do:

	./build.js dist

The compiled scripts will be saved in the /build and /dist directories.

Script released under the MIT license.


## 自定义Indicator

iscroll5里内置了Indicator，但是它的移动有点怪，目前我还没有找到它移动的规律（主要是步长），所以我就在配置文件里增加新的配置项

```
this.options.on_page_changed(a);
```

此配置项只有在if(this.options.type == 'carousel')的时候有效。外部调用iscroll的时候可根据此on_page_changed方法来切换自定的Indicator。


```
myScroll = new IScroll('#carousel_wrapper', {
	scrollX: true,
	scrollY: false,
	momentum: false,
	snap: true,
	snapSpeed: 400,
	keyBindings: true,
	indicators: {
		el: document.getElementById('indicator'),
		resize: false,
		sizeRatioX:0.1
	},
	item_width:'95%',
	// wrapper_width:'95%',
	type:'carousel',
	on_page_changed:function(page){
		console.log('page := '+page);
	}
});
```