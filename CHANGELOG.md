# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.1.2] - 2025-01-13

### Fixed

**英語版の日本語残留テキストを完全修正**

英語版（`?lang=en`）に残っていた日本語テキストをすべて英語化しました。

#### 修正箇所

1. **Skills Section** - リスト項目を翻訳
   - 日本語版: AI開発ツール、技術記事執筆、CVW手法など
   - 英語版: Food & Cuisine, Q&A Writing, Human-AI Collaboration など

2. **Social Links Section** - カードタイトルと説明文を翻訳
   - ブログ → Blog (CVW Research & Practice)
   - note → note (Japanese Articles & Essays)
   - X (Twitter) → X (Twitter) (Tech Insights & Updates)
   - Quora → Quora (24,000+ Followers)
   - GitHub → GitHub (Code & Projects)

3. **Footer** - すべてのテキストを翻訳
   - ブランド説明: AI時代の創作研究者 → Cultural Bridge Builder
   - リンクタイトル: リンク → Links
   - SNSタイトル: SNS → Social
   - ナビゲーションリンク: すべて英語化（既存のnav_*キーを再利用）

#### 技術詳細

**JavaScript (`js/main.js`):**
```javascript
// 追加した翻訳キー（日本語版）
skill1_item1~4, skill2_item1~4, skill3_item1~4, skill4_item1~4
social_blog_title, social_blog_desc, social_note_title, social_note_desc
social_x_title, social_x_desc, social_quora_title, social_quora_desc
social_github_title, social_github_desc
footer_brand_desc, footer_links_title, footer_social_title

// 追加した翻訳キー（英語版）
同様のキー構造で英語テキストを追加
```

**HTML (`index.html`):**
- 全スキルリスト項目に `data-i18n` 属性追加（16個）
- 全ソーシャルカードのタイトル・説明に `data-i18n` 属性追加（10個）
- フッターの全テキスト要素に `data-i18n` 属性追加（8個）

**合計**: 34個の新しい翻訳キーを追加し、完全バイリンガル対応を達成

これにより、英語版（`?lang=en`）ですべてのテキストが適切に英語化されます。

---

## [1.1.1] - 2025-01-13

### Added

**AI開発ツール用ガイドラインの整備**

すべてのAI開発ツール（Claude Code, Codex CLI, Gemini CLI, Cursor等）で共通のルールを守るためのガイドラインファイルを追加しました。

#### 新規ファイル

1. **`AI_GUIDELINES.md`** - 全AIツール共通ガイドライン
   - CHANGELOG.md更新の必須ルール
   - バイリンガル運用ガイド
   - デプロイ前チェックリスト
   - コーディング規約
   - 各AIツールでの読み込み方法

2. **`.claude/claude.md`** - Claude Code専用ガイドライン
   - プロジェクト固有のルール
   - 変更履歴記録のルール
   - バイリンガルサイト運用方法
   - ファイル構造と参考資料

3. **`.cursorrules`** - Cursor AI専用ルール
   - CHANGELOG.md更新ルール（簡潔版）
   - バイリンガル対応の基本
   - 詳細ガイドラインへの参照

#### 最重要ルールの明文化

**「変更したら必ずCHANGELOG.mdを更新する」**

このルールをすべてのガイドラインファイルで強調し、どのAI開発ツールを使用しても一貫してCHANGELOG.mdが更新されるようにしました。

### Changed

**README.md の大幅改善**

- プロジェクトの詳細な説明を追加
- バイリンガル対応の説明
- AI開発ツール使用時の注意事項を追加
- プロジェクト構造の図解
- Quick Startガイド
- 技術スタック詳細
- デプロイ前チェックリスト
- リンク集

### Documentation

**各AIツールでのガイドライン参照方法:**

- **Claude Code**: `.claude/claude.md` を自動読み込み
- **Cursor**: `.cursorrules` を自動読み込み
- **Codex CLI**: プロジェクトルートの `AI_GUIDELINES.md` を参照
- **Gemini CLI**: 開始時に `AI_GUIDELINES.md` への参照を明示

**ファイル構成:**
```
portfolio/
├── AI_GUIDELINES.md       # 全AIツール共通（NEW）
├── CHANGELOG.md          # 変更履歴
├── README.md             # プロジェクト説明（大幅更新）
├── .claude/
│   └── claude.md         # Claude専用（NEW）
└── .cursorrules          # Cursor専用（NEW）
```

### Why This Matters

複数のAI開発ツールを使用する際、各ツールが異なるルールで動作すると：
- CHANGELOGの更新漏れが発生
- コーディング規約の不統一
- バイリンガル対応の片方だけ更新

この問題を解決するため、すべてのAIツールが同じルールに従うよう設定ファイルを整備しました。

---

## [1.1.0] - 2025-01-13

### Added - Comprehensive Bilingual Support

#### 🌐 Two Distinct Audience Strategies
実装した2つの異なるオーディエンス戦略：

**日本語版（デフォルト）**
- ターゲット: 日本のAI・技術愛好家
- プラットフォーム: X (1,264フォロワー), note (324フォロワー)
- コンテンツ戦略: AI時代の創作研究者、CVW研究・実践
- 強調ポイント: AI開発ツール（Gemini CLI, Cursor, Cline MCP, Codex CLI）

**英語版（NEW）**
- ターゲット: 日本文化に興味がある国際的なオーディエンス
- プラットフォーム: Quora (24,000フォロワー - PRIMARY)
- コンテンツ戦略: Cultural Bridge Builder、日本文化・食・アニメの専門家
- 強調ポイント: 24,000+ Quoraフォロワー、10M+総閲覧数、2.3M最高回答閲覧数

#### 🎨 HTML Changes (index.html)

**Head Section:**
- 言語alternatesタグ追加（ja, en, x-default）
- Open Graphタグ追加（JavaScript動的更新対応）

**Navigation:**
- 言語トグルボタン追加（日本語 | English）
- 全ナビゲーションリンクに`data-i18n`属性追加

**Hero Section:**
- `data-i18n`属性を追加（hero_description, hero_tagline, ボタンテキスト）
- 動的コンテンツ切り替え対応

**Stats Section（英語版専用）:**
```html
- 24,000+ Quora Followers
- 10M+ Total Views
- 60,000+ Total Upvotes
- 2.3M Top Answer Views
```
- `data-lang-only="en"`属性で表示制御

**About Section:**
- 全テキスト要素に`data-i18n`属性追加
- ロール、場所、専門分野、説明文を動的翻訳

**Skills Section:**
- セクションタイトルとスキルタイトルに`data-i18n`属性追加
- 英語版: "Areas of Expertise"に変更

**Achievements Section:**
- `data-lang-only="ja"`で日本語版のみ表示
- CVW研究の実績を強調

**Featured Quora Answers Section（英語版専用）:**
- 15個のトップQuora回答をカテゴリ別表示
  - 🍱 Japanese Food & Cuisine (6回答)
  - 🎌 Culture & Traditions (7回答)
  - 🎨 Anime & Pop Culture (1回答)
  - 📜 Japanese History (2回答)
  - 🌏 Other Topics (1回答)
- 各回答に閲覧数とアップボート数表示
- JavaScript動的生成

**Social Links:**
- Quoraリンクを国際版に変更（jp.quora.com → www.quora.com）
- セクションタイトルと説明文に`data-i18n`属性追加

#### 💻 JavaScript Changes (js/main.js)

**Translation System:**
```javascript
const translations = {
    ja: { /* 日本語翻訳データ */ },
    en: { /* 英語翻訳データ */ }
};
```
- 完全な日本語/英語翻訳オブジェクト
- ナビゲーション、Hero、About、Skills、Social全セクション対応

**Quora Answers Data:**
```javascript
const quoraAnswers = [ /* 15個の回答データ */ ];
```
- 質問、URL、閲覧数、アップボート数、カテゴリ
- カテゴリ: food, culture, anime, history, other

**Language Management Functions:**
- `getCurrentLang()`: URLパラメータから言語取得
- `updateContent(lang)`: コンテンツ動的更新
  - data-i18n要素の更新
  - HTML lang属性の更新
  - title & meta descriptionの更新
  - Open Graphタグの更新
  - 言語固有セクションの表示/非表示
  - 言語ボタンのアクティブ状態更新
- `initLanguageToggle()`: 言語切り替えボタンのイベントリスナー
- `loadQuoraAnswers()`: Quora回答のHTML生成と表示

**Initialization:**
- DOMContentLoadedで言語システム初期化
- 現在の言語を検出してコンテンツ更新
- 既存機能との統合

#### 🎨 CSS Changes (css/style.css)

**Language Toggle Styles:**
```css
.lang-toggle { /* ボタンコンテナ */ }
.lang-btn { /* 言語ボタン */ }
.lang-btn.active { /* アクティブ状態 */ }
.lang-separator { /* セパレーター */ }
```
- デスクトップ: ナビゲーション右側に配置
- モバイル: 絶対配置（top: 15px, right: 60px）

**Stats Section Styles:**
```css
.stats { /* 紫グラデーション背景 */ }
.stats-grid { /* グリッドレイアウト */ }
.stat-box { /* 統計ボックス */ }
```
- グラデーション背景: #667eea → #764ba2
- レスポンシブ対応（デスクトップ: 4列、タブレット: 2列、モバイル: 1列）

**Quora Answers Section Styles:**
```css
.quora-answers { /* セクションコンテナ */ }
.answer-category { /* カテゴリコンテナ */ }
.answers-grid { /* グリッドレイアウト */ }
.answer-card { /* 回答カード */ }
```
- カードホバーエフェクト（translateY、box-shadow）
- 閲覧数・アップボート表示スタイル
- "Read Answer"ボタンアニメーション
- レスポンシブ対応（デスクトップ: 350px最小幅、モバイル: 1列）

**Responsive Design:**
- タブレット（max-width: 768px）対応
- モバイル（max-width: 480px）対応
- 全セクションで最適なレイアウト

#### 🔧 Technical Features

**URL Parameter System:**
- `?lang=ja` → 日本語版
- `?lang=en` → 英語版
- パラメータなし → 日本語版（デフォルト）
- ナビゲーション間で言語状態を保持

**Dynamic Content Updates:**
- JavaScriptによるリアルタイム翻訳
- セクション表示/非表示の動的制御
- メタタグの動的更新

**SEO Optimization:**
- hreflangタグ（ja, en, x-default）
- Open Graphタグ（動的更新）
- 言語別のtitle & description

**Data Structure:**
- `data-i18n`: 翻訳対象要素のマーキング
- `data-lang-only`: 言語固有セクションの制御

#### 📊 Content Breakdown

**日本語版キーメッセージ:**
- "AI時代の創作研究者・技術系ライター"
- "技術と文学を橋渡しする新時代のクリエイター"
- CVW（Creative Vibe Writing）研究の先駆者

**英語版キーメッセージ:**
- "Cultural Bridge Builder | Japanese Culture Expert"
- "Explaining Japan to the World - 24K+ Quora Followers"
- "With over 24,000 followers on Quora and 10+ million total views"

**トップQuora回答（英語版）:**
1. ニンニクが日本料理で使われない理由 - 2.3M閲覧
2. 日本人が生卵を食べる理由 - 796.4K閲覧
3. アニメキャラクターが日本人に見えない理由 - 706.9K閲覧
4. 古代日本人が寄生虫を避けた方法 - 613.5K閲覧
5. 鉄の卵の用途 - 520.6K閲覧
... (全15回答)

#### 🎯 Key Success Metrics

実装により達成される目標:
- **24,000人の英語圏Quoraフォロワー**に文化コンテンツショーケース
- **1,600+日本人フォロワー**（X + note）にAI技術コンテンツ
- 両オーディエンスに適切なコンテンツ戦略
- 各プラットフォームへの明確な導線

### Changed

- Quoraリンクを日本版（jp.quora.com）から国際版（www.quora.com）に変更
- ナビゲーション構造の改善（言語トグル追加）

### Technical Details

**Files Modified:**
- `index.html` - HTML構造とdata-i18n属性追加
- `js/main.js` - 言語管理システムと翻訳データ追加
- `css/style.css` - 言語トグルとQuora Answersのスタイル追加

**Lines Changed:**
- HTML: +100行以上
- JavaScript: +350行
- CSS: +180行

**Commit:**
- Hash: 865bf70
- Message: "Add comprehensive bilingual support with distinct audience strategies"

---

## [1.0.0] - 2025-01-11

### Added
- Initial portfolio website
- Profile image integration
- Blog section featuring CVW research
- GitHub Pages deployment configuration
- Responsive design for all devices
- Navigation with smooth scrolling
- Hero section with animated background
- About section with profile details
- Skills showcase
- Achievements statistics
- Social links (Blog, note, X, Quora, GitHub)
- Footer with copyright information

### Technical Implementation
- HTML5 semantic structure
- CSS3 animations and transitions
- Vanilla JavaScript for interactivity
- Google Fonts (Noto Sans JP, Roboto Mono)
- Font Awesome icons
- Mobile-first responsive design
