---
path: "/post17/"
category: "React"
tags: ["React"]
title: "FormikとYup"
date: "2019-11-16T00:00:00.000Z"
summary: "Reactでフォームを作る"
images: [images/3.jpeg]
---

## Formikとは

"Reactで入力フォームを作る"  
それは思いのほか手のかかることだ。
そこでFormikというライブラリの登場である。
まずは[公式サイト](https://jaredpalmer.com/formik/docs/overview)を見ていこう。  

---以下引用---

Reactでフォームを作ると本当に長ったらしいコードになっちまう。
さらに悪いことには、フォーム作成のためのライブラリのほとんどは、おかしな呪文みたいな余計なコードを含んでいるので、そのせいで大きくパフーマンスを悪化させることもある。Formikは違う。小さなライブラリでありながら、エンジニアをイラつかせかねない３つの要素について手助けしてくれる。

1. フォームのStateから値を取得する。
2. 値をチェックしてエラーメッセージを吐かせる。
3. 受け取った値を取り回す。

Formikは、この3つのロジックを一箇所にまとめて、すべてをすっきりとしたコードにしてくれる。Formikならテストコードも書けるし、リファクタリングもできる。そしてあなたのフォームをロジックのしっかりしたものにできる。それも単にできるんじゃなくて、楽勝でできるんだ！

--引用終了---

## 具体的な書き方

```<Formik
   initialValues={{ email: '', password: '' }}
   validate={values => {
     const errors = {};
     if (!values.email) {
       errors.email = 'Required';
     } else if (
       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
     ) {
       errors.email = 'Invalid email address';
     }
     return errors;
   }}
   onSubmit={(values, { setSubmitting }) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       setSubmitting(false);
     }, 400);
   }}
```

のような感じ。
記述量が減る。論理はまとまる。シンプルでクールなライブラリだ。
余談だけど、formikにしてもmoment.jsにしても有名どころのライブラリはとりあえず使っとくと、
おいしいことが多い。練習のためにはいいけど、いつもは自前のコードに拘らずに、積極的にライブラリを取り入れた方がむしろReactらしい書き方になるし、それもまた「Reactの流儀」というやつかもしれない。

## WHAT'S MORE?

Formikと相性のいい3rcParty製のバリデーションライブラリがある。formikの公式にも"We love soooo much Yup"と書いてあり、一緒に使っておくと間違いがないだろう。
Yupについても今度詳しく書きたいと思う。
以上！
