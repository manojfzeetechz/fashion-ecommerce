import React, { useState } from 'react';
import { TfiPlus, TfiClose, TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import Features from './Feature';
import { FaFacebookF } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Shopinstagram = () => {
  const imageData = [{
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/521114620_18067008749164890_4274971218100482807_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=R_E-T6sT2oMQ7kNvwHONIVh&_nc_oc=Adm9GONJeg3q5vJR15NoKVfMtnS_wK68kGmjwHg-zpkNVeIwTPfR-GaxHgi8iT6MrWM&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfQMGMd7pwHHzed_Btjna4bXqXnH_dAdKwIjsNVyFwoA6w&oe=687EB5F5",
    alt: "",
    title: "Carry an air of whispered decadence in our sumptuous dress collection🌹",
    date: "16th March 2025",
  },
  {

    url: "https://scontent.cdninstagram.com/v/t51.82787-15/519021055_18067003130164890_2745146857216411402_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=Lb52l3jQUBgQ7kNvwE0NOT9&_nc_oc=AdmbtsTYlBA9Xwf5V55OWhMdkbcvj9Y_kYcgQs27KWdZXDWzZNb2V86SokJoQgP_-XI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfQrH3p7iAH-ETJjxag4kWMDPz__NX8PgFgIuCaCWeUy4A&oe=687E9D4E",
    alt: "",
    title: "Unleash your inner goddess with our enchanting dress collection✨",
    date: "15th March 2025",
  },
  {

    url: "https://scontent.cdninstagram.com/v/t51.82787-15/519677691_18066913556164890_4298801169813340993_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=cjJd3-58IiYQ7kNvwFuwpPB&_nc_oc=Adln3HTcfXSzDvUffgVos4n67DI3wvhFUwWr_1oYAhwl8TgzTyyLpgVI_A1LB7smeiU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfSe4_keQWCRwLeT8MoWojWOSoYnqKczS71qqsavf5A1sQ&oe=687EB842",
    alt: "",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",

  },
  {

    url: "https://scontent.cdninstagram.com/v/t51.82787-15/518580278_18066827234164890_4697500130353042541_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=ysrYDw4nRb8Q7kNvwG-Meh8&_nc_oc=AdlhXHcnWPV-A4O0zvz51F0YEOVlJJZbQMLmP68FPs-CYmyReahbo6Nt6ZZn-ewnVcI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfT0BZoB8veiyE7n5BX0gOBuhGq455pdMsmFnqSUoV5Uyg&oe=687E96C1",
    alt: "",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/518887314_18066822539164890_4182850638449714293_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=YpseYSYgExMQ7kNvwEvhbR7&_nc_oc=Adl0zemA-pGl1ikwdnan4F1YqMsaSztqkp1H-mGDC5fCGOsdFQI4rGhsKqkFEDHU4kE&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfRJ3sBx2ZiTp-Uc9OgVJoY3dMX4IF3ilg3qxNtJIebFNg&oe=687EA81D",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/518561785_18066726707164890_8263711968362868512_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=qBTOdkzXoe0Q7kNvwFQkUH2&_nc_oc=AdmrMZI3Vgv4Kf0iaUHKF6A_Tj4xoKzT-zKirL6Kue9Efi-Z5cg-DEdecKMWEssisDQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfTlk5UUh2SpJEpUAyp_ZfoPAcLavAbU_t0dINI0KCURJQ&oe=687E994D",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },

  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/520196043_18066721853164890_5266450878178233622_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=VuXgO3CdNdcQ7kNvwFN33nS&_nc_oc=Adkp0CqwqzxM8ngwWtInJqZLx7JiNriVdu2Q7Fo1VNUa_VhrS8cTWOkUuPIa2lHq2-4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfQkHNmwY5N5kxyuFby4-sxcTnaaFFPvWzb5AdedsIvMpg&oe=687EC9F4",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/518475123_18066633860164890_5718109768003064381_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=dh22f_hsamQQ7kNvwHggo2L&_nc_oc=Adkv_twPDavckEWW9lL5qPWlkGn0u8KB4GT2nEf1dmejgG4NrDV0_sAopbbtwM_ub10&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfTxLQajS07Td7MPFeEFHSKTaJbjGHfraHfjuL9zqDtcCA&oe=687EA9A6",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/518435199_18066629354164890_8720363803514874188_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=1tT_Ljv5psMQ7kNvwHP6tnF&_nc_oc=Adk7Q3pTj3hKHpHYlb-QFX7gT4HoebBA8nB-yJWTRfG2e6NAlz1RqpEyr4hKFT0dDww&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfSHfGnihvVe5WkpVQw5DhvuaCHaI43s38LUtzTP_QywAQ&oe=687EA9DC",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/518313946_18066542249164890_8867266335382560482_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=GaxR_79_BL8Q7kNvwH_Vrsj&_nc_oc=AdmBXaH0-EVGqIKKYo_cqIRRVzN4K1OfivAI7YXR7-rwK_dj-_JbGOw5-k0BwxbIf4M&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfR2hk1--cg0lvJ1v_z0du3qModgfDjDyrwRtcBShvqT1A&oe=687EB96C",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/518591350_18066538436164890_7937590636302470484_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=-L83f9LKUEIQ7kNvwEDoaLJ&_nc_oc=AdmY7N54fg1Ogf-93h-1zWAwmx9uapJlhMwVZMza1yT_uSfnFneMNR58MtGq03uk83Y&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfQTGf27aC-ZBccTj8dRBomyK9TPmfGf-lHp5gEdcMHnZQ&oe=687EAF79",
    title: "Step into a world of elegance with our exquisite dress collection 🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/518217032_18066448310164890_1311982667094232071_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=gcVFfT-1iPQQ7kNvwHs_Fw2&_nc_oc=AdmqnVCdkDopgPmAfz-iRAJUTyva2gyNbrDH4GBDzO7uQ4yU3xDQrQgteCS6TUvLVtI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfT7rtgmKVP5gNUvZWm7OW2hGiQY898aD1Ucdrch-0qDtA&oe=687EBF04",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/517934393_18066445178164890_8222690807034073116_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=lxcGKPG32roQ7kNvwHYcChU&_nc_oc=AdnOQZK4Pf7KNXg9MP8k99jf6Cr7uVvf3PwoziewN3ERuWG63LxVdFjn-KQBiAR8N_8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfS0J7jBByNgEFu2ImQNx3wdyuGWJ-Z15bpBlPhhsXtJwA&oe=687EAE7E",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/517714615_18066361298164890_1263087507422756279_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=zmoOO-3bkY8Q7kNvwFmWtug&_nc_oc=AdlorO8R0GlAtn4w5hJRmzbLU3SkvJziREhi9ve3V0D49CccuNcQYuKzWepIOGXg5Ps&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfQdGBNh-TAq8B0-EtjanpxMrjW0G4mRWCgAnPSWcKcFWg&oe=687EC9CC",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/517317662_18066356543164890_6320004235229196883_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=nOxRleaFs-EQ7kNvwF-kcNT&_nc_oc=Adlzld8KJu_2ChWOSzw2pXocoijcYJBhJFEXha9-CeRG6G9iOrv-U4mrDaUqW6Ei-4c&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfRi6HYjd-q78KnAdk4HGdwQfpn1JggQy84ca8ZtG3a8jQ&oe=687EC79A",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/517372181_18066270620164890_753732566917554536_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=COAxn_t9JFsQ7kNvwEHpmob&_nc_oc=AdkVQSL-mY4NH2m8gCQbOSXVLqFDdIDnF7FZz08npD1FLdeDtVUCIPQyMbuH0YX4EDQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfR6oTzcCSzmW-KLj23_wp_3B2s4IE57PjpPHlNyxcz3wg&oe=687EC653",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/516845474_18066187901164890_3216488281888255588_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=gyK3qonkwwoQ7kNvwH-Pu48&_nc_oc=Adn0q6V1CV9c5ofkYB8Iv0XvVwlFb8rFhHwPLLXBsjqCzcHq8YB5VfSGN31UPvSZFOY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfT49db-1k3mJjceUIBj-fII8dLcMJMv0_ifu8BUGNv-iA&oe=687EB8DC",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/515922589_18066183344164890_1707133049775010729_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=Xc0rcQlOPNsQ7kNvwGesOZg&_nc_oc=Adm_VDQZYhiiiykqBjax5c7xfIR8D5USl82_KPGzz8kX9d3DMM5rZswnUzLBD1VdycU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfQIWRjmvm3M8xq_viutuGDaju7l3QzUDeYOPPGHB3tgYA&oe=687EC933",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/516396591_18066093152164890_8226735052310611420_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=ydx-J-ruxJ0Q7kNvwG64CUN&_nc_oc=AdkHGuVGNTVnurbB5xeWcUITdmILgXTYAa_WBpPnV_iVWX9h4IjTo3siQC0VY8iqtIA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfQPcoFCgGYcGfm4HX3Z5CpwxY5FFvf6cgqjvy1JbbXqLA&oe=687EC3F9",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/517324964_18066088766164890_3989360288452100635_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=wJTACflm1TMQ7kNvwHiRv3V&_nc_oc=AdlnyTXQ9OgLilNNFStolMM2aqlr_lM5TKh2xJHu_Vm76A1-SNkLNnqBY6crZMJnulc&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfTc_rwmIB_aWm1hsvQLCN1SkOCWZthLPVLlg7kZ11ifbw&oe=687ECBAC",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/515891520_18065996939164890_1786549028633864639_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=xmtS58BZJbAQ7kNvwEOBokP&_nc_oc=AdmOtrjwyTp4ORewTzgxGmPNFJ3rfjzrUemZmJcOhixPExG708V5uhDQ_OFhTH0M6I0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfRuuOGgjvmfzaAkp0eHrKWS1Xu87o_ehXTl2NRrnxMTGQ&oe=687E988E",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/504012138_18065992007164890_6807203062953653028_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=-ZRUBA7NXAwQ7kNvwHluX0c&_nc_oc=Adm_y5sQTtIOt7g5nbV1k_rY9h22ys18gJ59tUeadr2LPMxwRt9J0uhq5I6OS84YOrs&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfTzx2KWFwMW6WnHtN6DTWR_qqd1mNKJShqb4iPMxDPbzA&oe=687EBC0A",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/515640785_18065902877164890_764212798453642211_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=xivSHn8Jct8Q7kNvwHX8GRk&_nc_oc=AdnrzFJhQb98gGMGHdswPohgO_LtLKEsrDN5zPx9jRpL4GZ6NtSxwQaBnSrnkvoseK4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfRt-O60lfZZmmpcOIDgXiw6lcbx7M1sVrZIQmZmV_1JIg&oe=687EB9AC",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/516257721_18065897930164890_2102896079549251224_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=hNst04cdGlwQ7kNvwHqEkF6&_nc_oc=AdkLvjVmEaVSzCRkWbD8BZ6_Idouf3ncU8jq4R_LkzDS5hORoGiyJ7jeDeDVtC634EI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfQzQl2ycFXQXY_pgI51tcBLt_-F4WtMiMavD5Y_a_HjVw&oe=687EBF78",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/515932227_18065812304164890_480538599995016510_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=dSF8ZZQ3TqIQ7kNvwFhx7ZH&_nc_oc=AdmWugezUu1-I3r1_GxqDY6ampFsSLvVfkN1xl3RnDSh2TVUtxIlY4VeXfOmlbTYxok&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=X2iJfmVk09AYvlvKtHr3xA&oh=00_AfTjPxErB0ajgwq9db03GnYRoSGBO8fCxAAXgvmk0Yyzow&oe=687EB86D",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },

  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/515280506_18065806397164890_6388503335263176616_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=ZyB4NjRkFmgQ7kNvwHzEm7u&_nc_oc=Adl9G_jeuZztG0Jwr1dBe-KUSO-c14xuHp0BTq-AMvBYEkJWTeElniJ642egkFOkUws&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfQ2LVmPejwoqpBtNVmqeWev-3fQU75xM9lzcE19Q4Yi3g&oe=687ED64F",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/504384542_18065725628164890_1010937936857350467_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=V42vb0HiAfcQ7kNvwEqFMxK&_nc_oc=Adn9yYblai7Yu069zwTDfwXLOx2LwqVXI3_8hAgTA3_VBYifcjrWS3hZXvkG_oGamlo&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfSvF6SGkW3VsW3luVKAvqey7m9CFZNHQKBV-LkeCT6Zmg&oe=687EC2D7",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/504643468_18065721488164890_9015273024797793905_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=uKrYsxzZ6PgQ7kNvwEhOfuZ&_nc_oc=Adk0qi7Wu5nwTimP9IfgI3E5xzIgjpK71z8y_-0gsYtF71pDm11kErB8mHmePZmVx5A&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfR3o_rCWZHopElfhcPyPZoSj9-nCnAmP4mV5pQMtwIo9w&oe=687EA5E6",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.82787-15/514871555_18065635388164890_1616560799844538010_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ei4YxiCLe3IQ7kNvwGjfOZw&_nc_oc=Adm7Z9OFfJkgyOJg8wU2JmMKOsCY9cXDl_JR5mJpK2p_PkSDl2lF6qSNvXr5BzAz5oQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfS8Anfy7JXs_e6-pEzWJj4EjjUdZWmPjvAh5Z1wDTVARA&oe=687EC067",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/514722943_18065544389164890_4463564132794224982_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=Nmypml4ij3cQ7kNvwGbmlc-&_nc_oc=AdlSJptp00bEh5gZCtDGGHM__1Njo-XHbEOHWsSGyaqrZ56ldd5_le0NEfUgOsP_bp0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfRe9JAvhAG5Lk0DSsthBOGxcHH36c1uhfbnlrlNpRtpYQ&oe=687ED53C",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/515101015_18065540231164890_4561066211133662027_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=Zl7BkG1CVVcQ7kNvwGLQvVZ&_nc_oc=AdmEkZOrvPtIiRHNIG_orQ2HRIWqscVqFFfMICLU3DHzif6zw33gE946pKBdPpDTm4g&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfS-Z_nSoyGnqEugyXXyHBuBtwag3Rgj6bwno-CuYtDr9A&oe=687EABC3",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/514495385_18065451536164890_1905596478171294137_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=PqlSf1lYAWcQ7kNvwElFc-u&_nc_oc=AdkFrnRtbpuwprBk0F1bv4rerd4aj1H5Viliuov090LDQVlV7TlSpRH9loaa3CVu02s&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfQhZ0A4CPaL8za6UVBHS38ZylXNuhBQg8zGvFsKPNWNfQ&oe=687ED4FD",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/514670773_18065447072164890_1912879272062397873_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=Ej8WCGOKndMQ7kNvwGIY3kg&_nc_oc=AdloFD_NPcZStKgeV8FbxJv13XuQEjOS7uVEybmZoCbebxB_jkeBUJx15VoGemn2bg8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfRmw8GuZ3t6IQcOKQEKCvbIzgwTlZd6ygGZO-MzH0B4Zw&oe=687ED10D",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/514233925_18065354285164890_2228519507516911603_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=EpOgetVkHX0Q7kNvwED3ZAp&_nc_oc=Adn0l9_WxExL5mxLoBz8x5q4E-edgNnHz9F-UPAldKxNveMihMMQ_MUqPmaivgsXxEk&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfQuE-cZ89kbKTYI6t7fYGk7peko2Dqi-6MNWZ0f9zh5eQ&oe=687EB026",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/504284691_18065350283164890_1932621394767075875_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=LJq2qk4wjocQ7kNvwFr7ePv&_nc_oc=AdkN6B0sffNEcpnbSkZsZEGuS08TvFKVHoX5WAcQI4ElWIZfSMbE5GBEVmZO8EkpNa8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfQnPpln0RoJ_XiWFi3-BLDfoNNPL2d2os4F-PX4kWTJCg&oe=687EC2FE",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/514075444_18065259803164890_763041701932880892_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=RZZKkmBlklEQ7kNvwEc2iMm&_nc_oc=AdlkG2FNqS2qS1LgqAyYKynMN-3u4E35d-l7qyeBLXAskMl_UeLa_-Go3c4jWO5fH64&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfR_j9ezzrS8DEzo_zzF88MkcPpGhb_CHzailUoxtbMukQ&oe=687EA834",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/511565731_18065254742164890_8031542248540333705_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=MGQZOAmSsNAQ7kNvwGNjhnb&_nc_oc=Adkik5kBsCINya9FclBuT7NPQDRpal0nnQvOE2GJfy54AgWAFYrocoLjQP3LJy2wN48&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfSCUf510wLoDAffkBetRiFDewGe3v_DFuD4-Cpp5P_yQw&oe=687ECD54",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/511216852_18065162906164890_6470753798137574833_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=JUWqB2VwrbcQ7kNvwEA_k2L&_nc_oc=Adnft49Io0TGL3bfDL0fZizP-qvzLaIT7VcYuFcz9NCAxF1Wlih9XKSopzgVRJUnVGg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfTvI-rxSnY9klxRfFFxNTYpo62k26DrX6QRseDU3vnD-w&oe=687EB50E",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/513469384_18065157209164890_4861717388616428104_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=Oz_79mI7iegQ7kNvwGYb1KL&_nc_oc=Admw9WYLVsE_gzMAL8ZuG1t1mJlnkbfHJQHm_hoCasrTv7KPMBLUy8NCFt8heTvFRB4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfRYS2UFE6SNzjMunQz-nACZUgFuZF_or-_EUjF4VRJTYQ&oe=687EC665",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/513853116_18065075066164890_1602463509392111796_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=t66wdjmbCUoQ7kNvwH1oX_n&_nc_oc=Adml5sdRzSH6X3q8R5nHdecdrfaoket1hGNJr5fymrl7Yfuts-tZNYs-lXemoF3difs&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfQ-p4g6QK5NSgLQhVECwaRn0oN1rb22XGwQzaYs4lylCA&oe=687EC589",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/511543322_18065069429164890_4756899358649342870_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=OElLtCe-5fwQ7kNvwF3mCAZ&_nc_oc=AdnefZceAQDU_4GlwhfVjIKxnQHAXtD70OIPSKAhrvSQv1_e1lRppeTf68Dqvgdp2PM&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfSrIN_k7tVzRp1e4AxzDnYkdQF-c9JyqBsDqla8n5f4FQ&oe=687EB5B6",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/509955883_18064978289164890_7880725188556555261_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=b67_oj3Q89gQ7kNvwHhjfcq&_nc_oc=Adnvo62f1Kg-C9gu_jKbVsojJ8FBeMzeHqliRibofTNTR37wItFjwH_PjnRCsK7hOM8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfTTCOsO_VjFOJ01m1xFGc-ljGGtHNi1AbfCo1OrgWJXeQ&oe=687EA538",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/511654683_18064889432164890_6168868615540889002_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=jtQMmp3YBnEQ7kNvwECRQZm&_nc_oc=Adm4D4-h6X7SIQ9h3B_z7pZoweQk29LS6JVc8RD8KTbL7U6D58KpZYPRAVNekeRFIzU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfSZ66a4QmbRZrumtNR2FmXg_0BdGizHPa-a3SJLgcyk1Q&oe=687EC5E5",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/509706490_18064884941164890_8917878767522098028_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=KAp4cq8VvosQ7kNvwEHLXJc&_nc_oc=AdmI8WW-t9Uy5Gfiy65r6jGpiQGQexCia7t8Ds9qiBGtUu2mZ6FLmcUwXQ2Dph42bRw&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfR2bi0KYf6xHMHd-zrYeQouRNWiqBoJFX88LVWkF5gpHQ&oe=687EA9FA",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/503720365_18064800521164890_5815287561622010063_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=6YLEZ6GMlAMQ7kNvwE0TmVa&_nc_oc=AdlYe71n5MCk2xYXk78pPJTz53p0D-5kNULBsVpvzx4hIBjcDA2oCS2JV0P0ldV-1P4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfR5mu3E3KadDulJHSyS2gKow7gGm_FLVaKdhLhBUP2jug&oe=687EC9E0",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/502343393_18064794890164890_4935868400461238955_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=_pxa7mqInjAQ7kNvwFANCTd&_nc_oc=Adm9XcSQbfO8JW9AHiKMRbOZiWFNtGARYMdwFCijECR4uAcovt4Gn4X3BCMO5Ep09OA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfTxADyQgSVzcGrVmUsnq--EQdqy9OmI1YLp-w6bgqv3og&oe=687EBF83",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/509276420_18064709567164890_5970132992088050175_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=CReTDWxpP08Q7kNvwEqVhQh&_nc_oc=Adk7dYTjSjJYcUc1xfRESeBn-MsZiReDLsSqla9Uktgb60-QHcHb6i87l8aGLxGCCNk&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfQ0stqB_nCxSuh3tyMewMn9VDmFGSfRxpS6XjfSSxHpZg&oe=687EBCC8",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/502450817_18064705319164890_6775510973730106071_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=zsztuT8Ofj8Q7kNvwEj-uwM&_nc_oc=AdlXz3UXnS1wFEf4DuxF9OA5SuMrEr3q3d-1n8am3WyhI0PT3ZpdrpJW9SOTAaE0vF4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfQJ6ETfhM7LwotuVjybtL7ZVqNnzTtm44FVVmj1i_JfZQ&oe=687EC52F",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/509245985_18064617554164890_8066311538196026107_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=AnWI-YHdUesQ7kNvwGK7IyD&_nc_oc=AdmSe2lgoAWGmS6ClkwIPm9sIDh_c6rSaYOwT6NAxk3wlvkhSNS9tbNyociuW5TSfT8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfTtzB9Q3UrlnffvwFOaFr1lWFwjb3XFdvRl5Wp0st_QDw&oe=687EAE5D",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },
  {
    url: "https://scontent.cdninstagram.com/v/t51.75761-15/509671913_18064612955164890_1912922026401453728_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=UPLYHXrs8Z0Q7kNvwGGGo1R&_nc_oc=AdlEVWk1CCr77p0sdvXz_ilOcUGrhcaNhQPPcw3TakdVKxm3Aa6odk6JhW6yVKI4i-g&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=a5NwzZbmOzz6Kvm7jHH2Jw&oh=00_AfQqAxlwyDYpWNL-Vw3wpiLSG1r5WKaAFcIe1O7b6pphWQ&oe=687ED9B7",
    title: "Step into a world of elegance with our exquisite dress collection🌸",
    date: "14th March 2025",
  },];

  const [visibleCount, setVisibleCount] = useState(25);
  const [modalIndex, setModalIndex] = useState(null);

  const handleShowMore = () => setVisibleCount(imageData.length);

  const openModal = (idx) => setModalIndex(idx);
  const closeModal = () => setModalIndex(null);

  const showNext = () =>
    setModalIndex((i) => (i + 1) % imageData.length);

  const showPrev = () =>
    setModalIndex((i) => (i === 0 ? imageData.length - 1 : i - 1));

  return (
    <>
      <div className="bg-white text-black w-full">
        <h2 className="font-serif text-[30px] text-center mt-5 text-[#333]">
          Tap Photo to Shop
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-14">
          {imageData.slice(0, visibleCount).map((item, idx) => (
            <div key={idx}
              className="relative group overflow-hidden shadow-md w-[262px] h-[262px] cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white"
                  viewBox="0 0 24 24" stroke="white" className="w-8 h-8">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < imageData.length && (
          <div
            onClick={handleShowMore}
            className="cursor-pointer flex items-center justify-center text-gray-600 text-4xl font-bold p-4 relative bottom-12"
          >
            <TfiPlus />
          </div>
        )}

        <Features />
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div className="fixed w-full h-full inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-[rgba(116,99,99,0.65)] bg-opacity-70 z-10" onClick={closeModal}></div>

          <div className="relative w-[90%] max-w-6xl h-[90vh] bg-white p-6 text-black flex flex-col md:flex-row z-50">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 text-4xl"
              onClick={closeModal}
            >
              <TfiClose />
            </button>
            
            {/* Image (left side - full width on mobile, 60% on desktop) */}
            <div className="w-full md:w-[60%] h-[60%] md:h-full flex items-center justify-center pr-0 md:pr-4">
              <img
                src={imageData[modalIndex].url}
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Content (right side - full width on mobile, 40% on desktop) */}
            <div className="w-full md:w-[40%] flex flex-col items-center md:items-start justify-center md:pl-6 mt-4 md:mt-0">
              {/* Navigation arrows */}
              <div className="flex gap-4 mb-4 md:mb-8 text-gray-400">
                <button onClick={showPrev}>
                  <TfiAngleLeft size={35} />
                </button>
                <button onClick={showNext}>
                  <TfiAngleRight size={35} />
                </button>
              </div>

              {/* Text Content */}
              <div className="w-full text-center md:text-left">
                <p className="italic font-Times New Roman, serif p-2 text-gray-900">
                  {imageData[modalIndex].title}
                </p>
                <p className="text-sm text-gray-600 tracking-wide uppercase mt-4 md:mt-10">
                  ELAGIAWEAR // INSTAGRAM // {imageData[modalIndex].date}
                </p>
                
                {/* Social Icons */}
                <div className="flex gap-4 text-gray-600 justify-center md:justify-start mt-6">
                  <a href="#"><FaFacebookF size={18} /></a>
                  <a href="#"><CiMail size={20} /></a>
                  <a href="#"><RiTwitterXFill size={18} /></a>
                  <a href="#"><FaPinterest size={18} /></a>
                  <a href="#"><FaLink size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shopinstagram;