# 🚀 دليل نشر المشروع على Netlify

## مركز الرؤية للابتكار الرقمي - The Vision

---

## 📋 المتطلبات الأساسية

- حساب على [Netlify](https://netlify.com)
- حساب على [GitHub](https://github.com) (اختياري)
- Node.js 20 أو أحدث

---

## 🔥 طريقة النشر السريع

### الطريقة الأولى: النشر المباشر من خلال Netlify CLI

1. **تثبيت Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **تسجيل الدخول:**
```bash
netlify login
```

3. **بناء المشروع:**
```bash
npm run build
```

4. **نشر المشروع:**
```bash
netlify deploy --prod
```

---

### الطريقة الثانية: النشر من خلال واجهة Netlify

1. **رفع المشروع على GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - Ninja Zone Center by The Vision"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **الربط مع Netlify:**
   - اذهب إلى [Netlify Dashboard](https://app.netlify.com)
   - اضغط "Add new site" → "Import an existing project"
   - اختر GitHub وحدد المستودع
   - الإعدادات ستكون تلقائية من ملف `netlify.toml`

3. **الإعدادات التلقائية:**
   - Build command: `npm run build`
   - Publish directory: `.output/public`
   - Node version: `20`

---

### الطريقة الثالثة: النشر بالسحب والإفلات

1. **بناء المشروع:**
```bash
npm run build
```

2. **اذهب إلى [Netlify Drop](https://app.netlify.com/drop)**

3. **اسحب مجلد `.output/public` وأفلته في الصفحة**

---

## ⚙️ إعدادات إضافية

### المتغيرات البيئية (Environment Variables)

إذا كان المشروع يحتاج متغيرات بيئية:
1. اذهب إلى Site Settings → Environment Variables
2. أضف المتغيرات المطلوبة

### النطاق المخصص (Custom Domain)

1. اذهب إلى Domain Settings
2. اضغط "Add custom domain"
3. اتبع التعليمات لربط النطاق

---

## 🔧 أوامر مهمة

```bash
# تشغيل المشروع محلياً
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء
npm run preview

# فحص الأخطاء
npm run lint
```

---

## 📝 ملاحظات مهمة

✅ **تم إزالة جميع اعتماديات Lovable**
✅ **تم تحديث الـ Metadata لتكون جاذبة عند المشاركة**
✅ **الموقع جاهز للنشر على Netlify**
✅ **تم إضافة ملف `netlify.toml` للتهيئة التلقائية**

---

## 🎯 التحقق من الجاهزية

قبل النشر، تأكد من:
- [ ] المشروع يعمل محلياً بدون أخطاء (`npm run dev`)
- [ ] البناء يتم بنجاح (`npm run build`)
- [ ] جميع الروابط تعمل بشكل صحيح
- [ ] الصور والأيقونات محملة

---

## 📞 الدعم

**تم تطوير هذا المشروع بواسطة:**
مركز الرؤية للابتكار الرقمي - The Vision Digital Innovation Center

---

## 🌟 ميزات الموقع

- 🎮 تصميم حديث بأسلوب Neon Gaming
- 📱 متجاوب بالكامل (Responsive)
- ⚡ سريع وأداء عالي
- 🌍 دعم كامل للغة العربية (RTL)
- 🔍 محسّن لمحركات البحث (SEO)
- 🎨 تجربة مستخدم احترافية

---

**Good Luck! 🚀**
