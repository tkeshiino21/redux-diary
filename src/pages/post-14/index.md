---
path: "/post14/"
category: "other"
tags: ["React"]
title: "Gatsbyでスライド！？"
date: "2019-11-12T00:00:00.000Z"
summary: "Gatsbyでスライドを作ったら捗った件"
images: [images/4.png]
---

## Gatsby でスライドを作りました

URL はこちら

[Gatsby スライド](https://nifty-clarke-475e15.netlify.com/1)

## Markdown 記法の設定方法

はじめに"markdownlint.json"というファイルを作り、
ルールを設定しておくとあとで随分と書きやすくなる。
当サイトの"markdownlint.json はちなみに下記のようになっている。

```{
    "no-inline-html": false,
    "MD013": false,
    "MD029": {
        "style": "ordered"
    },
    "MD036": false,
    "MD044": {
        "names": [
        "CommonMark",
        "Ctrl",
        "JavaScript",
        "Markdown",
        "markdownlint",
        "Node.js",
        "Shift",
        "Visual Studio Code"
        ]
    }
}
```

MD044 は辞書登録みたいなもので、例えば、"Markdown"を"m(小文字の m)arkdown"って書くと、
正しい名前じゃないですよ！とアラートを出してくれる。
ESLint の設定がややこしい人は、Markdown の lint から攻めてみるのも面白いかもしれない。

## Markdown 記法のおさらい

よく使うやつを下記に並べておきたい。

**「>」を使うと引用っぽくなる**

例：

> 引用っぽいテキスト

<br/>

**「- 」を使うとリストが作れる**

例：

- list
- list
- list

<br/>

**`[^1]`を使うと注釈が入れられる**

例：

テキスト[^1]
[^1]: 注釈内容

```

```
