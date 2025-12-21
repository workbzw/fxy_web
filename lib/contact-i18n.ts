import { Locale } from "./i18n";

export const contactData = {
  zh: {
    phone: "15834544303",
    email: "workbzw@gmail.com",
    address: "北京市海淀区中关村大街1号",
    wechat: "ztz_work",
    workTime: "工作日 9:00-18:00",
    socialMedia: {
      weibo: "https://weibo.com/ai-company",
      linkedin: "https://linkedin.com/company/ai-company",
      github: "https://github.com/ai-company",
    },
  },
  en: {
    phone: "15834544303",
    email: "workbzw@gmail.com",
    address: "No. 1 Zhongguancun Street, Haidian District, Beijing",
    wechat: "ztz_work",
    workTime: "Weekdays 9:00-18:00",
    socialMedia: {
      weibo: "https://weibo.com/ai-company",
      linkedin: "https://linkedin.com/company/ai-company",
      github: "https://github.com/ai-company",
    },
  },
};

export function getContactData(locale: Locale) {
  return contactData[locale] || contactData.zh;
}

