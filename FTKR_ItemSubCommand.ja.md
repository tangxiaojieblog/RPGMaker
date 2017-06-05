[トップページに戻る](README.md)

# [FTKR_ItemSubCommand](FTKR_ItemSubCommand.js) プラグイン

アイテムボックスにサブコマンドを追加するプラグインプラグインです。

ダウンロード: [FTKR_ItemSubCommand.js](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemSubCommand.js)

# 目次

以下の項目の順でプラグインの使い方を説明します。
1. [サブコマンド](#サブコマンド)
* [プラグインの更新履歴](#プラグインの更新履歴)
* [ライセンス](#ライセンス)

# サブコマンド

当プラグインによりメニューのアイテム画面で、アイテム選択後にサブコマンドを追加します。

サブコマンドには以下のコマンドがあります。
1. 使う　 - アイテムを使用します。使用できない場合はグレー表示になります。
2. 捨てる - アイテムを捨てます。「大事なもの」は捨てることが出来ません。
3. やめる - サブコマンドを閉じます。

![画像](image/FTKR_ExItemBox/n06_002.png)

## 「捨てる」コマンド 
「捨てる」コマンドでアイテムを捨てるすることができます。
「捨てる」を実行すると、捨てるアイテムの数を設定します。

![画像](image/FTKR_ExItemBox/n06_001.png)

数を決めると確認画面を表示し、その画面で「実行する」を選択することで、アイテムを捨てることができます。

![画像](image/FTKR_ExItemBox/n06_003.png)

確認画面は、プラグインパラメータ`<Enable Confirmation>`で非表示設定にすることができます。

### タッチパネルの入力が有る場合 
捨てるアイテムの数を入力する画面に、タッチパネル用のボタンを表示します。

![画像](image/FTKR_ExItemBox/n06_004.png)

[目次に戻る](#目次)

# プラグインの更新履歴

| バージョン | 公開日 | 更新内容 |
| --- | --- | --- |
| [ver1.0.0](FTKR_ItemSubCommand.js) | 2017/06/04 | 初版公開 |

# ライセンス

本プラグインはMITライセンスのもとで公開しています。

[The MIT License (MIT)](https://opensource.org/licenses/mit-license.php)

#
[目次に戻る](#目次)

[トップページに戻る](README.md)