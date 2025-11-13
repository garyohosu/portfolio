# Portfolio - hantani

AI時代の創作研究者 hantani のバイリンガルポートフォリオサイト

🌐 **Live Site**: https://garyohosu.github.io/portfolio/

## 🌟 Features

- **バイリンガル対応** (日本語/英語)
  - 日本語版: AI研究者・技術ライター向け
  - 英語版: 日本文化専門家向け（Quora 24,000+ followers）
- **レスポンシブデザイン** (モバイル/タブレット/デスクトップ)
- **動的言語切り替え** (URLパラメータ: `?lang=ja` / `?lang=en`)
- **英語版限定コンテンツ**: Featured Quora Answers (15個のトップ回答)
- **日本語版限定コンテンツ**: CVW研究実績

## 🚀 Quick Start

### ローカル開発

```bash
# プロジェクトをクローン
git clone https://github.com/garyohosu/portfolio.git
cd portfolio

# ローカルサーバーを起動（Python）
python -m http.server 8000

# ブラウザで開く
open http://localhost:8000
```

### 言語切り替えのテスト

- 日本語版: http://localhost:8000/?lang=ja
- 英語版: http://localhost:8000/?lang=en

## 📁 Project Structure

```
portfolio/
├── index.html              # メインHTML（data-i18n属性含む）
├── css/
│   └── style.css          # スタイルシート
├── js/
│   └── main.js            # JavaScript（翻訳システム含む）
├── CHANGELOG.md           # 変更履歴（重要！）
├── AI_GUIDELINES.md       # AI開発ツール共通ガイドライン
├── README.md              # このファイル
├── .claude/
│   └── claude.md          # Claude Code専用ガイドライン
└── .cursorrules           # Cursor AI専用ルール
```

## 🤖 AI開発ツール使用時の注意

このプロジェクトでAI開発ツール（Claude Code, Cursor, Codex CLI, Gemini CLI等）を使用する場合は、以下のガイドラインを**必ず**参照してください：

### 📝 最重要ルール

**変更したら必ず `CHANGELOG.md` を更新してください！**

### ガイドライン参照

- **全AIツール共通**: [`AI_GUIDELINES.md`](./AI_GUIDELINES.md) を参照
- **Claude Code**: [`.claude/claude.md`](./.claude/claude.md) を参照
- **Cursor**: [`.cursorrules`](./.cursorrules) を参照

## 🌐 バイリンガル運用

### コンテンツ戦略

#### 日本語版（デフォルト）
- **ターゲット**: 日本のAI・技術愛好家
- **プラットフォーム**: X (1,264), note (324)
- **テーマ**: AI時代の創作研究者、CVW（Creative Vibe Writing）研究

#### 英語版
- **ターゲット**: 日本文化に興味がある国際オーディエンス
- **プラットフォーム**: Quora (24,000+ followers)
- **テーマ**: Cultural Bridge Builder、日本文化専門家

### 翻訳の追加・修正

1. `js/main.js` の `translations` オブジェクトを編集
2. HTMLに `data-i18n="key"` 属性を追加
3. 両言語でテスト
4. `CHANGELOG.md` を更新（忘れずに！）

## 🎨 Tech Stack

- **HTML5**: セマンティックマークアップ
- **CSS3**: カスタムプロパティ、グリッドレイアウト、アニメーション
- **JavaScript (Vanilla)**: ES6+、言語管理システム
- **Fonts**: Google Fonts (Noto Sans JP, Roboto Mono)
- **Icons**: Font Awesome 6.4.0
- **Hosting**: GitHub Pages

## 📝 Development Guidelines

### コーディング規約

- **HTML**: セマンティックタグ、アクセシビリティ考慮
- **CSS**: モバイルファースト、BEM命名規則推奨
- **JavaScript**: ES6+、明確なコメント

### デプロイ前チェックリスト

- [ ] ローカルでテスト済み
- [ ] 日本語版で動作確認
- [ ] 英語版で動作確認
- [ ] レスポンシブデザイン確認
- [ ] リンク切れチェック
- [ ] **CHANGELOG.md 更新済み**

## 🔗 Links

- **Live Site**: https://garyohosu.github.io/portfolio/
- **Blog**: https://garyohosu.github.io/
- **note**: https://note.com/hantani
- **X (Twitter)**: https://x.com/garyo
- **Quora**: https://www.quora.com/profile/Hantani-Sadahiko
- **GitHub**: https://github.com/garyohosu

## 📜 License

© 2025 hantani. All rights reserved.

## 📞 Contact

ポートフォリオや技術記事に関するお問い合わせは、各SNSのDMまたはコメントにてお願いします。
