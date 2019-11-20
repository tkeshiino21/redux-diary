---
path: "/post15/"
category: "other"
tags: ["test"]
title: "コミットメッセージ"
date: "2019-11-15T00:00:00.000Z"
summary: "commit -m そのあとは如何に"
images: [images/1.jpg]
---

## git commit -m "ここに何を書いたらいいのか問題に迫る"

人によってまちまちのコミットメッセージ　＝＞　困る
一定のルールをコミットメッセージに設けたら良いのではないか。

## それの何がおいしいのか？

個人開発で使うメリットとしては、git rebaseするときにどこまで戻ったらいいのかすぐわかるのがデカい。
チーム開発だったら、プロダクトの進捗がコミットを見れば、簡単に振り返羅れるようになるだろう。

## 提案：プレフィックスを加える

下記は[Angularのガイド](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type)ほぼ翻訳したもの、ちょっと補足もあり。

- feat: 新しい機能を付け加えたとき
- fix: バグを直したとき
- docs: (機能ではなく)単に文章を足しただけのとき
- style: ロジックに関わる部分ではなく、コードの見た目の問題を修正したとき
- refactor: バグ修正でも機能追加でもないコードの変更、要するにリファクタリングをしたとき
- perf: パーフォーマンス向上のためにコードを変更したとき
- test: REDの段階やGREENの段階のテストコードを追加したとき
- chore: ライブラリやツールを導入したとき

## 後書き

個人的にはfeatでミスとかが起こっている場合が多いから、featの前まで戻ることが多いかも。
この手法だと、新しいコードの追加と既存のコードの修正は、別々のコミットで行わなくてはいけないわけで、
したがって要所要所、いい感じのポイントでコミットが入れられる。

細かく分けすぎてもダメ、大きすぎるのもダメ。色々と難しいコミット。
まずは上記のルールを取り入れて、コミット力を上げてみてはいかがだろうか。

今日はここまで！