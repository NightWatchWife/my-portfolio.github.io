# ポートフォリオサイト カスタマイズガイド

## 📁 ファイル構成

```
my-portfolio.github.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # メタデータ、フォント設定
│   │   └── page.tsx            # メインページ構成
│   ├── components/
│   │   ├── Hero.tsx            # ヒーローセクション（自己紹介）
│   │   ├── About.tsx           # 私についてセクション
│   │   ├── Projects.tsx        # プロジェクトセクション
│   │   ├── Skills.tsx          # スキルセクション
│   │   ├── Contact.tsx         # お問い合わせセクション
│   │   ├── Header.tsx          # ヘッダーナビゲーション
│   │   ├── Footer.tsx          # フッター
│   │   ├── ui/                 # 再利用可能なUIコンポーネント
│   │   └── common/             # 共通コンポーネント
│   └── styles/
│       └── globals.css         # グローバルスタイル
├── package.json                # 依存関係
├── next.config.js              # Next.js設定
└── README.md                   # プロジェクト説明
```

## 🎨 カスタマイズ方法

### 1. 基本情報の変更

#### **メタデータ・サイト情報**
**ファイル**: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
    title: 'My Portfolio',                    // ← サイトタイトル
    description: 'Welcome to my portfolio...', // ← サイト説明
    keywords: ['portfolio', 'developer', ...], // ← キーワード
    authors: [{ name: 'Your Name' }],         // ← あなたの名前
}
```

#### **ヘッダーロゴ**
**ファイル**: `src/components/Header.tsx`

```typescript
const LogoText = styled.h1`
    // ロゴのスタイル
`;

// 使用箇所
<LogoText>Portfolio</LogoText>  // ← ここを変更
```

### 2. ヒーローセクション（自己紹介）

**ファイル**: `src/components/Hero.tsx`

```typescript
// 名前・タイトル
<Title>Per mil<Subtitle>(NightWatchWife)</Subtitle></Title>
// ↑ ここを変更

// 自己紹介文
<Description>
    SESとして6年間、主にC#/.NETとOracleを用いた業務系Webアプリ開発を行ってきました。
    API連携、クラウドストレージ連携、Excelデータ処理の機能開発に強みがあります。
</Description>
// ↑ ここを変更

// 特徴カード
const features = [
    {
        icon: "💼",
        title: "業務系Webアプリ開発",
        description: "C#/.NETとOracleを使用した企業向けシステム開発の経験"
    },
    // ↑ この配列を変更
];
```

### 3. 私についてセクション

**ファイル**: `src/components/About.tsx`

```typescript
// プロフィール文
<ProfileText>
    6年間のSES経験を通じて、主にC#/.NETとOracleを使用した業務系Webアプリケーションの開発に従事してきました。
</ProfileText>
// ↑ この部分を変更

// 特徴・強み
const features = [
    {
        icon: "🎯",
        title: "問題解決力",
        description: "複雑な業務要件を分析し、効率的なソリューションを提案・実装"
    },
    // ↑ この配列を変更
];

// 目指すエンジニア像
<VisionText>
    技術力とコミュニケーション能力を兼ね備え、チーム全体の成長に貢献できるエンジニアを目指しています。
</VisionText>
// ↑ この部分を変更
```

### 4. プロジェクトセクション

**ファイル**: `src/components/Projects.tsx`

```typescript
// 主要プロジェクト
const featuredProjects = [
    {
        title: "業務効率化システム",
        description: "企業の業務プロセスを自動化し、生産性を向上させるWebアプリケーション。",
        technologies: ["C#", ".NET Framework", "Oracle", "JavaScript", "Bootstrap"],
        period: "2023年4月 - 2024年3月",
        icon: "⚡",
        featured: true,
        githubUrl: "https://github.com/per-mil/efficiency-system",
        liveUrl: "https://efficiency-system.example.com",
        category: "業務系Webアプリ"
    },
    // ↑ この配列を変更
];

// その他のプロジェクト
const otherProjects = [
    {
        title: "Excelデータ処理ツール",
        description: "大量のExcelデータを自動処理し、分析レポートを生成するツール。",
        technologies: ["C#", "VBA", "Excel", "SQLite"],
        period: "2023年1月 - 2023年6月",
        icon: "📊",
        featured: false,
        githubUrl: "https://github.com/per-mil/excel-processor",
        liveUrl: null,  // デモがない場合はnull
        category: "データ処理"
    },
    // ↑ この配列を変更
];
```

### 5. スキルセクション

**ファイル**: `src/components/Skills.tsx`

```typescript
// スキルカテゴリ
const skillCategories = [
    {
        category: "バックエンド開発",
        skills: ["C#", ".NET Framework", ".NET Core", "ASP.NET", "Web API"],
        level: 90,
        color: "blue" as const
    },
    // ↑ この配列を変更
];

// 資格
const certifications = [
    "Oracle Certified Associate (OCA)",
    "Microsoft Certified: Azure Developer Associate",
    // ↑ この配列を変更
];

// 学習中・アウトプット
const learning = [
    "TerraformによるIaC実践",
    "Kubernetesでのコンテナオーケストレーション",
    // ↑ この配列を変更
];
```

### 6. お問い合わせセクション

**ファイル**: `src/components/Contact.tsx`

```typescript
// 連絡先情報
const contactData = [
    {
        icon: "📧",
        title: "メール",
        value: "per.mil@example.com",  // ← ここを変更
        color: "blue" as const
    },
    {
        icon: "📍",
        title: "所在地",
        value: "東京都",  // ← ここを変更
        color: "green" as const
    },
    {
        icon: "📱",
        title: "電話",
        value: "080-XXXX-XXXX",  // ← ここを変更
        color: "purple" as const
    }
];

// SNS・リンク
const socialData = [
    {
        name: "GitHub",
        url: "https://github.com/per-mil",  // ← ここを変更
        icon: "🐙",
        bgColor: "#333",
        hoverColor: "#555"
    },
    // ↑ この配列を変更
];
```

### 7. フッター

**ファイル**: `src/components/Footer.tsx`

```typescript
// ブランド名
<BrandTitle>Portfolio</BrandTitle>  // ← ここを変更

// 説明文
<BrandDescription>
    フルスタック開発者として、最新の技術を活用して革新的なWebアプリケーションを開発しています。
    お気軽にご連絡ください。
</BrandDescription>
// ↑ この部分を変更

// 連絡先情報
<li>your.email@example.com</li>  // ← ここを変更
<li>+81 90-XXXX-XXXX</li>        // ← ここを変更
<li>東京都, 日本</li>            // ← ここを変更

// SNSリンク
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/yourusername",  // ← ここを変更
        icon: "🐙",
        bgColor: "#333",
        hoverColor: "#555"
    },
    // ↑ この配列を変更
];
```

## 🎯 カスタマイズのポイント

### **色の変更**
Styled Componentsで定義されている色を変更する場合：

```typescript
// 例：プライマリカラーを変更
const PrimaryColor = styled.div`
    color: #2563eb;  // ← この色コードを変更
`;
```

### **フォントの変更**
**ファイル**: `src/styles/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
/* ↑ フォントを変更する場合は、このURLを変更 */

body {
    font-family: 'Inter', sans-serif;  /* ← フォント名を変更 */
}
```

### **レイアウトの調整**
各コンポーネントのStyled Componentsで定義されている：

```typescript
const Container = styled.div`
    max-width: 1200px;  // ← コンテナの最大幅
    margin: 0 auto;
    padding: 0 1rem;    // ← 左右のパディング
`;
```

## 🚀 デプロイ方法

1. **GitHubにプッシュ**
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

2. **GitHub Pages設定**
   - GitHubリポジトリのSettings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - 保存

3. **アクセス**
   - `https://yourusername.github.io/my-portfolio.github.io`

## 📝 注意事項

- **画像の追加**: `public/` フォルダに画像を配置
- **リンクの確認**: すべてのリンクが正しく動作することを確認
- **レスポンシブ**: モバイル・タブレット・デスクトップで表示確認
- **SEO**: メタデータとキーワードを適切に設定

## 🎨 デザインのカスタマイズ

### **カラーパレット**
現在使用されている色：
- プライマリ: `#2563eb` (青)
- セカンダリ: `#10b981` (緑)
- アクセント: `#8b5cf6` (紫)
- テキスト: `#111827` (濃いグレー)
- 背景: `#f9fafb` (薄いグレー)

### **アニメーション**
ホバーエフェクトやトランジションは各コンポーネントで定義されています。

---

このガイドを参考に、あなたの情報に合わせてカスタマイズしてください！🎉 