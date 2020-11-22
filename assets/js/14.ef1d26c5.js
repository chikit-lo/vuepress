(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{505:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("使用SSH协议可以连接远程服务器和服务并向它们验证。利用SSH密钥可以连接GitHub，而无需在每次访问时提供用户名或密码。在部署VuePress到GitHub的时候踩坑了，报错信息是没有权限或者没有找到仓库，但仓库是建了的，所以是没有登陆权限，需要配置一下，这里我以MacOS为例")])]),s._v(" "),t("p",[s._v("报错信息如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("git@github.com: Permission denied "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("publickey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nfatal: Could not "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" from remote repository.\n\nPlease "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" sure you have the correct access rights\nand the repository exists.\n")])])]),t("h2",{attrs:{id:"_1-先检查一下电脑是否已经有ssh-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-先检查一下电脑是否已经有ssh-keys"}},[s._v("#")]),s._v(" 1.先检查一下电脑是否已经有SSH keys")]),s._v(" "),t("p",[s._v("在终端里面输入以下命令：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al ~/.ssh\n")])])]),t("p",[s._v("看看打印的结果是否包含有"),t("code",[s._v(".pub")]),s._v("后缀的文件，若没有，则进入第2步，若已存在，则跳到第3步")]),s._v(" "),t("h2",{attrs:{id:"_2-生成密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成密钥"}},[s._v("#")]),s._v(" 2.生成密钥")]),s._v(" "),t("h3",{attrs:{id:"_2-1-ssh-keygen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-ssh-keygen"}},[s._v("#")]),s._v(" 2.1 ssh-keygen")]),s._v(" "),t("p",[s._v("在终端输入以下命令，最后的参数是关联GitHub的邮箱：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-keygen -t rsa -b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<GitHub绑定的邮箱>"')]),s._v("\n")])])]),t("p",[s._v("然后一路回车：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Generating public/private rsa key pair.\nEnter "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/jacklo/.ssh/id_rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter passphrase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again: \nYour identification has been saved "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /Users/jacklo/.ssh/id_rsa.\nYour public key has been saved "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /Users/jacklo/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:Jf9jJTx7sopMzA2qT0FKIdLm/MEjxAPKFDhfxKUsLS0 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("312321720")]),s._v("@qq.com\nThe key's randomart image is:\n+---"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RSA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("----+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("+*ooo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("*.*"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oo           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(".OE+* "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("+o   + "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   o.o. S "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" o "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      o + "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     o o "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". o "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SHA256"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-----+\n\n")])])]),t("h3",{attrs:{id:"_2-2-将ssh-key添加至ssh-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-将ssh-key添加至ssh-agent"}},[s._v("#")]),s._v(" 2.2 将SSH key添加至ssh-agent")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在后台启动 ssh 代理")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-3-把密钥添加到ssh-agent的高速缓存中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-把密钥添加到ssh-agent的高速缓存中"}},[s._v("#")]),s._v(" 2.3 把密钥添加到ssh-agent的高速缓存中")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-add -K ~/.ssh/id_rsa\n")])])]),t("h2",{attrs:{id:"_3-将公钥保存到github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-将公钥保存到github"}},[s._v("#")]),s._v(" 3.将公钥保存到GitHub")]),s._v(" "),t("p",[s._v("打开id_rsa.pub文件，将内容复制以下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("view ~/.ssh/id_rsa.pub\n")])])]),t("p",[s._v("登陆GitHub->Settings->SSH and GPG keys->New SSH key，\n"),t("code",[s._v("Title")]),s._v("改一下，然后把控制台复制的内容粘贴到"),t("code",[s._v("Key")]),s._v("中，最后"),t("code",[s._v("Add SSH key")])]),s._v(" "),t("h2",{attrs:{id:"_4-测试连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试连接"}},[s._v("#")]),s._v(" 4.测试连接")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\nHi chikit-lo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" You've successfully authenticated, but GitHub does not provide shell access.\n")])])]),t("p",[s._v("终端打印类似信息即可，对于Windows或其他系统做法可能稍微有点差异，附上官方的解决方案："),t("a",{attrs:{href:"https://docs.github.com/cn/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 SSH 连接到 GitHub"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);