---
path: "/post-5/"
category: "React"
tags: ["React", "TypeScript"]
title: "ReactScript"
date: "2019-10-30T00:00:00.000Z"
summary: "TypeScriptことはじめ"
images: ["images/1.jpg"]
---

## TypeScriptって何

「この中にTypeScriptができるものはおるか？」

A　「できません。」  
B　「できません。」  
C　「できません。」  

「ではこれをみなさい」

"const boolean = 5"

A　「？」
B　「？？」
C　「うわぁぁぁぁぁ」

「いたぞ！連れていけ」

## 型定義しようという話

JavaScriptは型のユルい言語です。
これは数字が入るとこですよ、yes/Noのしか入らないとこですよ
って決めるルールが甘いということです。
何でも入れられるから自由っちゃ自由なんですが、
大規模な開発となると、この自由さのせいでバグが生まれたり、
メンテが大変になったりするようです。
そこで、JavaScriptにしっかり型を持たせようっていうのがTypeScript。
JavaScriptのスーパセットといって上位互換です。

## ReactTypeScript

１.まず下のように入れてTypescriptを導入します。
$ npm i typescript ts-loader --save-dev
2.次にReactのプロジェクトを開始します。
$ npm i @types/{react,react-dom} --save-dev
基本のセットアップはこれだけ。
あとは、型定義をゴリゴリ書いていきます。
今日はここまで！
