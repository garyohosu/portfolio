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

        // Skill 1 - AI Tools
        skill1_item1: 'Codex CLI',
        skill1_item2: 'Gemini CLI',
        skill1_item3: 'Cline MCP',
        skill1_item4: 'Cursor',

        // Skill 2 - Technical Writing
        skill2_item1: '技術記事執筆',
        skill2_item2: 'チュートリアル作成',
        skill2_item3: 'ドキュメント作成',
        skill2_item4: 'コンテンツ企画',

        // Skill 3 - CVW
        skill3_item1: '人間とAIの協働創作',
        skill3_item2: 'Creative Vibe Writing',
        skill3_item3: '新しい創作手法の研究',
        skill3_item4: '実践的手法の開発',

        // Skill 4 - Embedded Programming
        skill4_item1: '組み込みシステム開発',
        skill4_item2: '低レイヤープログラミング',
        skill4_item3: 'システム設計',
        skill4_item4: '技術的知見',

        // Achievements Section
        achievements_title: '実績',
        stat1_number: '24,000+',
        stat1_label: '総フォロワー数',
        stat2_number: '5',
        stat2_label: '活動プラットフォーム',
        stat3_number: '多数',
        stat3_label: '専門記事執筆',
        stat4_number: '先駆者',
        stat4_label: 'CVW手法研究',

        // Note Achievements Section
        note_achievements_title: 'note執筆実績',
        note_achievements_desc: '技術記事やAI研究の成果を発信',
        note_achievement_badge: '入賞',
        note_achievement_badge_premium: '有料記事',
        note_achievement1_title: 'OpenPromptコンテスト入賞',
        note_achievement1_subtitle: 'AIテキストを「人間味あふれる文章」に変えるプロンプト',
        note_achievement1_desc: 'けんすう氏主催のOpenPromptコンテストで入賞。AIが書いた文章を自然な人間らしい文体に変換するプロンプト技術が評価されました。',
        note_achievement1_award: 'OpenPrompt受賞作品',
        note_achievement2_title: '初の有料記事を公開',
        note_achievement2_subtitle: 'AIに自分のnoteを査定させてみた',
        note_achievement2_desc: 'Genspark AIブラウザを使用して、自身のnote記事を分析。有料記事としての適正価格をAIに提案させる実験的な取り組みを記事化しました。',
        note_achievement2_date: '2025年11月15日',
        note_achievement2_type: '有料記事',

        // Social Section
        social_title: '執筆活動・SNS',
        social_desc: '各プラットフォームで技術記事を発信しています',
        social_blog_title: 'ブログ',
        social_blog_desc: 'CVW研究と実践の記録',
        social_note_title: 'note',
        social_note_desc: '技術記事やエッセイを執筆',
        social_x_title: 'X (Twitter)',
        social_x_desc: '日々の技術的な発見を共有',
        social_quora_title: 'Quora',
        social_quora_desc: '24,000人以上のフォロワー',
        social_github_title: 'GitHub',
        social_github_desc: 'コードとプロジェクトを公開',

        // OpenPrompt section
        openprompt_prompts: 'プロンプト投稿',
        openprompt_community: 'コミュニティ参加',
        openprompt_description: '実践的なAIプロンプトを投稿・共有。日常業務での活用事例や、効果的なプロンプトエンジニアリングのノウハウを発信しています。',
        openprompt_highlights_title: '主な投稿テーマ',
        openprompt_theme_1: '🍜 AIを活用した地域情報検索（駅周辺のグルメ探し等）',
        openprompt_theme_2: '💻 プログラミング支援プロンプト',
        openprompt_theme_3: '✍️ 文章作成・校正支援プロンプト',
        openprompt_theme_4: '🔧 業務効率化のための実践的プロンプト',

        // Footer
        footer_brand_desc: 'AI時代の創作研究者',
        footer_links_title: 'リンク',
        footer_social_title: 'SNS',

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

        // Skill 1 - Japanese Culture
        skill1_item1: 'Food & Cuisine',
        skill1_item2: 'Traditions & Customs',
        skill1_item3: 'Daily Life Insights',
        skill1_item4: 'Cultural Context',

        // Skill 2 - Content Creation
        skill2_item1: 'Q&A Writing',
        skill2_item2: 'Cultural Explanations',
        skill2_item3: 'Engaging Storytelling',
        skill2_item4: 'Audience Engagement',

        // Skill 3 - AI Research
        skill3_item1: 'Human-AI Collaboration',
        skill3_item2: 'Creative Vibe Writing',
        skill3_item3: 'Methodology Development',
        skill3_item4: 'Practical Applications',

        // Skill 4 - Technical Background
        skill4_item1: 'Embedded Systems',
        skill4_item2: 'Low-level Programming',
        skill4_item3: 'System Architecture',
        skill4_item4: 'Technical Expertise',

        // Featured Answers Section (replaces Achievements)
        achievements_title: 'Featured Quora Answers',
        achievements_subtitle: 'Top 15 answers by views and engagement',

        // Note Achievements Section (Japanese version only, but translations provided)
        note_achievements_title: 'note Writing Achievements',
        note_achievements_desc: 'Publishing technical articles and AI research findings',
        note_achievement_badge: 'Winner',
        note_achievement_badge_premium: 'Premium Article',
        note_achievement1_title: 'OpenPrompt Contest Winner',
        note_achievement1_subtitle: 'Prompt that transforms AI text into "human-like writing"',
        note_achievement1_desc: 'Won the OpenPrompt contest hosted by Kensu. Recognized for a prompt technique that converts AI-generated text into natural, human-like writing.',
        note_achievement1_award: 'OpenPrompt Award Winner',
        note_achievement2_title: 'First Premium Article Published',
        note_achievement2_subtitle: 'Having AI evaluate my note articles',
        note_achievement2_desc: 'Used Genspark AI Browser to analyze my note articles. An experimental approach to have AI suggest appropriate pricing for premium articles.',
        note_achievement2_date: 'November 15, 2025',
        note_achievement2_type: 'Premium Article',

        // Social Section
        social_title: 'Connect With Me',
        social_desc: 'Follow my content across different platforms',
        social_blog_title: 'Blog',
        social_blog_desc: 'CVW Research & Practice',
        social_note_title: 'note',
        social_note_desc: 'Japanese Articles & Essays',
        social_x_title: 'X (Twitter)',
        social_x_desc: 'Tech Insights & Updates',
        social_quora_title: 'Quora',
        social_quora_desc: '24,000+ Followers',
        social_github_title: 'GitHub',
        social_github_desc: 'Code & Projects',

        // OpenPrompt section
        openprompt_prompts: 'Prompt Contributions',
        openprompt_community: 'Community Participation',
        openprompt_description: 'Posting and sharing practical AI prompts. Publishing use cases in daily work and know-how of effective prompt engineering.',
        openprompt_highlights_title: 'Main Topics',
        openprompt_theme_1: '🍜 AI-powered local information search (restaurant finding near stations, etc.)',
        openprompt_theme_2: '💻 Programming assistance prompts',
        openprompt_theme_3: '✍️ Writing and proofreading assistance prompts',
        openprompt_theme_4: '🔧 Practical prompts for work efficiency',

        // Footer
        footer_brand_desc: 'Cultural Bridge Builder',
        footer_links_title: 'Links',
        footer_social_title: 'Social',

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

// ========================================
// グローバル変数
// ========================================

const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ========================================
// ナビゲーション - スクロール時の背景変更
// ========================================

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// ========================================
// ハンバーガーメニュー
// ========================================

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // ボディのスクロールを制御
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

hamburger.addEventListener('click', toggleMobileMenu);

// ========================================
// ナビゲーションリンク - クリック時の処理
// ========================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // モバイルメニューを閉じる
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
        
        // スムーススクロール
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// アクティブなナビゲーションリンクのハイライト
// ========================================

function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const navbarHeight = navbar.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = section.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ========================================
// スクロールアニメーション
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // アニメーション対象要素
    const animatedElements = document.querySelectorAll(`
        .skill-card,
        .stat-card,
        .achievement-item,
        .social-card,
        .about-content
    `);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ========================================
// スクロールインジケーターのアニメーション
// ========================================

function handleScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
}

window.addEventListener('scroll', handleScrollIndicator);

// ========================================
// カードのホバーエフェクト（パララックス効果）
// ========================================

function initCardParallax() {
    const cards = document.querySelectorAll('.skill-card, .social-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ========================================
// スムーズスクロール（すべてのアンカーリンク）
// ========================================

function initSmoothScroll() {
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // 空のハッシュは無視
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// 数字のカウントアップアニメーション
// ========================================

function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const text = entry.target.textContent;
                
                // 数字のみを抽出
                const match = text.match(/[\d,]+/);
                if (match) {
                    const number = parseInt(match[0].replace(/,/g, ''));
                    const suffix = text.replace(match[0], '');
                    
                    if (!isNaN(number)) {
                        animateNumber(entry.target, 0, number, 2000, suffix);
                    }
                }
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateNumber(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        const formattedNumber = Math.floor(current).toLocaleString();
        element.textContent = formattedNumber + suffix;
    }, 16);
}

// ========================================
// 外部リンクの処理
// ========================================

function initExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        // すでにrel属性がある場合はスキップ
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// ========================================
// ページ読み込み時のアニメーション
// ========================================

function initPageLoadAnimation() {
    // ヒーローセクションのフェードイン
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
}

// ========================================
// リサイズ時の処理
// ========================================

let resizeTimer;
window.addEventListener('resize', () => {
    // リサイズ終了時のみ実行（パフォーマンス最適化）
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // デスクトップサイズに戻ったらモバイルメニューを閉じる
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }, 250);
});

// ========================================
// パフォーマンス最適化：スクロールイベントのスロットリング
// ========================================

function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// スクロールイベントをスロットリング
const throttledScroll = throttle(() => {
    handleNavbarScroll();
    highlightActiveSection();
    handleScrollIndicator();
}, 100);

window.addEventListener('scroll', throttledScroll);

// ========================================
// 初期化
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio site loaded successfully!');

    // 言語管理システムの初期化
    const currentLang = getCurrentLang();
    updateContent(currentLang);
    initLanguageToggle();

    // 各機能の初期化
    initScrollAnimations();
    initCardParallax();
    initSmoothScroll();
    animateNumbers();
    initExternalLinks();
    initPageLoadAnimation();

    // 初期状態の設定
    handleNavbarScroll();
    highlightActiveSection();
});

// ========================================
// ページ離脱前の処理
// ========================================

window.addEventListener('beforeunload', () => {
    // スクロール位置を保存（オプション）
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

// ページロード時にスクロール位置を復元（オプション）
window.addEventListener('load', () => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});
