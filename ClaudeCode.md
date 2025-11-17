# Claude Code 作業指示書：OpenPromptセクション追加

## 🎯 作業目的

hantaniのポートフォリオサイト（`index.html`）に、OpenPromptでのプロンプト投稿活動を紹介するセクションを追加する。

---

## 📋 作業概要

### 追加するコンテンツ

**OpenPromptプロフィール情報:**
- **プロフィールURL**: https://openprompt.jp/profile/garyo
- **ユーザー名**: garyo
- **肩書き**: 地方プログラマ
- **活動内容**: AIプロンプトの投稿とコミュニティへの貢献

### 挿入位置

`index.html`の「執筆活動（#social）」セクション内に、以下の順序で配置：

1. note（既存）
2. X (Twitter)（既存）
3. **OpenPrompt（新規追加）** ← ここ
4. Quora（既存）
5. GitHub（既存）

---

## 🛠️ 実装手順

### Step 1: HTMLセクションの追加

`index.html`の「執筆活動（#social）」セクション内、X (Twitter)の後、Quoraの前に以下のHTMLを挿入：

```html
<!-- OpenPrompt Card -->
<div class="platform-card" data-platform="openprompt">
    <div class="platform-header">
        <div class="platform-icon">
            <i class="fas fa-robot"></i>
        </div>
        <div class="platform-info">
            <h3>OpenPrompt</h3>
            <p class="platform-handle">@garyo</p>
        </div>
        <a href="https://openprompt.jp/profile/garyo" target="_blank" rel="noopener noreferrer" class="platform-link">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
    <div class="platform-stats">
        <div class="stat-item">
            <i class="fas fa-lightbulb"></i>
            <span data-i18n="openprompt_prompts">プロンプト投稿</span>
        </div>
        <div class="stat-item">
            <i class="fas fa-users"></i>
            <span data-i18n="openprompt_community">コミュニティ参加</span>
        </div>
    </div>
    <div class="platform-description">
        <p data-i18n="openprompt_description">
            実践的なAIプロンプトを投稿・共有。日常業務での活用事例や、
            効果的なプロンプトエンジニアリングのノウハウを発信しています。
        </p>
    </div>
    <div class="platform-highlights">
        <h4 data-i18n="openprompt_highlights_title">主な投稿テーマ</h4>
        <ul>
            <li data-i18n="openprompt_theme_1">🍜 AIを活用した地域情報検索（駅周辺のグルメ探し等）</li>
            <li data-i18n="openprompt_theme_2">💻 プログラミング支援プロンプト</li>
            <li data-i18n="openprompt_theme_3">✍️ 文章作成・校正支援プロンプト</li>
            <li data-i18n="openprompt_theme_4">🔧 業務効率化のための実践的プロンプト</li>
        </ul>
    </div>
</div>
```

### Step 2: 多言語対応（js/main.js）

`js/main.js`の`translations`オブジェクトに以下を追加：

**日本語版（ja）:**
```javascript
// OpenPrompt section
openprompt_prompts: 'プロンプト投稿',
openprompt_community: 'コミュニティ参加',
openprompt_description: '実践的なAIプロンプトを投稿・共有。日常業務での活用事例や、効果的なプロンプトエンジニアリングのノウハウを発信しています。',
openprompt_highlights_title: '主な投稿テーマ',
openprompt_theme_1: '🍜 AIを活用した地域情報検索（駅周辺のグルメ探し等）',
openprompt_theme_2: '💻 プログラミング支援プロンプト',
openprompt_theme_3: '✍️ 文章作成・校正支援プロンプト',
openprompt_theme_4: '🔧 業務効率化のための実践的プロンプト',
```

**英語版（en）:**
```javascript
// OpenPrompt section
openprompt_prompts: 'Prompt Contributions',
openprompt_community: 'Community Participation',
openprompt_description: 'Posting and sharing practical AI prompts. Publishing use cases in daily work and know-how of effective prompt engineering.',
openprompt_highlights_title: 'Main Topics',
openprompt_theme_1: '🍜 AI-powered local information search (restaurant finding near stations, etc.)',
openprompt_theme_2: '💻 Programming assistance prompts',
openprompt_theme_3: '✍️ Writing and proofreading assistance prompts',
openprompt_theme_4: '🔧 Practical prompts for work efficiency',
```

### Step 3: CSSスタイリング（css/style.css）

既存のプラットフォームカードスタイル（`.platform-card`）がそのまま適用されるため、**追加のCSS修正は不要**です。

ただし、OpenPrompt用のアクセントカラーを追加したい場合は、以下を`css/style.css`に追加：

```css
/* OpenPrompt specific styling */
.platform-card[data-platform="openprompt"] .platform-icon {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.platform-card[data-platform="openprompt"]:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}
```

---

## ✅ 作業完了チェックリスト

### 実装確認
- [ ] `index.html`にOpenPromptセクションを追加
- [ ] X (Twitter)とQuoraの間に正しく配置されている
- [ ] `js/main.js`に日本語・英語の翻訳を追加
- [ ] リンク（https://openprompt.jp/profile/garyo）が正しく動作する
- [ ] アイコン（Font Awesome）が正しく表示される

### 動作確認
- [ ] ブラウザでindex.htmlを開いて表示確認
- [ ] 日本語/英語の切り替えが正しく機能する
- [ ] レスポンシブデザイン（モバイル表示）が崩れていない
- [ ] ホバーエフェクトが適用されている
- [ ] 外部リンクが新しいタブで開く

### Git操作
- [ ] 変更をコミット
  ```bash
  git add index.html js/main.js css/style.css
  git commit -m "Add OpenPrompt section to portfolio

  - Add OpenPrompt card in social section
  - Add Japanese and English translations
  - Add OpenPrompt-specific styling
  - Link to profile: https://openprompt.jp/profile/garyo"
  ```
- [ ] GitHubにプッシュ
  ```bash
  git push origin main
  ```

---

## 📝 備考

### OpenPromptについて
- **サービス概要**: AIプロンプトの共有・発見プラットフォーム
- **hantaniの活動**: 実践的なプロンプトの投稿、コミュニティへの知見共有
- **特徴**: 日常業務での具体的な活用事例を重視

### デザイン方針
- 既存のプラットフォームカード（note, X, Quora, GitHub）と統一感を保つ
- アイコンはFont Awesomeの`fa-robot`を使用（AIプロンプトを象徴）
- カラーは紫系グラデーション（AI・テクノロジー感）

### 今後の拡張案
- プロンプト投稿数の表示（APIがあれば）
- 人気プロンプトのリンク追加
- いいね数・コメント数の表示

---

## 🔗 参考リンク

- **OpenPromptプロフィール**: https://openprompt.jp/profile/garyo
- **ポートフォリオサイト（Cloudflare）**: https://hantani-portfolio.pages.dev
- **ポートフォリオサイト（GitHub）**: https://garyohosu.github.io/portfolio
- **GitHubリポジトリ**: https://github.com/garyohosu/portfolio

---

**作成日**: 2025-11-17  
**作成者**: Genspark AI Agent  
**対象**: Claude Code（VS Code拡張機能）  
**目的**: ポートフォリオサイトへのOpenPromptセクション追加作業の指示書
