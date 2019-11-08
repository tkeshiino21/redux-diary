---
path: "/post-6/"
category: "React"
tags: ["emotion","styled-component","CSSinJS"]
title: "CSSinJSことはじめ"
date: "2019-10-30T00:00:00.000Z"
summary: "Reactのスタイリングをどうやるか？"
images: ["images/3.jpeg"]
---

## Reactのスタイリングをどうやるか問題

Reactで作ったWebにどうやってデザインを適用していくかという手法については、いろいろなやり方がある。
下記はその一例だ。

-a 普通にCSSを使う
-b Sass(またはless)を使う
-c CSSinJSを使う

GitHubで偉い人のコードを見ていても、これ！という決定版がないように思える。
それぞれにそれぞれの長所があるので、とりあえずは気に入ったものを使うといいだろう。

## CSSinJSとは

まず、CSSとJSを一緒のファイルで書こうよという話である。
少しでもプログラミングをやったことがある人なら、
「えっそれは邪道なんじゃないの？」と思うかもしれない。
コーディングでもHTMLとCSSは別ファイルに、というのが基本だ。
しかし、JSとCSS一緒のファイルにしてみるとこれがなかなか便利である。
なぜならJSはComponentに分けられるから。

## 主なCSSinJS

JSでCSSを書こうとすると結構面倒臭い。
具体的には、CSSが下のような感じになる。
-a font-size →　fontSize
-b none →　'none'
-c 12px; →　'12px'
慣れないうちはこれがよく書き間違えるし、CSSに慣れた人ほど書きづらい。
そこで、CSSinJSのライブラリを使おう。
人気のあるのは、"emotion"と"styled-component"の２強である。
どっちもええかなり良い。
バッククォーと（``）で囲むことでCSSと同じ記法でJS内に書くことができる。
Mixinとかsassっぽい機能もあるのが大変嬉しい。

Reactでのスタイリングに迷った方はぜひ
"styled-component"を試してみてほしい。
今日はここまで！
