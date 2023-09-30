import{_ as t,r as a,o as d,c as r,b as e,d as i,e as n,a as s}from"./app-eff00c85.js";const u={},o=e("h6",{id:"一、下载nodejs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、下载nodejs","aria-hidden":"true"},"#"),i(" 一、下载nodejs")],-1),c={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},p=e("h6",{id:"二、安装nvm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二、安装nvm","aria-hidden":"true"},"#"),i(" 二、安装nvm")],-1),v={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,"打开终端 （ctrl+r，输入cmd）"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`nvm install 16.17.0
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])],-1),h=e("li",null,[e("p",null,"nvm -v 出现版本号代表安装成功")],-1),g=s(`<h6 id="三、安装vuepress" tabindex="-1"><a class="header-anchor" href="#三、安装vuepress" aria-hidden="true">#</a> 三、安装vuepress</h6><ul><li><p>安装完之后在终端输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g @vuepress-reco/theme-cli@1.0.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>==看准路径==（如桌面）在想放位置的空白处鼠标右击然后“在终端打开”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果出错复制，然后百度一下，会搜到一个指令set-executionpolicy。右键windos选择“终端(管理员)”输入指令set-executionpolicy，然后回原端口继续theme-cli init</li></ul></li><li><p>yes</p></li><li><p>输入名字</p></li><li><p>继续回车</p></li><li><p>选2.0回车</p><ul><li>若出现TIMEOUT（灰色的）挂梯子 ikuuu.art 免费的，左边“点击下载和教程”，安装完成后在文件夹里点卡图标，回到网页第二个一键导入巴拉巴拉，然后再执行一次theme-cli init</li></ul></li><li><p>然后会出现两个命令（两个白色的），先在终端cd......再......</p></li><li><p>然后输入一下指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>就构建成功了</p></li></ul><h6 id="四、安装git" tabindex="-1"><a class="header-anchor" href="#四、安装git" aria-hidden="true">#</a> 四、安装git</h6><ul><li><p>安装git，可以装c盘，最后一步一个也不勾选</p></li><li><p>配置git，打开终端，啥终端都行，建议桌面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name 用户名

git config --global user.password 密码

git config --global user.email 邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h6 id="五、仓库" tabindex="-1"><a class="header-anchor" href="#五、仓库" aria-hidden="true">#</a> 五、仓库</h6><ul><li><p>注册github账号： <a href="http%EF%BC%9A//github.com">github官网</a></p></li><li><p>选择 repositories ——&gt; 左边绿色的New</p></li><li><p>一个圆角的方框 Repository name *，仓库名[username].github.io，其他不用管。（[username]改成仓库名）</p></li><li><p>在刚刚创建的文件夹==根目录==里执行 npm run build</p><ul><li>这里的报警不影响</li></ul></li><li><p>然后进入&quot;.vuepress&quot;文件夹——&gt;进入“dist”文件夹，以下全部复制粘贴回车</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
git add -A
git commit -m &quot;deploy&quot;
git branch -M main
git remote add origin [git@github.com:Rooon-K/1.git这个要换成自己的路径]
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>路径查找教程：</li><li>打开GitHub，进入仓库，右边绿色的按钮 “&lt;&gt;Code”</li><li>随便选择一个，然后复制（若报错则换下一个）</li></ul></li></ul><h6 id="六、加速" tabindex="-1"><a class="header-anchor" href="#六、加速" aria-hidden="true">#</a> 六、加速</h6>`,7),b={href:"https://app.netlify.com/drop",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[e("p",null,"拉到最下面，最右边的选项，“log in”")],-1),_=e("li",null,[e("p",null,"Add new site——>import an.....——>Deploy with GitHub——>选ze——>拉到最下面蓝色的按钮"),e("ul",null,[e("li",null,"添加域名，中间的Domain settings，Add a domain，要钱")])],-1),f=e("li",null,[e("p",null,"在跟文件目录里建一个deploy.sh，选择记事本打开，输入以下全部内容，然后保存"),e("p",null,"==倒数第二行git@github.com:halfswweet/halfswweet.github.io.git部分记得换成自己的==（更换教程同上）")],-1),w=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./.vuepress/dist

# 如果是发布到自定义域名
# echo &#39;rooon-k.top&#39; &gt; CNAME
git init
git add -A
git commit -m &quot;deploy&quot;
git branch -M main
git remote add origin git@github.com:halfswweet/halfswweet.github.io.git
git push -f origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>——————————————<strong>一般到此结束</strong>——————————————</strong></p><ul><li><p>若有出错请继续一下步骤：</p></li><li><p>配密钥</p></li><li><p>github页面，头像，setting，SSH......，New SSH key，然后找密钥.shh文件夹</p></li><li><p>在dist文件终端里运行ssh-keygen -R github.com，然后会在.ssh文件夹里出来一个know_hosts.old文件</p></li><li><p>继续dist文件终端 ssh-keygen -t ed225519 -C &quot;你的邮箱&quot;</p></li><li><p>.ssh文件夹里就有密钥了，然后复制过去</p></li><li><p>Title 输入 rsa，下面为复制的密钥</p></li><li><p>就ok了</p></li></ul><h2 id="博客发布教程" tabindex="-1"><a class="header-anchor" href="#博客发布教程" aria-hidden="true">#</a> 博客发布教程</h2><ul><li><p>在文件夹空白处右键，打开终端，然后运行一下命令会出现本地网址。（在查看本地博客样式时，终端要一直保持打开状态）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>若想查看网络效果：在github仓库里选择setting，左边选择Pages，第一行蓝色的部分就是你的博客网址。</p></li><li><p>编辑完后若想同步在网络上：在根目录空白处，鼠标右击，显示更多选项，open git bush here，然后把deploy.sh文件拖进去，回车。</p></li><li><p>等待两分钟。</p></li></ul>`,5);function k(y,q){const l=a("ExternalLinkIcon");return d(),r("div",null,[o,e("ul",null,[e("li",null,[e("a",c,[i("nodejs官网"),n(l)]),i("（点击即可进入官网）")])]),p,e("ul",null,[e("li",null,[e("p",null,[e("a",v,[i("nvm下载"),n(l)]),i("（点击即可进入官网）———>选择nvm-setup.exe下载")])]),m,h]),g,e("ul",null,[e("li",null,[e("p",null,[i("netlify加速 ： "),e("a",b,[i("加速器官网"),n(l)])])]),x,_,f]),w])}const N=t(u,[["render",k],["__file","dajianboke.html.vue"]]);export{N as default};
