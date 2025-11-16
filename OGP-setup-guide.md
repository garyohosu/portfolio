# OGP（SNSシェア対応）設定ガイド

**作成日**: 2025-11-16  
**対象サイト**: hantani ポートフォリオサイト

---

## ✅ 完了した作業

### 1. OG画像の作成
- **画像URL**: `https://www.genspark.ai/api/files/s/RSI3pD9j`
- **サイズ**: 1024x1024px（SNS推奨：1200x630px）
- **デザイン**: 
  - 「HANTANI」テキスト（大文字、白色）
  - ダークブルーからパープルへのグラデーション背景
  - 幾何学模様とテック系の抽象的要素
  - モダン、プロフェッショナルなスタイル

### 2. OGPタグの追加・改善

#### Open Graph（Facebook）タグ
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://hantani-portfolio.pages.dev/">
<meta property="og:title" content="hantani - AI時代の創作研究者">
<meta property="og:description" content="AI時代の創作研究者・技術系ライター・元組み込みプログラマー。CVW（Creative Vibe Writing）研究の先駆者として、人間とAIの協働による新しい創作手法を研究・実践。">
<meta property="og:image" content="https://hantani-portfolio.pages.dev/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="hantani - AI時代の創作研究者">
<meta property="og:site_name" content="hantani Portfolio">
<meta property="og:locale" content="ja_JP">
<meta property="og:locale:alternate" content="en_US">
```

#### Twitter Cardタグ
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@garyo">
<meta name="twitter:creator" content="@garyo">
<meta name="twitter:title" content="hantani - AI時代の創作研究者">
<meta name="twitter:description" content="AI時代の創作研究者・技術系ライター・元組み込みプログラマー。CVW（Creative Vibe Writing）研究の先駆者として、人間とAIの協働による新しい創作手法を研究・実践。">
<meta name="twitter:image" content="https://hantani-portfolio.pages.dev/images/og-image.jpg">
<meta name="twitter:image:alt" content="hantani - AI時代の創作研究者">
```

---

## 📋 次に行うべき作業

### 1. OG画像のアップロード（最優先）

OG画像は以下の場所にあります:
- **一時URL**: https://www.genspark.ai/api/files/s/RSI3pD9j

この画像を`images/og-image.jpg`としてリポジトリに追加してください。

### 2. 更新したindex.htmlの適用

`index.html`に以下の変更を適用してください:
- Open Graphタグの追加・改善
- Twitter Cardタグの追加
- SEOメタタグの追加
- canonical URLの設定

### 3. OGP設定のテスト

**テストツール**:
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator

---

## 💡 OGPの効果

### SNSシェア時の見栄え改善
- ✅ 魅力的な画像付きカードで表示
- ✅ タイトルと説明文が適切に表示
- ✅ クリック率（CTR）の向上

---

**最終更新**: 2025-11-16 13:57
