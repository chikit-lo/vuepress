(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{507:function(s,t,e){"use strict";e.r(t);var a=e(3),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("MySql问题在使用的过程中问题多多，试到过是版本问题的，也有的原因是配置没配好，反正就很折腾，我把遇到的问题及解决方案汇总如下")])]),s._v(" "),e("h4",{attrs:{id:"_1045-access-denied-for-user-root"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1045-access-denied-for-user-root"}},[s._v("#")]),s._v(" 1045 - Access denied for user 'root'@...")]),s._v(" "),e("p",[s._v("虚拟机上用docker安装的镜像，另一台主机连接该服务时报了权限问题，解决方法是赋权，开发时我给所有ip授权了，根据实际需要可以替换"),e("code",[s._v("%")]),s._v("为具体的ip：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql /bin/bash\nmysql -u root -p\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" grant all privileges on *.* to "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);