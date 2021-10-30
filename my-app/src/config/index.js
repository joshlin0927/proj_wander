export const debug = true
// 測試開發/營運網址
export const devUrl = 'http://localhost:3000'
export const prodUrl = 'http://www.abc.com'
export const API_HOST = 'http://localhost:3001'
export const UPLOAD_AVATAR = API_HOST + '/try-upload2'
export const IMG_PATH = API_HOST + '/imgs'

//登入
export const MemberLogin = API_HOST + '/login-jwt'
export const MemberLoginVerify =
  API_HOST + '/login-jwt-verify'

//登出
export const MemberLogout = API_HOST + '/logout'

//讀取、修改個人資料
export const MemberVerify = API_HOST + '/SingleMember'
export const MemberEdit = API_HOST + '/SingleMember/edit/'

// TcCourse CRUD
export const TcCourse_ADD = API_HOST + '/TcCourse/add/'
export const TcCourse_LIST =
  API_HOST + '/TcCourse/api/list/'
export const TcCourse_EDIT = API_HOST + '/TcCourse/edit'
export const TcCourse_DELETE =
  API_HOST + '/TcCourse/delete/'

// TcVideo CRUD
export const TcVideo_LIST = API_HOST + '/TcVideo/api/list/'

//讀取資料列表
export const Member_LIST = API_HOST + '/member/api/list'
export const SentenceGame_LIST =
  API_HOST + '/sentence-game/api/list'
export const SentenceGame_SOT =
  API_HOST + '/sentence-game/sound-of-text'

// cart route
export const Cart_API = API_HOST + '/cart'

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
]
