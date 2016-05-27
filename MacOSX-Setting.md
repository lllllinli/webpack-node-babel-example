# MacOSX-Setting

##軟體安裝

+ iTerm2 - 終端機

[官網下載](https://www.iterm2.com/)

+ alfredapp - mac 應用程式快速呼叫

[官網下載](https://www.alfredapp.com/)

+ desh - document 工具

[官網下載](https://kapeli.com/dash)

##命令端安裝

+ homebrew - 套件管理工具

```
$ curl -L https://get.rvm.io | sudo bash -s stable
```

[官網下載](http://brew.sh/index_zh-tw.html)

+ wget - linux 安裝工具

```
$ brew install wget
```

+ rvm - ruby 版本控制

```
$ curl -L https://get.rvm.io | sudo bash -s stable
```

[官網下載](https://rvm.io/)

+ nodejs

[官網下載](https://nodejs.org/en/)

+ nvm - nodejs 版本管理工具

```
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```

[官網下載](https://github.com/creationix/nvm)

+ zsh - 指定 shell 為 zsh

```
$ chsh -s /bin/zsh # 設定為 default shell
```

+ oh my zsh - zsh 的套件包

讓 shell 有美美的顏色，快速完成等 plugin

```
$ sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
# weget 安裝
```

+ 更改 zsh 設定檔 .zshrc

檔案位置 ~/.zshrc


參考 ~/.oh-my-zsh 資料夾

  - 修改 ZSH 關鍵字
  ```
  export ZSH=${HOME}/.oh-my-zsh
  ```

  - 修改 theme 樣式
    ```
    ZSH_THEME="robbyrussell"
    # 檢查 themes 資料夾
    # https://github.com/robbyrussell/oh-my-zsh/wiki/themes
    ```

  - 加入 plugin

    ```
    plugins=(git bundler osx rake ruby)
    # 檢查 plugins 資料夾
    ```

+ zsh plugin 介紹

  1.zsh-completions 自動補全

##Vim 設定 (選配)

+ Vundle - Vim 套件管理工具

1.git clone

```
$ git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

2.在~/.vimrc 檔，添加。

```
vim +PluginInstall +qall
```


(官方Github)[https://github.com/VundleVim/Vundle.vim]
