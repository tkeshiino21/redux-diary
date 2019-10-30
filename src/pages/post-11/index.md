---
path: "/post-11/"
category: "Tools"
tags: ["ESLint","React"]
title: "ESLintってなに？"
date: "2019-11-05T00:00:00.000Z"
summary: "JSのLintterはとりあえずESLint"
images: ["images/1.jpg"]
---

## Lintterとは

>lintとは、詳細かつ厳密なチェックを行うプログラムである。 静的解析ツールとも呼ばれる。 コンパイラではチェックされないが、バグの原因になるような曖昧な記述についても警告される。(wikipediaより引用)

転ばぬ先の杖というか、エラーが起こる前に
「この辺、もっとしっかり書いておかないとあとで、大変なことになるかもよ！」
と教えてくれるちょっとお節介ですごく優しい奴である。

具体的には、下記のようなときに叱ってくれるらしい。

- 型の一致しない関数呼び出し
- 初期化されていない変数の参照がある
- 宣言されているが使われていない変数がある
- 同じ関数を参照しているが、戻り値を使う場合と使わない場合がある
- 関数が戻り値を返す場合と返さない場合がある

## ESLint

JSのLintにはJSLint, JSHint, JSCS, ESLintなどがあるらしい。
2019年10月現在、主流になりつつあるJSLintを使ってみたい。

## ReactにおけるESLintの設定

自分で設定を書いていく修羅の道もあるが、初心者はairbnbのルールを使うのが吉だ。  
npm i -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

それでも修羅の道を歩みたい人のために次のコマンドがある。  
npm install --save-dev eslint  
あとは。プロジェクトフォルダ直下に.eslintrc.jsonを作って編集していけばOK。
