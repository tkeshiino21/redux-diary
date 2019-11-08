---
path: "/post-11/"
category: "Tools"
tags: ["ESLint","React"]
title: "JAMStackって何なの問題に挑む"
date: "2019-11-05T00:00:00.000Z"
summary: "JAMStack、最近流行りのアーキテクチャーについて"
images: ["images/4.png"]
---

## JAMStackとは

そもそもJAMとは以下の頭文字を取ったものである。  
-JavaScript  
-APIs  
-Markup  
・・・とされているがこれは後付けのようでJAMという言葉の語感がよかったというのが本当のところのようである。
特定のツールというよりは、アーキテクチャーを指す言葉であり、
javaScriptでapiから取得したデータをもとにデプロイ時にHTMLを生成するWebサイトのことだ。

## で？っていう感

JavaScriptもAPIもMarkupも今更とりたてて新しいと喜ぶような技術ではない。
にも関わらず、なぜ今脚光を浴びて一種のトレンドとなりつつあるのか。

## 静的サイトジェネレータじゃねぇよっていう

「静的って呼ばないで。SPAみたいなめっちゃ動的なサイトも作れるやつですぜ。」
という主張が、これまでの静的サイトジェネレーターとは一線を画する部分である。
JAMstackのメリットとして、安全かつ速く動くことなどが挙げられるようだ。
本ブログもGatbyで作成されたJAMstackに近い構成のWebサイトだが、
割と速いし、wordpressのようにセキュリティ関連のアップデートを頻繁に行わなくて済むのが嬉しい。

より詳しく知りたい方は[qiitaの記事](https://qiita.com/ossan-engineer/items/4fe0e3e388f510bd5c68)を。
ではまた。
