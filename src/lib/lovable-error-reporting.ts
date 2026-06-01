// مركز الرؤية للابتكار الرقمي - The Vision
// نظام معالجة الأخطاء

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  
  // تسجيل الأخطاء في الـ console
  console.error('Error reported:', {
    error,
    context: {
      route: window.location.pathname,
      ...context,
    },
    timestamp: new Date().toISOString(),
  });
  
  // يمكن إضافة تكامل مع خدمة تتبع الأخطاء هنا
  // مثل Sentry أو LogRocket
}
