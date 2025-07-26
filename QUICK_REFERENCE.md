# 🚀 ポートフォリオサイト クイックリファレンス

## 📝 必須変更項目

### 1. **基本情報** (`src/app/layout.tsx`)
```typescript
export const metadata: Metadata = {
    title: 'あなたの名前 - Portfolio',           // ← 変更
    description: 'あなたの説明文',               // ← 変更
    authors: [{ name: 'あなたの名前' }],        // ← 変更
}
```

### 2. **名前・自己紹介** (`src/components/Hero.tsx`)
```typescript
<Title>あなたの名前<Subtitle>(ハンドルネーム)</Subtitle></Title>
<Description>あなたの自己紹介文</Description>
```

### 3. **連絡先** (`src/components/Contact.tsx`)
```typescript
const contactData = [
    {
        title: "メール",
        value: "your.email@example.com",    // ← 変更
    },
    {
        title: "所在地", 
        value: "あなたの所在地",            // ← 変更
    },
    {
        title: "電話",
        value: "あなたの電話番号",          // ← 変更
    }
];
```

### 4. **SNSリンク** (`src/components/Contact.tsx`)
```typescript
const socialData = [
    {
        name: "GitHub",
        url: "https://github.com/yourusername",  // ← 変更
    },
    {
        name: "LinkedIn", 
        url: "https://linkedin.com/in/yourusername", // ← 変更
    },
    // 必要に応じて追加・削除
];
```

## 🎯 推奨変更項目

### **プロジェクト実績** (`src/components/Projects.tsx`)
```typescript
const featuredProjects = [
    {
        title: "あなたのプロジェクト名",
        description: "プロジェクトの説明",
        technologies: ["使用技術1", "使用技術2"],
        period: "期間",
        githubUrl: "GitHubのURL",
        liveUrl: "デモのURL", // ない場合はnull
    }
];
```

### **スキル** (`src/components/Skills.tsx`)
```typescript
const skillCategories = [
    {
        category: "得意分野",
        skills: ["スキル1", "スキル2", "スキル3"],
        level: 90, // 0-100の数値
        color: "blue" // "blue", "green", "purple"
    }
];
```

### **資格・学習** (`src/components/Skills.tsx`)
```typescript
const certifications = [
    "取得資格1",
    "取得資格2",
];

const learning = [
    "学習中の技術1",
    "学習中の技術2",
];
```

## 🎨 デザインカスタマイズ

### **色の変更**
```typescript
// プライマリカラー（青）
color: #2563eb;

// セカンダリカラー（緑）  
color: #10b981;

// アクセントカラー（紫）
color: #8b5cf6;
```

### **フォントの変更** (`src/styles/globals.css`)
```css
@import url('https://fonts.googleapis.com/css2?family=あなたのフォント:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'あなたのフォント', sans-serif;
}
```

## 📱 レスポンシブ対応

- **モバイル**: 768px以下
- **タブレット**: 768px-1024px  
- **デスクトップ**: 1024px以上

## 🚀 デプロイ手順

1. **変更をコミット**
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

2. **GitHub Pages設定**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - 保存

3. **アクセス**
   - `https://yourusername.github.io/my-portfolio.github.io`

## ⚡ よく使うコマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 静的ファイル生成
npm run export

# デプロイ
npm run deploy
```

## 🔧 トラブルシューティング

### **スタイルが適用されない**
- ブラウザのキャッシュをクリア
- 開発サーバーを再起動

### **画像が表示されない**
- `public/` フォルダに画像を配置
- パスが正しいか確認

### **リンクが動作しない**
- URLが正しいか確認
- 外部リンクは `target="_blank"` を追加

---

**💡 ヒント**: まずは必須変更項目から始めて、徐々にカスタマイズを進めることをお勧めします！ 