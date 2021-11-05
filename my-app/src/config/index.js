export const debug = true
// 測試開發/營運網址
export const devUrl = 'http://localhost:3000'
export const prodUrl = 'http://www.abc.com'
export const API_HOST = 'http://localhost:3001'
export const UPLOAD_AVATAR = API_HOST + '/try-upload2'
export const IMG_PATH = API_HOST + '/img'

//登入
export const MemberLogin = API_HOST + '/login-jwt'
export const MemberLoginVerify =
  API_HOST + '/login-jwt-verify'

//登出
export const MemberLogout = API_HOST + '/logout'

//讀取、修改個人資料
export const MemberVerify = API_HOST + '/SingleMember'
export const MemberEdit = API_HOST + '/SingleMember/edit'
export const MemberAvatar =
  API_HOST + '/SingleMember/avatar'

// 密碼更改
export const PasswordChange =
  API_HOST + '/SingleMember/passEdit'

// TcCourse CRUD
export const TcCourse_ADD = API_HOST + '/TcCourse/add/'
export const TcCourse_LAST = API_HOST + '/TcCourse/LastAdd/'
export const TcCourse_Cover = API_HOST + '/TcCourse/Cover/'
export const TcCourse_LIST = API_HOST + '/TcCourse/api/list'
export const TcCourse_EDIT = API_HOST + '/TcCourse/edit'
export const TcCourse_DELETE =
  API_HOST + '/TcCourse/delete/'

// Tc Analytic
export const TcAnalytics = API_HOST + '/TcCourse/analytics'

// TcVideo CRUD
export const TcVideo_ADD = API_HOST + '/TcVideo/add'
export const TcVideo_LAST = API_HOST + '/TcVideo/LastAdd/'
export const TcVideo_LIST = API_HOST + '/TcVideo/api/list/'
export const TcVideo_EDIT = API_HOST + '/TcVideo/edit'
export const TcVideo__DELETE = API_HOST + '/TcVideo/delete/'

//讀取資料列表
export const Member_LIST = API_HOST + '/member/api/list'
export const SentenceGame_LIST =
  API_HOST + '/sentence-game/api/list'
export const SentenceGame_SOT =
  API_HOST + '/sentence-game/sound-of-text'
//課程資料
export const CsCourse_LIST =
  API_HOST + '/cs_course/api/list/'

export const CsCourse_API = API_HOST + '/cs_course'
export const CsCourse_EDIT = API_HOST + '/cs_course/edit'
export const CsCourse_Cover = API_HOST + '/cs_course/Cover/'

//article-messenger-list

export const Art_Article_messenger_LIST =
  API_HOST + '/art_messenger_list/api/list'

//article-POP-list

export const Art_Article_POP_LIST =
  API_HOST + '/art_article_pop_list/api/list'

//article-inter-list

export const Art_Article_inter_LIST =
  API_HOST + '/art_article_inter_list/api/list'

//article-list
export const Art_Inter_LIST =
  API_HOST + '/article_inter/api/list'

//article-inter-list
export const Art_inter_LIST =
  API_HOST + '/art_inter_list/api/list'

//article-pop-list
export const Art_LIST = API_HOST + '/art_list/api/list'

//article-message CRUD
export const ArtMessage_LIST =
  API_HOST + '/art_messenger/api/list/'

export const ArtMessage_DELETE =
  API_HOST + '/art_messenger/delete/'

export const ArtMessage_EDIT =
  API_HOST + '/art_messenger/edit'

// cart&order&schedule route
export const Cart_API = API_HOST + '/cart'
export const SendOrder_API = API_HOST + '/sendOrder'
export const Calendar_API = API_HOST + '/stCalendar'

// export const UPLOAD_AVATAR = API_HOST + '/try-upload2'

export const pathnameList = [
  '/about',
  '/signup',
  '/login',
  '/CompanyBackend',
  '/TCindex',
  '/TCindex/TcProfile',
  '/TCindex/TcPassword',
  '/TCindex/TcCourse',
  '/TCindex/TcAnalytic',
  '/TCindex/TcCourseEdit',
  '/TCindex/TcCourseVideoUpload',
  '/TCindex/TcCourseVideoEdit',
  '/StIndex/StEditProfile',
  '/StIndex/StPasswordModify',
  '/StIndex/StStartMyCourse',
  '/StIndex/StSelectLanguage',
  '/StIndex/StGameStart',
  '/StIndex/StCourseEmpty',
  '/StIndex/StCourse',
  '/StIndex/StCalendar',
  '/StIndex/StClassroom',
  '/ArtIndex/Article',
  '/ArtIndex/ArticleMessage',
  '/ArtIndex/ArticleSt',
  '/ArtIndex/ArtMessage',
  '/ArtIndex/ArtMessageADD',
  '/Cart/Step01',
  '/Cart/Step02',
  '/Cart/Step03',
]

export const pathnameTextList = [
  '/關於我們',
  '/會員註冊',
  '/會員登入',
  '/教師會員管理',
  '/教師頁面',
  '/教師頁面/個人資料',
  '/教師頁面/密碼更改',
  '/教師頁面/課程列表',
  '/教師頁面/數據分析',
  '/教師頁面/課程細節頁面',
  '/教師頁面/課程內容上傳',
  '/教師頁面/課程內容管理',
  '/學生頁面/個人資料',
  '/學生頁面/密碼更改',
  '/學生頁面/開始課程',
  '/學生頁面/選擇語言',
  '/學生頁面/課程測驗',
  '/學生頁面/未購買課程',
  '/學生頁面/我的課程',
  '/學生頁面/課程管理',
  '/學生頁面/教室上課',
  '/熱門文章',
  '/熱門文章/文章內容',
  '/國際角落',
  '/國際角落/文章內容',
  '/國際角落/留言頁面',
  '/購物車/確認購物車內容',
  '/購物車/選擇付款方式',
  '/購物車/完成訂單&付款',
]
