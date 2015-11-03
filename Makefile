.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: js
js:
	webpack --watch --progress -d js/app.jsx bundle/app.js --module-bind "jsx=babel"
	#babel --watch js/app.jsx --out-file bundle/app.js
.PHONY: minijs
minijs:
	webpack --progress -p js/app.jsx bundle/app.js --module-bind "jsx=babel"

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,bundle/app.js'

.PHONY: all
all:
	(make css & make js & make server & wait)

.PHONY: clean
clean:
	rm -r bundle
