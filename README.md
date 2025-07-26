# 🎨 ポートフォリオサイト

Next.js 15とStyled Componentsを使用したモダンなポートフォリオサイトです。

## ✨ 特徴

- **Next.js 15** (App Router) - 最新のReactフレームワーク
- **TypeScript** - 型安全性
- **Styled Components** - CSS-in-JSによるスタイリング
- **レスポンシブデザイン** - モバイル・タブレット・デスクトップ対応
- **GitHub Pages** - 無料ホスティング
- **目次ナビゲーション** - 固定サイドバーによるセクション移動

## 🚀 デプロイ済み

このサイトはGitHub Pagesでデプロイされています：
**https://yourusername.github.io/my-portfolio.github.io**

## 📁 プロジェクト構成

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
├── out/                        # ビルド済みファイル（GitHub Pages用）
├── CUSTOMIZATION_GUIDE.md      # 詳細カスタマイズガイド
├── QUICK_REFERENCE.md          # クイックリファレンス
└── README.md                   # このファイル
```

## 🎯 セクション構成

1. **Hero** - 自己紹介と主要スキル
2. **About** - 詳細なプロフィールと強み
3. **Projects** - プロジェクト実績（主要・その他）
4. **Skills** - 技術スキルと資格
5. **Contact** - お問い合わせフォームと連絡先

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Styled Components
- **フォント**: Inter (Google Fonts)
- **デプロイ**: GitHub Pages
- **ビルド**: Static Site Generation (SSG)

## 📱 レスポンシブ対応

- **モバイル**: 768px以下
- **タブレット**: 768px-1024px
- **デスクトップ**: 1024px以上

## 🎨 デザイン特徴

- **モダンなUI**: グラデーションとシャドウを活用
- **スムーズなアニメーション**: ホバーエフェクトとトランジション
- **固定目次**: 右サイドバーによるセクション移動
- **一貫したデザイン**: 統一されたカラーパレットとタイポグラフィ

## 📚 カスタマイズ

詳細なカスタマイズ方法は以下のファイルを参照してください：

- **📖 [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** - 詳細なカスタマイズガイド
- **⚡ [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - クイックリファレンス

## 🚀 開発・デプロイ

### ローカル開発
```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

### ビルド・デプロイ
```bash
# ビルド
npm run build

# 静的ファイル生成
npm run export

# デプロイ
npm run deploy
```

## 📝 ライセンス

MIT License

---

**🎉 このポートフォリオサイトをベースに、あなたの情報に合わせてカスタマイズしてください！** 