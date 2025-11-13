# Portfolio Bilingual Support Implementation Guide

## 🎯 Objective
Add comprehensive bilingual support (Japanese/English) to the portfolio website with different content strategies for two distinct audiences.

---

## 📊 Two Distinct Audience Strategies

### Japanese Version (Default - Current Focus)
**Target Audience**: Japanese tech enthusiasts interested in AI tools  
**Platform Focus**: X (1,264 followers), note (324 followers)  
**Content Strategy**:
- AI時代の創作研究者
- Creative Vibe Writing (CVW) research & methodology
- AI development tools: Gemini CLI, Cursor, Cline MCP, Codex CLI
- Technical writing in Japanese community

**Key Stats to Emphasize**:
- Total followers: 25,588 across all platforms
- Quora mentioned but secondary
- Focus on CVW methodology and AI tools

### English Version (NEW - Cultural Bridge Builder)
**Target Audience**: International audience interested in Japanese culture  
**Platform Focus**: Quora (24,000 followers - PRIMARY)  
**Content Strategy**:
- Cultural Bridge Builder
- Japanese food, anime, culture, traditions expert
- Native perspective from Hiroshima, Japan
- AI researcher (secondary mention)

**Key Stats to Emphasize**:
- 24,000+ Quora followers
- 10M+ total views across all answers
- Top answer: 2.3M views
- 14,305 upvotes on most popular answer

---

## 🔧 Technical Implementation

### 1. URL Parameter Support
- `?lang=en` → English version
- `?lang=ja` or no parameter → Japanese version (default)
- Language persists when navigating within site

### 2. Visual Language Toggle
Add to navigation bar (between nav-menu and hamburger):

```html
<div class="lang-toggle">
    <button class="lang-btn active" data-lang="ja">日本語</button>
    <span class="lang-separator">|</span>
    <button class="lang-btn" data-lang="en">English</button>
</div>
```

**CSS for Language Toggle**:
```css
.lang-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
}

.lang-btn {
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.3s ease;
    font-family: inherit;
    padding: 5px 10px;
}

.lang-btn:hover {
    color: #2563eb;
}

.lang-btn.active {
    color: #2563eb;
    font-weight: 600;
}

.lang-separator {
    color: #ccc;
}

/* Mobile responsive */
@media (max-width: 768px) {
    .lang-toggle {
        position: absolute;
        top: 15px;
        right: 60px;
        font-size: 12px;
    }
}
```

---

## 📝 Content Structure

### JavaScript Language Data Structure

Add to `js/main.js`:

```javascript
// ========================================
// Language Management System
// ========================================

const translations = {
    ja: {
        // Navigation
        nav_home: 'ホーム',
        nav_about: 'プロフィール',
        nav_skills: 'スキル',
        nav_achievements: '実績',
        nav_social: '執筆活動',
        
        // Hero Section
        hero_description: 'AI時代の創作研究者・技術系ライター<br>元組み込みプログラマー',
        hero_tagline: '技術と文学を橋渡しする新時代のクリエイター',
        hero_btn_primary: 'もっと知る',
        hero_btn_secondary: '執筆活動を見る',
        
        // About Section
        about_title: 'プロフィール',
        about_role1: 'AI時代の創作研究者',
        about_role2: '技術系ライター',
        about_role3: '元組み込みプログラマー',
        about_location: '広島県在住',
        about_specialty_title: '専門分野',
        about_specialty_content: '<strong>Creative Vibe Writing（CVW）</strong>の研究・実践',
        about_desc1: '人間とAIの協働による新しい創作手法を研究・実践している。複数のプラットフォームで技術記事を発信し、Quoraで24,000人以上のフォロワーを持つ。技術と文学を橋渡しする新時代のクリエイターとして活動中。',
        about_desc2: '元組み込み系プログラマーとしての技術的バックグラウンドを活かし、Gemini CLI、Cline MCP、Cursor、Codex CLIなど最新のAI開発ツールに関する実践的な記事を多数執筆している。',
        
        // Skills Section
        skills_title: 'スキル',
        skill1_title: 'AI開発ツール',
        skill2_title: '技術ライティング',
        skill3_title: 'CVW手法',
        skill4_title: '組み込みプログラミング',
        
        // Achievements Section
        achievements_title: '実績',
        stat1_number: '24,000+',
        stat1_label: '総フォロワー数',
        stat2_number: '4',
        stat2_label: '活動プラットフォーム',
        stat3_number: '多数',
        stat3_label: '専門記事執筆',
        stat4_number: '先駆者',
        stat4_label: 'CVW手法研究',
        
        // Social Section
        social_title: '執筆活動・SNS',
        social_desc: '各プラットフォームで技術記事を発信しています',
        
        // Meta
        page_title: 'hantani - AI時代の創作研究者ポートフォリオ',
        page_description: 'AI時代の創作研究者・技術系ライター・元組み込みプログラマーのポートフォリオサイト。CVW（Creative Vibe Writing）研究の先駆者。'
    },
    
    en: {
        // Navigation
        nav_home: 'Home',
        nav_about: 'About',
        nav_skills: 'Expertise',
        nav_achievements: 'Featured Answers',
        nav_social: 'Connect',
        
        // Hero Section
        hero_description: 'Cultural Bridge Builder | Japanese Culture Expert<br>AI Researcher & Former Embedded Systems Programmer',
        hero_tagline: 'Explaining Japan to the World - 24K+ Quora Followers',
        hero_btn_primary: 'Learn More',
        hero_btn_secondary: 'View Answers',
        
        // About Section
        about_title: 'About Me',
        about_role1: 'Cultural Bridge Builder',
        about_role2: 'Japanese Culture Expert',
        about_role3: 'AI Researcher',
        about_location: 'Based in Hiroshima, Japan',
        about_specialty_title: 'Specialty',
        about_specialty_content: '<strong>Explaining Japanese Culture</strong> to Global Audiences',
        about_desc1: 'With over 24,000 followers on Quora and 10+ million total views, I share authentic insights about Japanese food, culture, anime, and daily life from a native perspective. My answers bridge cultural gaps and help international audiences understand the fascinating nuances of Japan.',
        about_desc2: 'Beyond cultural content, I also research Creative Vibe Writing (CVW) - a methodology for human-AI collaboration in creative work. As a former embedded systems programmer, I bring technical expertise to exploring AI development tools like Gemini CLI, Cursor, and Codex CLI.',
        
        // Skills Section (becomes Expertise)
        skills_title: 'Areas of Expertise',
        skill1_title: 'Japanese Culture',
        skill2_title: 'Content Creation',
        skill3_title: 'AI Research',
        skill4_title: 'Technical Background',
        
        // Featured Answers Section (replaces Achievements)
        achievements_title: 'Featured Quora Answers',
        achievements_subtitle: 'Top 15 answers by views and engagement',
        
        // Social Section
        social_title: 'Connect With Me',
        social_desc: 'Follow my content across different platforms',
        
        // Meta
        page_title: 'hantani - Cultural Bridge Builder & Japanese Culture Expert',
        page_description: '24,000+ Quora followers | Explaining Japanese culture, food, anime, and traditions to the world from Hiroshima, Japan. 10M+ total views.'
    }
};

// ========================================
// Quora Answers Data (English Version Only)
// ========================================

const quoraAnswers = [
    {
        question: "Why isn't garlic used in Japanese cuisine?",
        url: "https://www.quora.com/Why-isn-t-garlic-used-in-Japanese-cuisine/answer/Hantani-Sadahiko",
        views: "2.3M",
        upvotes: "2,647",
        category: "food"
    },
    {
        question: "How can people in Japan eat raw eggs in their rice? Don't they get salmonella?",
        url: "https://www.quora.com/How-can-people-in-Japan-eat-raw-eggs-in-their-rice-Dont-they-get-salmonella/answer/Hantani-Sadahiko",
        views: "796.4K",
        upvotes: "4,602",
        category: "food"
    },
    {
        question: "Why, in Japanese anime, do none of the characters look Japanese?",
        url: "https://www.quora.com/Why-in-Japanese-anime-do-none-of-the-characters-look-Japanese/answer/Hantani-Sadahiko",
        views: "706.9K",
        upvotes: "14,305",
        category: "anime"
    },
    {
        question: "How did the ancient Japanese avoid getting tapeworms when they consumed raw fish in the form of sashimi?",
        url: "https://www.quora.com/How-did-the-ancient-Japanese-avoid-getting-tapeworms-when-they-consumed-raw-fish-in-the-form-of-sashimi/answer/Hantani-Sadahiko",
        views: "613.5K",
        upvotes: "2,852",
        category: "food"
    },
    {
        question: "What is an iron egg used for?",
        url: "https://www.quora.com/What-is-an-iron-egg-used-for/answer/Hantani-Sadahiko",
        views: "520.6K",
        upvotes: "2,552",
        category: "food"
    },
    {
        question: "Why do the Japanese put towels on their heads?",
        url: "https://www.quora.com/Why-do-the-Japanese-put-towels-on-their-heads/answer/Hantani-Sadahiko",
        views: "439.9K",
        upvotes: "4,433",
        category: "culture"
    },
    {
        question: "What are the weirdest experiments performed throughout history?",
        url: "https://www.quora.com/What-are-the-weirdest-experiments-performed-throughout-history/answer/Hantani-Sadahiko",
        views: "424.7K",
        upvotes: "6,811",
        category: "other"
    },
    {
        question: "Why was Hirohito not executed after the surrender?",
        url: "https://www.quora.com/Why-was-Hirohito-not-executed-after-the-surrender/answer/Hantani-Sadahiko",
        views: "388.6K",
        upvotes: "2,434",
        category: "history"
    },
    {
        question: "Why do Samurai pop their sword with their thumb before unsheathing it?",
        url: "https://www.quora.com/Why-do-Samurai-pop-their-sword-with-their-thumb-before-unsheathing-it/answer/Hantani-Sadahiko",
        views: "358.6K",
        upvotes: "3,400",
        category: "history"
    },
    {
        question: "What is it about pigs that makes their meat so delicious? Is it their diet? Their lifestyle? What?",
        url: "https://www.quora.com/What-is-it-about-pigs-that-makes-their-meat-so-delicious-Is-it-their-diet-Their-lifestyle-What/answer/Hantani-Sadahiko",
        views: "356.0K",
        upvotes: "1,915",
        category: "food"
    },
    {
        question: "Is it true that in Japan many restaurants don't have an option to order food 'to go'?",
        url: "https://www.quora.com/Is-it-true-that-in-Japan-many-restaurants-don-t-have-an-option-to-order-food-to-go-and-hence-they-serve-more-or-less-exactly-the-right-portion-for-just-one-person-only-If-so-why-is-this/answer/Hantani-Sadahiko",
        views: "197.5K",
        upvotes: "2,063",
        category: "culture"
    },
    {
        question: "What is forbidden to do at a Japanese temple?",
        url: "https://www.quora.com/What-is-forbidden-to-do-at-a-Japanese-temple/answer/Hantani-Sadahiko",
        views: "100.5K",
        upvotes: "2,921",
        category: "culture"
    },
    {
        question: "Why does Japan have most of the oldest companies in the world?",
        url: "https://www.quora.com/Why-does-Japan-have-most-of-the-oldest-companies-in-the-world/answer/Hantani-Sadahiko",
        views: "82.8K",
        upvotes: "2,905",
        category: "culture"
    },
    {
        question: "What is normal in your country but weird in the rest of the world?",
        url: "https://www.quora.com/What-is-normal-in-your-country-but-weird-in-the-rest-of-the-world/answer/Hantani-Sadahiko",
        views: "72.7K",
        upvotes: "3,562",
        category: "culture"
    },
    {
        question: "Why did Japan follow the British system of driving on the left side and not the American system?",
        url: "https://www.quora.com/Why-did-Japan-follow-the-British-system-of-driving-on-the-left-side-and-not-the-American-system-of-driver-on-the-right-side/answer/Hantani-Sadahiko",
        views: "44.8K",
        upvotes: "2,318",
        category: "culture"
    }
];

// ========================================
// Language Management Functions
// ========================================

// Get current language from URL parameter
function getCurrentLang() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'ja';
}

// Update page content based on language
function updateContent(lang) {
    const t = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
    
    // Update title and meta description
    document.title = t.page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = t.page_description;
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.content = t.page_title;
    if (ogDesc) ogDesc.content = t.page_description;
    
    // Show/hide language-specific sections
    document.querySelectorAll('[data-lang-only]').forEach(el => {
        const targetLang = el.getAttribute('data-lang-only');
        el.style.display = targetLang === lang ? 'block' : 'none';
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // If English, load Quora answers
    if (lang === 'en') {
        loadQuoraAnswers();
    }
}

// Language toggle functionality
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = btn.getAttribute('data-lang');
            const url = new URL(window.location);
            url.searchParams.set('lang', targetLang);
            window.location.href = url.toString();
        });
    });
}

// Load and display Quora answers (English only)
function loadQuoraAnswers() {
    const container = document.getElementById('quora-answers-container');
    if (!container) return;
    
    // Categorize answers
    const categorized = {
        food: [],
        culture: [],
        anime: [],
        history: [],
        other: []
    };
    
    quoraAnswers.forEach(answer => {
        categorized[answer.category].push(answer);
    });
    
    // Category labels
    const categoryLabels = {
        food: '🍱 Japanese Food & Cuisine',
        culture: '🎌 Culture & Traditions',
        anime: '🎨 Anime & Pop Culture',
        history: '📜 Japanese History',
        other: '🌏 Other Topics'
    };
    
    // Build HTML
    let html = '';
    Object.entries(categorized).forEach(([category, answers]) => {
        if (answers.length === 0) return;
        
        html += `
            <div class="answer-category">
                <h3 class="category-title">${categoryLabels[category]}</h3>
                <div class="answers-grid">`;
        
        answers.forEach(answer => {
            html += `
                <a href="${answer.url}" target="_blank" rel="noopener noreferrer" class="answer-card">
                    <div class="answer-question">${answer.question}</div>
                    <div class="answer-stats">
                        <span class="stat-item">
                            <i class="fas fa-eye"></i> ${answer.views} views
                        </span>
                        <span class="stat-item">
                            <i class="fas fa-thumbs-up"></i> ${answer.upvotes} upvotes
                        </span>
                    </div>
                    <div class="answer-cta">
                        Read Answer <i class="fas fa-arrow-right"></i>
                    </div>
                </a>`;
        });
        
        html += `
                </div>
            </div>`;
    });
    
    container.innerHTML = html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLang();
    updateContent(currentLang);
    initLanguageToggle();
});
```

---

## 🎨 HTML Modifications

### 1. Add to `<head>` section:

```html
<!-- Language alternates for SEO -->
<link rel="alternate" hreflang="ja" href="https://garyohosu.github.io/portfolio/?lang=ja">
<link rel="alternate" hreflang="en" href="https://garyohosu.github.io/portfolio/?lang=en">
<link rel="alternate" hreflang="x-default" href="https://garyohosu.github.io/portfolio/">

<!-- Open Graph tags (will be updated by JavaScript) -->
<meta property="og:title" content="hantani - AI時代の創作研究者">
<meta property="og:description" content="AI時代の創作研究者・技術系ライター">
<meta property="og:type" content="website">
<meta property="og:url" content="https://garyohosu.github.io/portfolio/">
<meta property="og:image" content="https://garyohosu.github.io/portfolio/og-image.jpg">
```

### 2. Modify Navigation (add language toggle):

```html
<nav id="navbar">
    <div class="container">
        <div class="nav-brand">hantani</div>
        <ul class="nav-menu">
            <li><a href="#home" class="nav-link" data-i18n="nav_home">ホーム</a></li>
            <li><a href="#about" class="nav-link" data-i18n="nav_about">プロフィール</a></li>
            <li><a href="#skills" class="nav-link" data-i18n="nav_skills">スキル</a></li>
            <li><a href="#achievements" class="nav-link" data-i18n="nav_achievements">実績</a></li>
            <li><a href="#social" class="nav-link" data-i18n="nav_social">執筆活動</a></li>
        </ul>
        <!-- NEW: Language Toggle -->
        <div class="lang-toggle">
            <button class="lang-btn active" data-lang="ja">日本語</button>
            <span class="lang-separator">|</span>
            <button class="lang-btn" data-lang="en">English</button>
        </div>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>
```

### 3. Update Hero Section (add data-i18n attributes):

```html
<section id="home" class="hero">
    <div class="hero-background"></div>
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">
                <span class="hero-name">hantani</span>
                <span class="hero-subtitle">Hantani Sadahiko</span>
            </h1>
            <p class="hero-description" data-i18n="hero_description">
                AI時代の創作研究者・技術系ライター<br>
                元組み込みプログラマー
            </p>
            <div class="hero-tagline" data-i18n="hero_tagline">
                技術と文学を橋渡しする新時代のクリエイター
            </div>
            <div class="hero-cta">
                <a href="#about" class="btn btn-primary" data-i18n="hero_btn_primary">もっと知る</a>
                <a href="#social" class="btn btn-secondary" data-i18n="hero_btn_secondary">執筆活動を見る</a>
            </div>
        </div>
    </div>
    <div class="scroll-indicator">
        <div class="mouse">
            <div class="wheel"></div>
        </div>
        <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</section>
```

### 4. Add Stats Section (English only - insert after Hero):

```html
<!-- Stats Section - English Version Only -->
<section id="stats" class="stats" data-lang-only="en" style="display: none;">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-box">
                <div class="stat-icon"><i class="fab fa-quora"></i></div>
                <div class="stat-number">24,000+</div>
                <div class="stat-label">Quora Followers</div>
            </div>
            <div class="stat-box">
                <div class="stat-icon"><i class="fas fa-eye"></i></div>
                <div class="stat-number">10M+</div>
                <div class="stat-label">Total Views</div>
            </div>
            <div class="stat-box">
                <div class="stat-icon"><i class="fas fa-thumbs-up"></i></div>
                <div class="stat-number">60,000+</div>
                <div class="stat-label">Total Upvotes</div>
            </div>
            <div class="stat-box">
                <div class="stat-icon"><i class="fas fa-trophy"></i></div>
                <div class="stat-number">2.3M</div>
                <div class="stat-label">Top Answer Views</div>
            </div>
        </div>
    </div>
</section>
```

### 5. Update About Section (add data-i18n attributes):

Key elements to update with `data-i18n`:
- Section title: `data-i18n="about_title"`
- Role tags: `data-i18n="about_role1"`, `about_role2`, `about_role3`
- Location: `data-i18n="about_location"`
- Specialty content: `data-i18n="about_specialty_content"`
- Description paragraphs: `data-i18n="about_desc1"`, `about_desc2`

### 6. Keep Japanese Achievements Section, Add English Quora Answers:

```html
<!-- Achievements Section - Japanese Version Only -->
<section id="achievements" class="achievements" data-lang-only="ja">
    <!-- Keep existing content -->
</section>

<!-- Featured Quora Answers - English Version Only -->
<section id="quora-answers" class="quora-answers" data-lang-only="en" style="display: none;">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title" data-i18n="achievements_title">Featured Quora Answers</h2>
            <div class="section-divider"></div>
            <p class="section-description">Top 15 answers by views and engagement</p>
        </div>
        <div id="quora-answers-container">
            <!-- Will be populated by JavaScript -->
        </div>
    </div>
</section>
```

### 7. Update Social Links Section:

Modify Quora link to point to English version:
```html
<a href="https://www.quora.com/profile/Hantani-Sadahiko" target="_blank" rel="noopener noreferrer" class="social-card quora">
```
(Remove `jp.` from URL for international Quora profile)

---

## 🎨 CSS Additions

Add to `css/style.css`:

```css
/* ========================================
   Stats Section (English Version)
   ======================================== */
.stats {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 60px 0;
    color: white;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
}

.stat-box {
    text-align: center;
    padding: 20px;
}

.stat-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    opacity: 0.9;
}

.stat-number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1;
}

.stat-label {
    font-size: 1rem;
    opacity: 0.9;
    font-weight: 300;
}

/* ========================================
   Quora Answers Section (English Version)
   ======================================== */
.quora-answers {
    padding: 80px 0;
    background: #f8f9fa;
}

.answer-category {
    margin-bottom: 60px;
}

.answer-category:last-child {
    margin-bottom: 0;
}

.category-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: #1e293b;
    font-weight: 600;
}

.answers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
}

.answer-card {
    background: white;
    border-radius: 12px;
    padding: 25px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.answer-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border-color: #2563eb;
}

.answer-question {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 15px;
    line-height: 1.5;
    flex-grow: 1;
}

.answer-stats {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    color: #64748b;
    font-size: 0.9rem;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 5px;
}

.stat-item i {
    color: #94a3b8;
}

.answer-cta {
    margin-top: auto;
    color: #2563eb;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: gap 0.3s ease;
}

.answer-card:hover .answer-cta {
    gap: 12px;
}

.answer-card:hover .answer-cta i {
    transform: translateX(3px);
}

/* ========================================
   Responsive Design
   ======================================== */
@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .stat-number {
        font-size: 2rem;
    }
    
    .stat-label {
        font-size: 0.85rem;
    }
    
    .answers-grid {
        grid-template-columns: 1fr;
    }
    
    .category-title {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## ✅ Testing Checklist

After implementation, verify:

- [ ] **Default behavior**: Site loads in Japanese without parameter
- [ ] **Japanese version**: `?lang=ja` displays Japanese content correctly
- [ ] **English version**: `?lang=en` displays English content correctly
- [ ] **Language toggle**: Buttons switch language and update URL
- [ ] **Active state**: Current language button is highlighted
- [ ] **Stats section**: Only shows in English version
- [ ] **Quora answers**: Only show in English version
- [ ] **Achievements**: Only shows in Japanese version
- [ ] **Meta tags**: Title and description update correctly
- [ ] **Quora links**: Work and display properly
- [ ] **Mobile responsive**: Both versions work on mobile
- [ ] **Navigation**: All links work in both languages
- [ ] **Social links**: Quora link points to international profile in English

---

## 🚀 Deployment Steps

1. **Implement changes** using this guide
2. **Test locally** with all checklist items
3. **Commit to Git** with clear commit message
4. **Push to GitHub Pages**
5. **Update external links**:
   - Quora profile → `https://garyohosu.github.io/portfolio/?lang=en`
   - X profile → `https://garyohosu.github.io/portfolio/` (or `?lang=ja`)
   - note profile → `https://garyohosu.github.io/portfolio/` (or `?lang=ja`)

---

## 📌 Notes for Developer

- All text content is managed in the `translations` object for easy maintenance
- Use `data-i18n` attributes for dynamic content
- Use `data-lang-only` attributes for language-specific sections
- JavaScript handles all language switching logic
- URL parameter persists across navigation
- SEO-friendly with proper hreflang tags
- Mobile-responsive design maintained

---

## 🎯 Key Success Metrics

After deployment, the portfolio will effectively serve:
- **24,000 English-speaking Quora followers** with cultural content showcase
- **1,600+ Japanese followers** (X + note) with technical AI content
- Both audiences with appropriate content strategy
- Clear conversion path to respective platforms

---

**Ready to implement!** Pass this file to Claude Code or Codex CLI for execution.