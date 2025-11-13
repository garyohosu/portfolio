# Claude Code Project Guidelines

このプロジェクトでClaude Codeを使用する際のガイドラインです。

## 📝 変更履歴の記録

**重要**: プロジェクトに変更を加えた際は、必ず `CHANGELOG.md` に記録してください。

### ルール
- 機能追加、修正、変更はすべて `CHANGELOG.md` に記録する
- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) 形式に従う
- バージョン番号とリリース日を含める
- 変更内容を以下のカテゴリに分類：
  - `Added` - 新機能
  - `Changed` - 既存機能の変更
  - `Deprecated` - 非推奨になった機能
  - `Removed` - 削除された機能
  - `Fixed` - バグ修正
  - `Security` - セキュリティ関連

### 記録するタイミング
1. 新機能を実装したとき
2. バグを修正したとき
3. デザインや構造を大きく変更したとき
4. 依存関係を更新したとき
5. ユーザーに影響がある変更を行ったとき

## 🌐 バイリンガルサイトの運用

このサイトは日本語/英語のバイリンガル対応です。

### 言語切り替え
- URL パラメータ: `?lang=ja` (日本語) / `?lang=en` (英語)
- デフォルト: 日本語

### コンテンツ戦略
- **日本語版**: AI研究者・技術ライター向け（X, note読者）
- **英語版**: 日本文化専門家向け（Quora読者 24,000+）

### 翻訳の追加・修正
コンテンツを追加・修正する際は:
1. `js/main.js` の `translations` オブジェクトを更新
2. HTMLに `data-i18n` 属性を追加
3. 両言語でテストする

## 🚀 デプロイメント

### GitHub Pages
- メインブランチへのプッシュで自動デプロイ
- URL: https://garyohosu.github.io/portfolio/

### デプロイ前チェックリスト
- [ ] ローカルでテスト済み
- [ ] 両言語（日本語/英語）で動作確認
- [ ] レスポンシブデザイン確認（モバイル/タブレット/デスクトップ）
- [ ] リンク切れチェック
- [ ] CHANGELOG.md を更新

## 📁 ファイル構造

```
portfolio/
├── index.html          # メインHTML（data-i18n属性含む）
├── css/
│   └── style.css      # スタイル（言語トグル、Stats、Quora Answers含む）
├── js/
│   └── main.js        # JavaScript（翻訳システム、言語管理）
├── CHANGELOG.md       # 変更履歴（必ず更新）
├── README.md          # プロジェクト説明
└── .claude/
    └── claude.md      # このファイル
```

## 🎨 コーディング規約

### HTML
- セマンティックなタグを使用
- 翻訳が必要な要素には `data-i18n` 属性を追加
- 言語固有のセクションには `data-lang-only` 属性を追加

### CSS
- BEM命名規則を推奨
- モバイルファーストで設計
- カスタムプロパティ（CSS変数）を活用

### JavaScript
- ES6+ の構文を使用
- 関数には明確なコメントを追加
- 言語関連の変更は `translations` オブジェクトで管理

## 🔗 外部リンク

### Social Links
- Blog: https://garyohosu.github.io/
- note: https://note.com/hantani
- X (Twitter): https://x.com/garyo
- Quora: https://www.quora.com/profile/Hantani-Sadahiko (国際版)
- GitHub: https://github.com/garyohosu

## 💡 Tips

### 言語管理関数
- `getCurrentLang()` - 現在の言語を取得
- `updateContent(lang)` - コンテンツを指定言語に更新
- `initLanguageToggle()` - 言語トグルボタンを初期化
- `loadQuoraAnswers()` - Quora回答を動的に生成（英語版のみ）

### よく使う data-i18n キー
- `hero_description`, `hero_tagline` - ヒーローセクション
- `about_title`, `about_desc1`, `about_desc2` - About セクション
- `nav_*` - ナビゲーション
- `social_title`, `social_desc` - Social セクション

## 📚 参考資料

- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
