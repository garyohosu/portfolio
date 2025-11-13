# AI Tools Project Guidelines

このプロジェクトで **すべてのAI開発ツール**（Claude Code, Codex CLI, Gemini CLI, Cursor等）を使用する際の共通ガイドラインです。

## 📝 最重要ルール: 変更履歴の記録

### 🔴 必須：CHANGELOG.md への記録

プロジェクトに**いかなる変更**を加えた場合、必ず `CHANGELOG.md` に記録してください。

#### 記録が必要な変更
- ✅ 新機能の追加
- ✅ 既存機能の修正・変更
- ✅ バグ修正
- ✅ デザイン変更
- ✅ 依存関係の更新
- ✅ リファクタリング
- ✅ パフォーマンス改善
- ✅ セキュリティ修正

#### 記録フォーマット

[Keep a Changelog](https://keepachangelog.com/en/1.0.0/) 形式に従ってください：

```markdown
## [バージョン] - YYYY-MM-DD

### Added
- 新しく追加された機能

### Changed
- 変更された既存機能

### Fixed
- 修正されたバグ

### Removed
- 削除された機能
```

#### 実行手順

1. 変更を実装
2. `CHANGELOG.md` を開く
3. 最新バージョンの下に変更内容を追加
4. コミットメッセージに変更内容を含める
5. プッシュ前に CHANGELOG が更新されているか確認

### ❌ やってはいけないこと

- CHANGELOG.md を更新せずにコミット・プッシュ
- 複数の変更をまとめて後から記録
- 変更内容を曖昧に記録
- バージョン番号や日付を省略

---

## 🌐 バイリンガルサイトの運用

このプロジェクトは日本語/英語のバイリンガル対応です。

### 言語システムの仕組み

- **URL パラメータ**: `?lang=ja` (日本語) / `?lang=en` (英語)
- **デフォルト**: 日本語
- **翻訳データ**: `js/main.js` の `translations` オブジェクト
- **HTML**: `data-i18n` 属性で翻訳対象を指定

### コンテンツ戦略

#### 日本語版（デフォルト）
- **ターゲット**: 日本のAI・技術愛好家
- **プラットフォーム**: X (1,264), note (324)
- **テーマ**: AI時代の創作研究者、CVW研究
- **強調**: AI開発ツール（Gemini CLI, Cursor, Cline MCP, Codex CLI）

#### 英語版
- **ターゲット**: 日本文化に興味がある国際オーディエンス
- **プラットフォーム**: Quora (24,000+ followers)
- **テーマ**: Cultural Bridge Builder、日本文化専門家
- **強調**: 24K+ followers, 10M+ views, Quora回答

### 翻訳の追加・修正手順

1. **js/main.js を編集**
   ```javascript
   const translations = {
       ja: {
           new_key: '日本語テキスト'
       },
       en: {
           new_key: 'English text'
       }
   };
   ```

2. **index.html に属性追加**
   ```html
   <element data-i18n="new_key">日本語テキスト</element>
   ```

3. **両言語でテスト**
   - `?lang=ja` でテスト
   - `?lang=en` でテスト

4. **CHANGELOG.md を更新** ⚠️ 忘れずに！

---

## 🚀 デプロイメント

### GitHub Pages 自動デプロイ

- **ブランチ**: main
- **URL**: https://garyohosu.github.io/portfolio/
- **トリガー**: main へのプッシュ

### デプロイ前チェックリスト

必ず以下を確認してください：

- [ ] ローカルでテスト済み
- [ ] 日本語版（`?lang=ja`）で動作確認
- [ ] 英語版（`?lang=en`）で動作確認
- [ ] モバイル表示確認
- [ ] タブレット表示確認
- [ ] デスクトップ表示確認
- [ ] リンク切れチェック
- [ ] **CHANGELOG.md を更新済み** ⚠️
- [ ] コミットメッセージが明確

---

## 📁 プロジェクト構造

```
portfolio/
├── index.html              # メインHTML
├── css/
│   └── style.css          # スタイルシート
├── js/
│   └── main.js            # JavaScript（翻訳システム含む）
├── CHANGELOG.md           # 変更履歴（必須更新）
├── AI_GUIDELINES.md       # このファイル（全AIツール共通）
├── README.md              # プロジェクト説明
└── .claude/
    ├── claude.md          # Claude Code専用ガイドライン
    └── settings.local.json
```

---

## 🎨 コーディング規約

### HTML

- セマンティックHTML5タグを使用
- アクセシビリティを考慮（alt属性、aria属性）
- 翻訳対象要素には `data-i18n="key"` を追加
- 言語固有セクションには `data-lang-only="ja|en"` を追加

### CSS

- モバイルファーストアプローチ
- CSS変数（カスタムプロパティ）を活用
- BEM命名規則を推奨
- レスポンシブデザイン必須

### JavaScript

- ES6+ の構文を使用
- 関数には明確なコメントを記載
- グローバル変数を避ける
- 言語管理は既存の `translations` オブジェクトを使用

---

## 🤖 AI Tool 別の設定ファイル

各AIツールは以下のファイルを参照します：

| AIツール | 設定ファイル |
|---------|------------|
| Claude Code | `.claude/claude.md` |
| Cursor | `.cursorrules` |
| Codex CLI | `AI_GUIDELINES.md`（このファイル） |
| Gemini CLI | `AI_GUIDELINES.md`（このファイル） |
| GitHub Copilot | コメント・README参照 |

### 各ツールでこのファイルを読み込む方法

#### Codex CLI
プロジェクトルートの `AI_GUIDELINES.md` を自動で読み込みます。

#### Gemini CLI
```bash
# プロジェクト開始時に明示的に参照
gemini "AI_GUIDELINES.mdの内容に従ってプロジェクトを進めてください"
```

#### Cursor
`.cursorrules` ファイルを作成し、このファイルへの参照を含めます：
```
@AI_GUIDELINES.md の内容に従ってください
```

---

## 🔗 外部リンク

### Social Media
- Blog: https://garyohosu.github.io/
- note: https://note.com/hantani
- X (Twitter): https://x.com/garyo
- Quora: https://www.quora.com/profile/Hantani-Sadahiko
- GitHub: https://github.com/garyohosu

---

## ⚠️ 重要な注意事項

### 絶対に守ること

1. **CHANGELOG.md は常に更新する**
2. 両言語でテストする
3. レスポンシブデザインを壊さない
4. 既存の翻訳システムを尊重する
5. コミット前にビルドエラーがないか確認

### やってはいけないこと

1. CHANGELOG.md を更新せずにコミット
2. 片方の言語だけ更新してもう片方を忘れる
3. `translations` オブジェクトの構造を壊す
4. ハードコードされたテキストを追加（data-i18nを使う）
5. プロダクションブランチに直接プッシュ

---

## 📚 参考資料

- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- [Semantic Versioning](https://semver.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 💡 質問がある場合

1. このファイル（`AI_GUIDELINES.md`）を再確認
2. `CHANGELOG.md` で過去の変更パターンを確認
3. `README.md` でプロジェクト概要を確認
4. コード内のコメントを参照

**記憶してください: 変更したら CHANGELOG.md を更新！**
